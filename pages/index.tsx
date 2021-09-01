import ArticleListing from "../components/Article/Listing";
import Layout from "../components/Layout";
import { getAllArticles, getUniqueTags } from "../lib/api";
import outputRSS from "../lib/rss-gen";
import { ArticleData } from "../lib/types";

interface Props {
    allArticles: ArticleData[];
}

const Home: React.FC<Props> = ({ allArticles }: Props) => {
    return (
        <Layout>
            <div className="px-4 mb-6">
                <h1 className="text-6xl font-bold text-white-300">Blog</h1>
                <h3 className="my-5 text-white-400 text-xl max-w-3xl leading-7">
                    Keep up to date with our latest articles about FLOSS, Linux,
                    programming, and more!
                </h3>
                <ArticleListing articles={allArticles} />
            </div>
        </Layout>
    );
};

export const getStaticProps = async (): Promise<{ props: Props }> => {
    const allArticles = await getAllArticles();
    outputRSS(allArticles);

    return {
        props: { allArticles },
    };
};

export default Home;
