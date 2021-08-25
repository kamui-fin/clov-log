import { ArticleData } from "../lib/types";
import ArticleListing from "./ArticleListing";

interface Props {
    articles: Map<number, ArticleData[]>;
}

const Timeline: React.FC<Props> = (props: Props) => {
    const { articles } = props;
    const keys = Array.from(articles.keys());

    return (
        <div>
            {keys.map((year) => {
                return (
                    <div className="mb-10">
                        <h1 className="pb-7 text-5xl underline">{year}</h1>
                        <ArticleListing articles={articles.get(year)} />
                    </div>
                );
            })}
        </div>
    );
};

export default Timeline;
