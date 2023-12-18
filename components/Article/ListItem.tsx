import Link from "next/link";
import { formatArticleDate, previewMd } from "../../lib/utils";
import { ArticleData } from "../../lib/types";

interface Props {
    article: ArticleData;
}

const ArticleListItem: React.FC<Props> = (props: Props) => {
    const { article } = props;
    return (
        <div>
            <Link
                href={`/article/${article.author.toLowerCase()}/${
                    article.slug
                }`}
            >
                <h1 className="text-2xl cursor-pointer font-bold">
                    {article.title}
                </h1>
            </Link>
            <h2 className="pt-1">{formatArticleDate(article.date)}</h2>
            <p className="pt-4 text-sm">{previewMd(article.desc)}</p>
        </div>
    );
};

export default ArticleListItem;
