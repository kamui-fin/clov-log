/* eslint-disable react/jsx-props-no-spreading */
import { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import Container from "../components/Container";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import '../style/ayu-highlight.css'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <Nav />
            <Container>
                <Component {...pageProps} />
                <Footer />
            </Container>
        </>
    );
};

export default MyApp;
