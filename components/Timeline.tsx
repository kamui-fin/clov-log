import Link from "next/link";
import { ArticleData } from "../lib/types";

interface Props {
    articles: Map<string, ArticleData[]>;
}

const Timeline: React.FC<Props> = (props: Props) => {
    const { articles } = props;
    const keys = Array.from(articles.keys());

    return (
        <div className="px-4 m-2">
            {keys.map((date) => {
                return (
                    <div className="mb-10 text-center">
                        <h1 className="pb-4 text-5xl">{date}</h1>
                        <ol>
                            {articles.get(date)?.map((article) => (
                                <li className="mb-1">
                                    <Link
                                        href={`/article/${article.author.toLowerCase()}/${
                                            article.slug
                                        }`}
                                    >
                                        {article.title}
                                    </Link>
                                </li>
                            ))}
                        </ol>
                    </div>
                );
            })}
        </div>
    );
};

export default Timeline;
