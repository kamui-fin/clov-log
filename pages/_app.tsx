import { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import "../style/ayu-highlight.css";

const App: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
    return <Component {...pageProps} />;
};

export default App;
