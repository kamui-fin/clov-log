import Link from "next/link";
import { ArticleData } from "../lib/types";

interface Props {
    articles: Map<number, ArticleData[]>;
}

const Timeline: React.FC<Props> = (props: Props) => {
    const { articles } = props;
    const keys = Array.from(articles.keys());

    return (
        <div className="px-4 m-2">
            {keys.map((year) => {
                return (
                    <div className="mb-10 text-center">
                        <h1 className="pb-4 text-5xl">{year}</h1>
                        <ol>
                            {articles.get(year)?.map((article) => (
                                <li className="mb-1">
                                    <Link href={`/article/${article.slug}`}>
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
