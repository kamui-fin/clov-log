import Link from "next/link";
import { previewMd } from "../lib/utils";
import { ArticleData } from "../lib/types";

interface Props {
    article: ArticleData;
}

const ArticleCard: React.FC<Props> = (props: Props) => {
    const { article } = props;
    return (
        <div>
            <Link href={`/article/${article.slug}`}>
                <h1 className="text-2xl cursor-pointer font-bold text-white-400">
                    {article.title}
                </h1>
            </Link>
            <h2 className="pt-1">{article.date.toString()}</h2>
            <p className="pt-4 text-sm">{previewMd(article.desc)}</p>
        </div>
    );
};

export default ArticleCard;
