import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from "@chakra-ui/react";

import '../styles/globals.scss'

/** Theme custom styles */
const theme = extendTheme({
    fonts: { body: "Poppins, sans-serif" },
})

const MyApp = ({ Component, pageProps }) => (
    /** Chakra provider for ui framework */
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
);

export default MyApp
