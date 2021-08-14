import ArticleListing from "../components/ArticleListing";
import { getAllArticles } from "../lib/api";
import outputRSS from "../lib/rss-gen";
import { ArticleData } from "../lib/types";

interface Props {
    allArticles: ArticleData[];
}

const Home: React.FC<Props> = ({ allArticles }: Props) => {
    return <ArticleListing articles={allArticles} />;
};

interface StaticProps {
    props: Props;
}

export const getStaticProps = async (): Promise<StaticProps> => {
    const allArticles = await getAllArticles();
    outputRSS(allArticles);

    return {
        props: { allArticles },
    };
};

export default Home;
