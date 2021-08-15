import Highlight from 'react-highlight'
import { GetStaticPaths } from "next";
import { MDXRemote } from "next-mdx-remote";
import { getAllArticles, getArticleBySlug } from "../../lib/api";
import { ArticleData } from "../../lib/types";

interface PreProps {
    children: React.ReactElement;
}

const Pre = (props: PreProps) => {
    return (
        <Highlight className={props.children.props.className || "language-plaintext"}>
            {props.children}
        </Highlight>
    )
}

const components = {
   pre: Pre 
}

const Article: React.FC<ArticleData> = (article) => {
    return (
        <>
            <h1 className="text-4xl font-bold text-white-400">{article.title}</h1>
            <h2 className="my-4">{article.date.toString()}</h2>
            <article className="pt-2 prose lg:prose-xl">
                <MDXRemote {...article.mdxSource} components={components}/>
            </article>
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
