import Nav from "./Nav";

interface Props {
    children: React.ReactElement;
}

const Layout: React.FC<Props> = ({ children }) => {
    return (
        <>
            <Nav />
            <main className="max-w-5xl m-auto mt-10">{children}</main>
        </>
    );
};

export default Layout;
