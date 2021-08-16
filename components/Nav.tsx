import Link from "next/link";
import Image from "next/image";

const Nav: React.FC = () => {
    return (
        <nav>
            <ul className="flex flex-row justify-around pt-6 pb-4 px-20 shadow-md">
                <div>
                    <li className="cursor-pointer flex gap-3">
                        <Image
                            className="mb-7"
                            src="/logo.svg"
                            height={25}
                            width={25}
                        />
                        <Link href="/">
                            <h2 className="font-bold">Linux Zone</h2>
                        </Link>
                    </li>
                </div>
                <div className="flex flex-row justify-between w-56">
                    <li>
                        <Link href="/archives">Archives</Link>
                    </li>
                    <li>
                        <Link href="/contact">Contact</Link>
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
