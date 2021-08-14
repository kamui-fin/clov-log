const Nav: React.FC = () => {
    return (
        <nav>
            <ul className="flex flex-row justify-between pt-6 pb-4 px-20 shadow">
                <div>
                    <li>
                        <h2 className="font-bold">The Linux Zone</h2>
                    </li>
                </div>
                <div className="flex flex-row justify-between w-52">
                    <li>Archives</li>
                    <li>Tags</li>
                    <li>RSS</li>
                </div>
            </ul>
        </nav>
    );
};

export default Nav;
