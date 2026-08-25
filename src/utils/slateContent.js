'use client';
import React from 'react';
import {
  Box,
  Text,
  UnorderedList,
  OrderedList,
  ListItem,
} from '@chakra-ui/react';

// Helpers for storing rich-text (Slate) content inside an existing plain
// string field. Used by the admin News editor and the public News page.
//
// Storage format: the Slate node array is JSON.stringify'd into the same
// `content` string field that previously held plain prose. Legacy posts
// (plain text with "\n" paragraph breaks) keep working because
// parseSlateContent() returns null for anything that isn't valid Slate JSON
// and callers fall back to the original plain-text rendering.

export const createEmptySlateValue = () => [
  { type: 'paragraph', children: [{ text: '' }] },
];

// Structural check mirroring isValidSlateValue in the admin SlateEditor,
// duplicated here so the public bundle does not import slate-react.
export const isSlateValue = (value) => {
  if (!Array.isArray(value) || value.length === 0) return false;
  return value.every(
    (node) =>
      typeof node === 'object' &&
      node !== null &&
      (node.type !== undefined || node.text !== undefined) &&
      (node.children !== undefined || node.text !== undefined)
  );
};

// Returns the Slate node array if `str` is serialized Slate JSON, else null.
export const parseSlateContent = (str) => {
  if (typeof str !== 'string') return null;
  const trimmed = str.trim();
  if (!trimmed.startsWith('[')) return null;
  try {
    const parsed = JSON.parse(trimmed);
    return isSlateValue(parsed) ? parsed : null;
  } catch {
    return null;
  }
};

// Converts legacy plain text into Slate paragraphs, one per line, so that
// existing posts keep their paragraph layout when reopened in the editor.
export const plainTextToSlate = (text) => {
  if (!text || typeof text !== 'string') return createEmptySlateValue();
  return text.split(/\r?\n/).map((line) => ({
    type: 'paragraph',
    children: [{ text: line }],
  }));
};

// Loads whatever is stored in `content` (Slate JSON, legacy text, or empty)
// into a Slate value for the editor.
export const contentToSlate = (stored) => {
  if (!stored) return createEmptySlateValue();
  return parseSlateContent(stored) || plainTextToSlate(stored);
};

export const slateToPlainText = (nodes) => {
  if (!Array.isArray(nodes)) return '';
  return nodes
    .map((node) => {
      if (!node) return '';
      if (node.text !== undefined) return node.text;
      return slateToPlainText(node.children);
    })
    .join('');
};

// Serializes a Slate value for storage. An editor left empty serializes to
// '' so the field keeps its existing "optional" semantics.
export const slateToContentString = (nodes) => {
  if (!isSlateValue(nodes)) return '';
  if (!slateToPlainText(nodes).trim()) return '';
  return JSON.stringify(nodes);
};

// Renders a Slate node array to React. Mirrors the node format produced by
// the admin SlateEditor (marks: bold/italic/underline/color; blocks:
// paragraph/align, bulleted-list, numbered-list, list-item, link/noFollow).
export const renderSlateContent = (content) => {
  if (!Array.isArray(content)) return null;
  return content.map((node, i) => {
    if (!node) return null;
    if (typeof node === 'object' && node.text !== undefined) {
      let textElement = node.text;
      if (node.bold) textElement = <strong key={i}>{textElement}</strong>;
      if (node.italic) textElement = <em key={i}>{textElement}</em>;
      if (node.underline) textElement = <u key={i}>{textElement}</u>;
      return (
        <span key={i} style={{ color: node.color || 'inherit' }}>
          {textElement}
        </span>
      );
    }
    if (node.type) {
      const children = node.children
        ? renderSlateContent(node.children)
        : null;
      switch (node.type) {
        case 'paragraph': {
          // Preserve blank lines from legacy content as visible spacing.
          if (!slateToPlainText(node.children).length) {
            return <Box key={i} h="1em" />;
          }
          return (
            <Text key={i} textAlign={node.align || 'left'} mb={3}>
              {children}
            </Text>
          );
        }
        case 'bulleted-list':
          return (
            <UnorderedList
              key={i}
              spacing={2}
              my={2}
              pl={5}
              textAlign={node.align || 'left'}
            >
              {children}
            </UnorderedList>
          );
        case 'numbered-list':
          return (
            <OrderedList
              key={i}
              spacing={2}
              my={2}
              pl={5}
              textAlign={node.align || 'left'}
            >
              {children}
            </OrderedList>
          );
        case 'list-item':
          return (
            <ListItem key={i} textAlign={node.align || 'left'}>
              {children}
            </ListItem>
          );
        case 'link': {
          let rel = 'noopener noreferrer';
          if (node.noFollow) rel += ' nofollow';
          return (
            <Box
              as="a"
              key={i}
              href={node.url}
              target="_blank"
              rel={rel}
              color="purple.600"
              textDecoration="underline"
              _hover={{ color: 'purple.700' }}
              display="inline"
            >
              {children}
            </Box>
          );
        }
        default:
          return (
            <Box key={i} textAlign={node.align || 'left'}>
              {children}
            </Box>
          );
      }
    }
    return null;
  });
};
