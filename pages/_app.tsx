// import "@/styles/globals.css";
// import type { AppProps } from "next/app";

// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />;
// }

// pages/_app.js
// pages/_app.tsx
import { ChakraProvider, Box } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";
import "../styles/globals.scss"; // Include global styles
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Box display="flex">
        <Sidebar />
        <Box flex="1" ml={{ base: "0", md: "20%" }} p="4">
          <Component {...pageProps} />
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default MyApp;
