import { AppProps } from 'next/app'
import Navigation from "../components/Navigation";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import {appWithTranslation} from "next-i18next";
import {wrapper} from "../store";
import '../styles/global.css';

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <Navigation />
            <Container maxWidth="xl">
                <Box>
                    <Component {...pageProps} />
                </Box>
            </Container>
        </>
    );
};

export default appWithTranslation(wrapper.withRedux(App));