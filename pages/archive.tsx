import { DateTime } from "luxon";
import Timeline from "../components/Timeline";
import Layout from "../components/Layout";
import { getAllArticles } from "../lib/api";
import { ArticleData } from "../lib/types";

interface Props {
    allArticles: ArticleData[];
}

const getDate = (article: ArticleData): Date => {
    const nums = article.date.match(/\d+/g);

    if (nums && nums.length === 3) {
        const year = parseInt(nums[2], 10);
        const month = parseInt(nums[0], 10) - 1;
        const day = parseInt(nums[1], 10);

        const date = new Date(year, month, day);
        return date;
    }

    return new Date();
};

const formatDate = (date: Date) => {
    return DateTime.fromJSDate(date).toLocaleString({
        year: "numeric",
        month: "long",
    });
};

const sortAndGroup = (articles: ArticleData[]): Map<string, ArticleData[]> => {
    const sorted = articles.sort((a, b) => {
        return getDate(b).getTime() - getDate(a).getTime();
    });
    const grouped = sorted.reduce((entryMap, article) => {
        const date = getDate(article);
        return entryMap.set(formatDate(date), [
            ...(entryMap.get(formatDate(date)) || []),
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
        props: { allArticles: allArticles.Abhay }, // default someone for now
    };
};

export default Archive;
