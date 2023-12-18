import Highlight from "react-highlight";
import { MDXRemote } from "next-mdx-remote";
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

const AboutUs: React.FC<ArticleData> = (article) => {
    const { mdxSource } = article;
    return (
        <Layout>
            <section className="px-5 mb-4">
                <h1 className="text-5xl text-center pb-5 font-bold text-white">
                    About Us
                </h1>
                <article className="pt-2 prose lg:prose-xl max-w-full">
                    <MDXRemote {...mdxSource} components={components} />
                </article>
            </section>
        </Layout>
    );
};

export const getStaticProps = async (): Promise<{
    props: MinimalArticleData;
}> => {
    const doc = await getArticleBySlugWithoutMatter("about");

    return {
        props: {
            ...doc,
        },
    };
};

export default AboutUs;
