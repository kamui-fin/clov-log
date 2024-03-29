import Highlight from "react-highlight";
import { MDXRemote } from "next-mdx-remote";
import { NextSeo } from "next-seo";
import { ArticleData, MinimalArticleData } from "../lib/types";
import Layout from "../components/Layout";
import { getArticleBySlugWithoutMatter } from "../lib/api";

interface PreProps {
    children: React.ReactElement;
}

const Pre = ({ children }: PreProps) => {
    return (
        <Highlight className={children.props.className || "language-plaintext"}>
            {children}
        </Highlight>
    );
};

const components = {
    pre: Pre,
};

const Workout: React.FC<ArticleData> = (article) => {
    const { mdxSource } = article;
    return (
        <Layout>
            <NextSeo
                title="CLOV Log | Workout"
                description="This blog tracks our journey through the world of Machine Learning en route to extensively understanding what Artificial Intelligence actually is."
                canonical="https://clovlog.com"
                themeColor="#daca4f"
            />
            <section className="px-5 mb-4">
                <article className="article pt-2 prose lg:prose-xl max-w-full">
                    <MDXRemote {...mdxSource} components={components} />
                </article>
            </section>
        </Layout>
    );
};

export const getStaticProps = async (): Promise<{
    props: MinimalArticleData;
}> => {
    const doc = await getArticleBySlugWithoutMatter("workout");

    return {
        props: {
            ...doc,
        },
    };
};
export default Workout;
