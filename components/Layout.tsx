import Nav from "./Nav";

interface Props {
    children: React.ReactElement;
}

const Layout: React.FC<Props> = ({ children }) => {
    return (
        <div className="flex flex-col h-screen">
            <Nav />
            <main className="flex-[1_0_auto] sm:px-3 md:px-4 max-w-5xl m-auto mt-10">
                {children}
            </main>
            <footer className="p-6 text-center mt-14 shrink-0 mb-10 h-18">
                Copyright &copy; 2022 Blog. All rights reserved
            </footer>
        </div>
    );
};

export default Layout;
