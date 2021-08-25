import { ArticleData } from "../lib/types";
import ArticleCard from "./ArticleCard";

interface Props {
    articles: ArticleData[];
}

const ArticleListing: React.FC<Props> = ({ articles }) => {
    return (
        <ol>
            {articles.map((arc: ArticleData, indx) => {
                let divider = <></>;
                if (articles.length !== 1 && indx !== articles.length - 1) {
                    divider = <hr className="mt-10 mb-10 border-blue-400" />;
                }
                return (
                    <li>
                        <ArticleCard article={arc} key={arc.slug} />
                        {divider}
                    </li>
                );
            })}
        </ol>
    );
};

export default ArticleListing;
