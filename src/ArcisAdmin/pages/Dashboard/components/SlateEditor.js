"use client";

import { useCallback, useMemo, useState, useRef, useEffect } from "react";
import { Slate, Editable, withReact, useSlate } from "slate-react";
import {
  createEditor,
  Editor,
  Transforms,
  Element as SlateElement,
  Text,
  Range,
  Point,
} from "slate";
import { withHistory } from "slate-history";
import isHotkey from "is-hotkey";
import {
  Box,
  ButtonGroup,
  IconButton,
  Tooltip,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Flex,
  Text as ChakraText,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Input,
  VStack,
  FormControl,
  FormLabel,
  useDisclosure,
  Checkbox,
} from "@chakra-ui/react";
import {
  FaBold,
  FaItalic,
  FaUnderline,
  FaAlignLeft,
  FaAlignCenter,
  FaAlignRight,
  FaAlignJustify,
  FaListUl,
  FaListOl,
  FaLink,
  FaPalette,
} from "react-icons/fa";

// Define hotkeys for formatting
const HOTKEYS = {
  "mod+b": "bold",
  "mod+i": "italic",
  "mod+u": "underline",
};

// Define list types
const LIST_TYPES = ["numbered-list", "bulleted-list"];

// Define text alignment types
const TEXT_ALIGN_TYPES = ["left", "center", "right", "justify"];

// Color options for text
const colorOptions = [
  { name: "Blue", value: "#9678E1" },
  { name: "Black", value: "#000000" },
  { name: "Gray", value: "#696969" },
  { name: "Light Blue", value: "#BECEDC" },
  { name: "Orange", value: "#DB7B3A" },
];

// Create an empty paragraph for initial state
const createEmptyParagraph = () => [
  {
    type: "paragraph",
    children: [{ text: "" }],
  },
];

// Check if the value is a valid Slate value
const isValidSlateValue = (value) => {
  if (!value) return false;
  if (!Array.isArray(value)) return false;
  if (value.length === 0) return false;

  // Check if each node has the required structure
  return value.every(
    (node) =>
      typeof node === "object" &&
      node !== null &&
      (node.type !== undefined || node.text !== undefined) &&
      (node.children !== undefined || node.text !== undefined)
  );
};

const SlateEditor = ({
  value,
  onChange,
  placeholder,
  showColorOption = true,
  fontSize = "md",
}) => {
  // Add debounce ref for performance
  const debounceTimeout = useRef(null);

  // Ensure value is always a valid array
  const initialValue = useMemo(() => {
    if (!isValidSlateValue(value)) {
      return createEmptyParagraph();
    }
    return value;
  }, [value]);

  const renderElement = useCallback((props) => <Element {...props} />, []);
  const renderLeaf = useCallback((props) => <Leaf {...props} />, []);
  const editor = useMemo(
    () => withLinks(withHistory(withReact(createEditor()))),
    []
  );

  // Debounced onChange handler
  const handleChange = useCallback(
    (newValue) => {
      if (debounceTimeout.current) {
        clearTimeout(debounceTimeout.current);
      }

      debounceTimeout.current = setTimeout(() => {
        if (onChange && isValidSlateValue(newValue)) {
          onChange(newValue);
        }
      }, 100); // 100ms debounce
    },
    [onChange]
  );

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (debounceTimeout.current) {
        clearTimeout(debounceTimeout.current);
      }
    };
  }, []);

  // Memoize keyboard handler
  const handleKeyDown = useCallback(
    (event) => {
      for (const hotkey in HOTKEYS) {
        if (isHotkey(hotkey, event)) {
          event.preventDefault();
          const mark = HOTKEYS[hotkey];
          toggleMark(editor, mark);
        }
      }
    },
    [editor]
  );

  return (
    <Box border="1px" borderColor="gray.200" borderRadius="md" p={2}>
      <Slate
        editor={editor}
        initialValue={initialValue}
        onChange={handleChange}
      >
        <Toolbar showColorOption={showColorOption} />
        <Box mt={2}>
          <Editable
            renderElement={renderElement}
            renderLeaf={renderLeaf}
            placeholder={placeholder}
            spellCheck
            autoFocus
            onKeyDown={handleKeyDown}
            style={{
              minHeight: "100px",
              fontSize:
                fontSize === "lg"
                  ? "16px"
                  : fontSize === "md"
                  ? "14px"
                  : "12px",
              overflowWrap: "break-word",
              wordBreak: "break-word",
              overflow: "hidden",
              whiteSpace: "pre-wrap",
              outline: "none",
              caretColor: "black",
              maxWidth: "100%",
            }}
          />
        </Box>
      </Slate>
    </Box>
  );
};

// Custom withLinks plugin to handle link behavior
const withLinks = (editor) => {
  const { isInline, insertText } = editor;

  editor.isInline = (element) => {
    return element.type === "link" ? true : isInline(element);
  };

  // Override insertText to handle typing after links
  editor.insertText = (text) => {
    if (text && isLinkActive(editor)) {
      // If we're typing a space after a link, move the selection out of the link
      if (text === " ") {
        const { selection } = editor;

        if (selection && Range.isCollapsed(selection)) {
          const [link] = Editor.nodes(editor, {
            match: (n) =>
              !Editor.isEditor(n) &&
              SlateElement.isElement(n) &&
              n.type === "link",
          });

          if (link) {
            const [, linkPath] = link;
            const endOfLink = Editor.end(editor, linkPath);

            // If we're at the end of a link, move outside and then insert the space
            if (Point.equals(selection.anchor, endOfLink)) {
              const after = Editor.after(editor, linkPath);
              if (after) {
                Transforms.select(editor, after);
              }
            }
          }
        }
      }
    }

    // Call the original insertText
    insertText(text);
  };

  return editor;
};

// Define the toolbar component
const Toolbar = ({ showColorOption }) => {
  return (
    <ButtonGroup size="sm" spacing={1} isAttached={false}>
      <MarkButton format="bold" icon={<FaBold />} tooltip="Bold" />
      <MarkButton format="italic" icon={<FaItalic />} tooltip="Italic" />
      <MarkButton
        format="underline"
        icon={<FaUnderline />}
        tooltip="Underline"
      />

      <BlockButton format="left" icon={<FaAlignLeft />} tooltip="Align Left" />
      <BlockButton
        format="center"
        icon={<FaAlignCenter />}
        tooltip="Align Center"
      />
      <BlockButton
        format="right"
        icon={<FaAlignRight />}
        tooltip="Align Right"
      />
      <BlockButton
        format="justify"
        icon={<FaAlignJustify />}
        tooltip="Justify"
      />

      <BlockButton
        format="bulleted-list"
        icon={<FaListUl />}
        tooltip="Bulleted List"
      />
      <BlockButton
        format="numbered-list"
        icon={<FaListOl />}
        tooltip="Numbered List"
      />

      <LinkButton />

      {showColorOption && <ColorButton />}
    </ButtonGroup>
  );
};

// Button for toggling marks
const MarkButton = ({ format, icon, tooltip }) => {
  const editor = useSlate();
  return (
    <Tooltip label={tooltip}>
      <IconButton
        variant="outline"
        colorScheme="gray"
        isActive={isMarkActive(editor, format)}
        onMouseDown={(event) => {
          event.preventDefault();
          toggleMark(editor, format);
        }}
        icon={icon}
        aria-label={format}
        size="sm"
        mr={1}
      />
    </Tooltip>
  );
};

// Button for toggling blocks
const BlockButton = ({ format, icon, tooltip }) => {
  const editor = useSlate();
  return (
    <Tooltip label={tooltip}>
      <IconButton
        variant="outline"
        colorScheme="gray"
        isActive={isBlockActive(
          editor,
          format,
          TEXT_ALIGN_TYPES.includes(format) ? "align" : "type"
        )}
        onMouseDown={(event) => {
          event.preventDefault();
          toggleBlock(editor, format);
        }}
        icon={icon}
        aria-label={format}
        size="sm"
        mr={1}
      />
    </Tooltip>
  );
};

// Fixed LinkButton component to handle multiple link insertions
const LinkButton = () => {
  const editor = useSlate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [url, setUrl] = useState("");
  const [linkText, setLinkText] = useState("");
  const [selectionState, setSelectionState] = useState(null);
  const [noFollow, setNoFollow] = useState(false);

  // Check if a link is active at the current selection
  const isActive = useCallback(() => {
    try {
      if (!editor || !editor.selection) return false;
      const [link] = Editor.nodes(editor, {
        match: (n) =>
          !Editor.isEditor(n) && SlateElement.isElement(n) && n.type === "link",
        at: editor.selection,
      });
      return !!link;
    } catch (error) {
      console.error("Error checking if link is active:", error);
      return false;
    }
  }, [editor]);

  // Unwrap link at the current selection
  const unwrapLink = useCallback(() => {
    Transforms.unwrapNodes(editor, {
      match: (n) =>
        !Editor.isEditor(n) && SlateElement.isElement(n) && n.type === "link",
    });
  }, [editor]);

  // Handle link button click
  const handleLinkButtonClick = useCallback(
    (event) => {
      event.preventDefault();
      if (isActive()) {
        unwrapLink();
        return;
      }
      if (editor.selection) {
        setSelectionState(editor.selection);
        if (!Range.isCollapsed(editor.selection)) {
          const selectedText = Editor.string(editor, editor.selection);
          setLinkText(selectedText);
        } else {
          setLinkText("");
        }
        onOpen();
      }
    },
    [editor, isActive, unwrapLink, onOpen]
  );

  // A new function to handle closing and resetting state
  const handleClose = () => {
    setUrl("");
    setLinkText("");
    setNoFollow(false); 
    setSelectionState(null);
    onClose();
  };

  // Insert a link with the provided URL, text, and noFollow status
  const insertLink = useCallback(() => {
    if (!url) return;
    if (selectionState) {
      Transforms.select(editor, selectionState);
    }

    // The data for the new link element, now including the noFollow property
    const linkData = {
      type: "link",
      url,
      noFollow,
      children: [],
    };

    if (editor.selection && !Range.isCollapsed(editor.selection)) {
      unwrapLink(); // Unwrap any existing links first
      Transforms.wrapNodes(editor, linkData, { split: true });
      Transforms.collapse(editor, { edge: "end" });
    } else {
      // If no text is selected, insert a new link node
      const text = linkText || url;
      linkData.children = [{ text }];
      Transforms.insertNodes(editor, linkData);
      Transforms.move(editor, { unit: "offset" });
    }

    handleClose(); // Use the new close handler to reset everything
  }, [
    editor,
    url,
    linkText,
    noFollow,
    selectionState,
    unwrapLink,
    handleClose,
  ]);

  return (
    <>
      <Tooltip label={isActive() ? "Remove Link" : "Insert Link"}>
        <IconButton
          variant="outline"
          colorScheme="gray"
          isActive={isActive()}
          onMouseDown={handleLinkButtonClick}
          icon={<FaLink />}
          aria-label="link"
          size="sm"
          mr={1}
        />
      </Tooltip>

      <Modal isOpen={isOpen} onClose={handleClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Insert Link</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={4}>
              <FormControl>
                <FormLabel>URL</FormLabel>
                <Input
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="https://example.com"
                  autoFocus
                />
              </FormControl>

              {/* Only show "Link Text" input if no text was pre-selected */}
              {selectionState && Range.isCollapsed(selectionState) && (
                <FormControl>
                  <FormLabel>Link Text</FormLabel>
                  <Input
                    value={linkText}
                    onChange={(e) => setLinkText(e.target.value)}
                    placeholder="Enter text to display"
                  />
                </FormControl>
              )}

              {/* Functional "No Follow" Checkbox */}
              <FormControl>
                <Checkbox
                  isChecked={noFollow}
                  onChange={(e) => setNoFollow(e.target.checked)} // <-- 3. Update the state
                >
                  No Follow
                </Checkbox>
              </FormControl>
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={handleClose}>
              Cancel
            </Button>
            <Button colorScheme="blue" onClick={insertLink}>
              Insert Link
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

// Button for changing text color
const ColorButton = () => {
  const editor = useSlate();

  const changeColor = useCallback(
    (color) => {
      Transforms.setNodes(
        editor,
        { color },
        { match: Text.isText, split: true }
      );
    },
    [editor]
  );

  return (
    <Menu>
      <Tooltip label="Text Color">
        <MenuButton
          as={IconButton}
          icon={<FaPalette />}
          aria-label="Text Color"
          size="sm"
          variant="outline"
          colorScheme="gray"
        />
      </Tooltip>
      <MenuList minW="0" w="auto">
        {colorOptions.map((color) => (
          <MenuItem
            key={color.value}
            onClick={() => changeColor(color.value)}
            closeOnSelect={true}
          >
            <Flex align="center">
              <Box
                w="16px"
                h="16px"
                borderRadius="sm"
                bg={color.value}
                mr={2}
                borderWidth="1px"
                borderColor="gray.200"
              />
              <ChakraText fontSize="sm">{color.name}</ChakraText>
            </Flex>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

// Define a leaf component to render text with formatting
const Leaf = ({ attributes, children, leaf }) => {
  if (leaf.bold) {
    children = <strong>{children}</strong>;
  }

  if (leaf.italic) {
    children = <em>{children}</em>;
  }

  if (leaf.underline) {
    children = <u>{children}</u>;
  }

  return (
    <span {...attributes} style={{ color: leaf.color }}>
      {children}
    </span>
  );
};

// Define an element component to render different block types
const Element = ({ attributes, children, element }) => {
  const style = { textAlign: element.align };

  switch (element.type) {
    case "bulleted-list":
      return (
        <ul
          style={{ ...style, paddingLeft: "20px", margin: "0" }}
          {...attributes}
        >
          {children}
        </ul>
      );
    case "numbered-list":
      return (
        <ol
          style={{ ...style, paddingLeft: "20px", margin: "0" }}
          {...attributes}
        >
          {children}
        </ol>
      );
    case "list-item":
      return (
        <li style={style} {...attributes}>
          {children}
        </li>
      );
    case "link":
      return (
        <Tooltip label={element.url}>
          <a
            href={element.url}
            style={{
              ...style,
              color: "#2B6CB0", // Chakra UI blue.600
              textDecoration: "underline",
              cursor: "pointer",
            }}
            rel={element.noFollow ? "nofollow" : undefined}
            {...attributes}
          >
            {children}
          </a>
        </Tooltip>
      );
    default:
      return (
        <div style={style} {...attributes}>
          {children}
        </div>
      );
  }
};

// Check if a mark is currently active
const isMarkActive = (editor, format) => {
  const marks = Editor.marks(editor);
  return marks ? marks[format] === true : false;
};

// Toggle a mark on or off
const toggleMark = (editor, format) => {
  const isActive = isMarkActive(editor, format);

  if (isActive) {
    Editor.removeMark(editor, format);
  } else {
    Editor.addMark(editor, format, true);
  }
};

// Check if a block is currently active
const isBlockActive = (editor, format, blockType = "type") => {
  const { selection } = editor;
  if (!selection) return false;

  const [match] = Array.from(
    Editor.nodes(editor, {
      at: Editor.unhangRange(editor, selection),
      match: (n) =>
        !Editor.isEditor(n) &&
        SlateElement.isElement(n) &&
        n[blockType] === format,
    })
  );

  return !!match;
};

// Toggle a block on or off
const toggleBlock = (editor, format) => {
  const isActive = isBlockActive(
    editor,
    format,
    TEXT_ALIGN_TYPES.includes(format) ? "align" : "type"
  );
  const isList = LIST_TYPES.includes(format);

  Transforms.unwrapNodes(editor, {
    match: (n) =>
      !Editor.isEditor(n) &&
      SlateElement.isElement(n) &&
      LIST_TYPES.includes(n.type) &&
      !TEXT_ALIGN_TYPES.includes(format),
    split: true,
  });

  const newProperties = {};

  if (TEXT_ALIGN_TYPES.includes(format)) {
    newProperties.align = isActive ? undefined : format;
  } else {
    newProperties.type = isActive ? "paragraph" : isList ? "list-item" : format;
  }

  Transforms.setNodes(editor, newProperties);

  if (!isActive && isList) {
    const block = { type: format, children: [] };
    Transforms.wrapNodes(editor, block);
  }
};

// Helper function to check if the current selection is inside a link
const isLinkActive = (editor) => {
  if (!editor.selection) return false;

  const [link] = Editor.nodes(editor, {
    match: (n) =>
      !Editor.isEditor(n) && SlateElement.isElement(n) && n.type === "link",
  });

  return !!link;
};

export { SlateEditor, createEmptyParagraph, isValidSlateValue };
