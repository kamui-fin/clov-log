import Link from "next/link";
import React from "react";
import ArticleListing from "../components/Article/Listing";
import Layout from "../components/Layout";
import { getAllArticles } from "../lib/api";
import outputRSS from "../lib/rss-gen";
import { ArticleData } from "../lib/types";

interface Props {
    allArticles: ArticleData[];
}

const Home: React.FC<Props> = ({ allArticles }: Props) => {
    return (
        <Layout>
            <div className="px-4 mb-6">
                <h1 className="text-6xl font-bold text-white-300">Progress Log</h1>
                <h3 className="my-5 text-white-400 text-xl max-w-3xl leading-7">
                    Just two curious CS majors with an appetite for knowledge.
                    Follow our progress throughout our Machine Learning journey.
                </h3>
                <div className="flex gap-2">
                    <Link href="roadmap">
                        <button
                            type="button"
                            className="text-gray-900 bg-gradient-to-r from-amber-500 to-lime-500 hover:bg-gradient-to-bl focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                        >
                            View Roadmap
                        </button>
                    </Link>
                    <Link href="/about">
                        <button
                            type="button"
                            className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                        >
                            Who are we?
                        </button>
                    </Link>
                </div>
                <ArticleListing articles={allArticles} />
            </div>
        </Layout>
    );
};

export const getStaticProps = async (): Promise<{ props: Props }> => {
    const allArticles = await getAllArticles();
    outputRSS(Object.values(allArticles).flat());

    return {
        props: { allArticles: allArticles.Abhay }, // default with someone
    };
};

export default Home;
