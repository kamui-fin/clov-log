interface Props {
    children: React.ReactNode;
}

const Container: React.FC<Props> = ({ children }) => {
    return <div className="max-w-3xl m-auto mt-10">{children}</div>;
};

export default Container;
