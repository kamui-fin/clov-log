import Nav from "./Nav";

interface Props {
    children: React.ReactElement[] | React.ReactElement;
}

const Layout: React.FC<Props> = ({ children }) => {
    return (
        <div className="flex flex-col h-full pb-8">
            <Nav />
            <main className="flex-[1_0_auto] sm:px-3 md:px-4 max-w-5xl m-auto mt-10">
                {children}
            </main>
        </div>
    );
};

export default Layout;
