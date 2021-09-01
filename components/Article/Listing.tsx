import { ArticleData } from "../../lib/types";
import ArticleListItem from "./ListItem";

interface Props {
    articles: ArticleData[];
}

const ArticleListing: React.FC<Props> = ({ articles }) => {
    return (
        <ol>
            <hr className="mt-10 mb-10 border-blue-400" />
            {articles.map((arc: ArticleData, indx) => {
                let divider = <></>;
                if (articles.length !== 1 && indx !== articles.length - 1) {
                    divider = <hr className="mt-10 mb-10 border-blue-400" />;
                }
                return (
                    <li>
                        <ArticleListItem article={arc} key={arc.slug} />
                        {divider}
                    </li>
                );
            })}
        </ol>
    );
};

export default ArticleListing;
