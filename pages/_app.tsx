import { AppProps } from "next/app";
import "../style/ayu-highlight.css";
import "../style/global.css";

const App: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
    return <Component {...pageProps} />;
};

export default App;
