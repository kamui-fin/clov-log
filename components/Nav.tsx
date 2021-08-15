import Link from "next/link";

const Nav: React.FC = () => {
    return (
        <nav>
            <ul className="flex flex-row justify-between pt-6 pb-4 px-20 shadow-md">
                <div>
                    <li className="cursor-pointer">
                        <Link href="/">
                            <h2 className="font-bold">The Linux Zone</h2>
                        </Link>
                    </li>
                </div>
                <div className="flex flex-row justify-between w-52">
                    <li>
                        <Link href="/archives">Archives</Link>
                    </li>
                    <li>
                        <Link href="/tags">Tags</Link>
                    </li>
                    <li>
                        <Link href="/rss.xml">RSS </Link>
                    </li>
                </div>
            </ul>
        </nav>
    );
};

export default Nav;
