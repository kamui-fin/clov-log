import Highlight from "react-highlight";
import { GetStaticPaths } from "next";
import { MDXRemote } from "next-mdx-remote";
import { getAllArticles, getArticleBySlug } from "../../lib/api";
import { ArticleData } from "../../lib/types";
import Layout from "../../components/Layout";

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

const Article: React.FC<ArticleData> = (article) => {
    const { title, date, mdxSource } = article;
    return (
        <Layout>
            <section className="px-5 mb-4">
                <h1 className="text-4xl font-bold text-white-400">{title}</h1>
                <h2 className="my-4">{date.toString()}</h2>
                <article className="pt-2 prose lg:prose-xl max-w-full">
                    <MDXRemote {...mdxSource} components={components} />
                </article>
            </section>
        </Layout>
    );
};

export const getStaticProps = async ({
    params,
}: {
    params: ArticleData;
}): Promise<{ props: ArticleData }> => {
    const doc = await getArticleBySlug(params.slug);

    return {
        props: {
            ...doc,
        },
    };
};

export const getStaticPaths: GetStaticPaths = async () => {
    const docs = await getAllArticles();

    return {
        paths: docs.map((doc) => {
            return {
                params: {
                    slug: doc.slug,
                },
            };
        }),
        fallback: false,
    };
};

export default Article;
