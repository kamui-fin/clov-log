import { FaRss, FaDiscord, FaGithub } from "react-icons/fa";

const Footer: React.FC = () => {
    return (
        <div>
            <hr className=" mt-10 mb-10 border-bunker-400" />
            <div className="flex flex-col items-center justify-center h-20">
                <div className="flex justify-between w-32 m-auto text-lg">
                    <FaRss />
                    <FaDiscord />
                    <FaGithub />
                </div>
                <p className="mt-8 text-sm">
                    <span>&copy;</span> Copyright. All rights reserved.
                </p>
            </div>
        </div>
    );
};

export default Footer;
