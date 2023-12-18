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
                <h3 className="text-2xl cursor-pointer font-bold">
                    {article.title}
                </h3>
            </Link>
            <h3 className="pt-1 text-white-500">
                {formatArticleDate(article.date)}
            </h3>
            <p className="pt-4 text-sm">{previewMd(article.desc)}</p>
        </div>
    );
};

export default ArticleListItem;
