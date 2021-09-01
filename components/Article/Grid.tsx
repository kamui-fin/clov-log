import { ArticleData } from "../../lib/types";
import ArticleCard from "./Card";

interface Props {
    articles: ArticleData[];
}

const ArticleGrid: React.FC<Props> = (props: Props) => {
    const { articles } = props;
    const cards = articles.map((article: ArticleData) => (
        <ArticleCard article={article} />
    ));
    return (
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {cards}
        </div>
    );
};

export default ArticleGrid;
