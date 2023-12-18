import Link from "next/link";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";

const Nav: React.FC = () => {
    const [isHidden, setHidden] = useState(true);

    const expandMenu: React.MouseEventHandler<HTMLButtonElement> = () => {
        setHidden(!isHidden);
    };

    return (
        <nav className="shrink-0">
            <ul className="flex flex-wrap sm:flex-nowrap justify-between py-5 px-6 max-w-7xl m-auto">
                <Link href="/">
                    <div className="cursor-pointer flex flex-shrink-0 flex-row items-start gap-3">
                        <img
                            src="/logo.svg"
                            height={25}
                            width={25}
                            alt="CLOV Logo"
                        />
                        <h2 className="font-bold">CLOV</h2>
                    </div>
                </Link>
                <button
                    type="button"
                    className="cursor-pointer focus:outline-none sm:hidden"
                    onClick={expandMenu}
                >
                    <div className="bg-white-200 w-5 h-0.5 m-1 rounded" />
                    <div className="bg-white-200 w-5 h-0.5 m-1 rounded" />
                    <div className="bg-white-200 w-5 h-0.5 m-1 rounded" />
                </button>
                <div
                    className={`${
                        isHidden ? "hidden" : ""
                    } sm:flex flex w-full flex-col mt-10 sm:flex-row sm:m-0 justify-end gap-8`}
                >
                    <li>
                        <Link href="/roadmap">Roadmap</Link>
                    </li>
                    <li>
                        <Link href="/browse">Browse</Link>
                    </li>
                    <li>
                        <Link href="/archive">Archive</Link>
                    </li>
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                    <li>
                        <Link href="/rss.xml">RSS </Link>
                    </li>
                    <li className="flex ml-1 md:justify-center sm:items-center">
                        <a href="https://github.com/kamui-fin/clov-blog">
                            <FaGithub />
                        </a>
                    </li>
                </div>
            </ul>
        </nav>
    );
};

export default Nav;
