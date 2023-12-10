import { useState } from "react";
import ArticleGrid from "../components/Article/Grid";
import Layout from "../components/Layout";
import Tags from "../components/Tags";
import { getAllArticles, getUniqueTags } from "../lib/api";
import outputRSS from "../lib/rss-gen";
import { ArticleData } from "../lib/types";

interface Props {
    articles: ArticleData[];
    tags: string[];
}

const Browse: React.FC<Props> = (props: Props) => {
    const [currentTags, setCurrentTags] = useState<string[]>([]);
    const [query, setQuery] = useState<string>("");
    const [articles, setArticles] = useState<ArticleData[]>(props.articles);

    const filterArticlesByTags = (tags: string[]) => {
        setArticles(
            articles.filter((a) => {
                for (const tag of a.tags) {
                    if (tags.includes(tag)) {
                        return true;
                    }
                }
                return false;
            })
        );
    };

    const filterArticlesBySearch = (searchQuery: string) => {
        setArticles(
            articles.filter((a) => {
                return (a.title + a.desc)
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase());
            })
        );
    };

    const handleInputChange: React.ReactEventHandler<HTMLInputElement> = (
        event
    ) => {
        const val: string = event.target.value;
        setQuery(val);
        if (!val.length) {
            setArticles(props.articles);
        } else {
            filterArticlesBySearch(val);
        }
    };

    const handleToggleTags = (newTags: string[]) => {
        setCurrentTags(newTags);
        if (!newTags.length) {
            setArticles(props.articles);
        } else {
            filterArticlesByTags(newTags);
        }
    };

    return (
        <Layout>
            <div className="px-4 mb-4">
                <h1 className="text-center pb-6 text-6xl font-bold text-white-300">
                    Browse
                </h1>
                <input
                    type="text"
                    className="rounded border-0 p-4 w-full bg-blue-500 text-white-200 outline-none"
                    placeholder="Search for articles"
                    value={query}
                    onChange={handleInputChange}
                />
                <Tags
                    tags={props.tags}
                    selectedTags={currentTags}
                    setTags={handleToggleTags}
                />
                <ArticleGrid articles={articles} />
            </div>
        </Layout>
    );
};

export const getStaticProps = async (): Promise<{ props: Props }> => {
    const articles = Object.values(await getAllArticles()).flat();
    const tags = getUniqueTags(articles);
    outputRSS(articles);

    return {
        props: { articles, tags },
    };
};

export default Browse;
