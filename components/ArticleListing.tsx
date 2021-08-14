import Link from "next/link";
import { previewMd } from "../lib/utils";
import { ArticleData } from "../lib/types";

interface Props {
    articles: ArticleData[];
}

const ArticleListing: React.FC<Props> = ({ articles }) => {
    return (
        <div className="">
            {articles.map((arc: ArticleData, indx) => {
                return (
                    <div className="">
                        <Link href={`/article/${arc.slug}`}>
                            <h1 className="text-2xl cursor-pointer font-bold text-tide-400">
                                {arc.title}
                            </h1>
                        </Link>
                        <h2 className="pt-1">{arc.date.toString()}</h2>
                        <p className="pt-4 text-sm">{previewMd(arc.desc)}</p>
                        {indx === articles.length - 1 ? (
                            <></>
                        ) : (
                            <hr className="mt-10 mb-10 border-bunker-400" />
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default ArticleListing;
