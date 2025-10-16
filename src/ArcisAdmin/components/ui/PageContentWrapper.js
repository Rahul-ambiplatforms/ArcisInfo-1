import { Box } from '@chakra-ui/react'

const PageContentWrapper = ({ children, noPadding }) => {
  return (
    <Box
      mx={{
        base: noPadding === "force" ? "-4%" : noPadding ? "0" : "0%",
        md: noPadding === "force" ? "-2%" : "auto"
      }}
      px={{
        base: noPadding === "force" ? "-4%" : noPadding ? "0" : "4%",
        md: noPadding === "force" ? "-2%" : "2%"
      }}
      maxWidth="1565px"
    >
      {children}
    </Box>
  )
}

export default PageContentWrapper