import { Box, Flex, Icon } from "@chakra-ui/react"
import { FaGripVertical } from "react-icons/fa"

const DragHandleComponent = ({ dragHandleProps, children }) => {
  return (
    <Flex align="center">
      <Box {...dragHandleProps} color="gray.400" mr={2} cursor="grab" _active={{ cursor: "grabbing" }}>
        <Icon as={FaGripVertical} />
      </Box>
      <Box flex="1">{children}</Box>
    </Flex>
  )
}

export default DragHandleComponent
