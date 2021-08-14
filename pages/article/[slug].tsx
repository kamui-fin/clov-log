import { GetStaticPaths } from "next";
import { MDXRemote } from "next-mdx-remote";
import { getAllArticles, getArticleBySlug } from "../../lib/api";
import { ArticleData } from "../../lib/types";

const Article: React.FC<ArticleData> = (article) => {
    return (
        <>
            <h1 className="text-2xl font-bold text-tide-400">{article.title}</h1>
            <h2 className="pt-1">{article.date.toString()}</h2>
            <p className="pt-2">
                <MDXRemote {...article.mdxSource} />
            </p>
        </>
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
