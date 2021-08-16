import Link from "next/link"
import { FaRss, FaGithub } from "react-icons/fa";

const Footer: React.FC = () => {
    return (
        <div>
            <hr className=" mt-10 mb-10 border-blue-400" />
            <div className="flex flex-col items-center justify-center h-20">
                <div className="flex justify-between gap-6 m-auto text-lg">
                    <Link href="/rss.xml">
                        <FaRss className="cursor-pointer"/>
                    </Link>
                    <Link href="https://github.com/kamui-7/blog">
                        <FaGithub className="cursor-pointer"/>
                    </Link>
                </div>
                <p className="mt-8 pb-8 text-sm">
                    <span>&copy;</span> Copyright. All rights reserved.
                </p>
            </div>
        </div>
    );
};

export default Footer;
