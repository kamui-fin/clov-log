import Timeline from "../components/Timeline";
import Layout from "../components/Layout";
import { getAllArticles } from "../lib/api";
import { ArticleData } from "../lib/types";

interface Props {
    allArticles: ArticleData[];
}

const getDate = (article: ArticleData) => {
    const nums = article.date.match(/\d+/g);
    const date = new Date(nums[2], nums[0] - 1, nums[1]);
    return date;
};

const sortAndGroup = (articles: ArticleData[]): Map<number, ArticleData[]> => {
    const sorted = articles.sort((a, b) => {
        return getDate(b) - getDate(a);
    });
    const grouped = sorted.reduce((entryMap, article) => {
        const date = getDate(article);
        return entryMap.set(date.getFullYear(), [
            ...(entryMap.get(getDate(article).getFullYear()) || []),
            article,
        ]);
    }, new Map());
    return grouped;
};

const Archive: React.FC<Props> = (props: Props) => {
    const { allArticles } = props;
    const sorted = sortAndGroup(allArticles);
    return (
        <Layout>
            <Timeline articles={sorted} />
        </Layout>
    );
};

export const getStaticProps = async (): Promise<{ props: Props }> => {
    const allArticles = await getAllArticles();

    return {
        props: { allArticles },
    };
};

export default Archive;
