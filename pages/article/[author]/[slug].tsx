/* eslint-disable react/jsx-props-no-spreading */

import Highlight from "react-highlight";
import { GetStaticPaths } from "next";
import { MDXRemote } from "next-mdx-remote";
import { Tab } from "@headlessui/react";
import Link from "next/link";
import { NextSeo } from "next-seo";
import { getAllArticles, getArticleBySlug } from "../../../lib/api";
import { ArticleData } from "../../../lib/types";
import Layout from "../../../components/Layout";
import { formatArticleDate } from "../../../lib/utils";

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

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
}

const Article: React.FC<ArticleData> = (article) => {
    const { title, desc, date, mdxSource, author, slug } = article;
    return (
        <Layout>
            <NextSeo
                title={title}
                description={desc}
                canonical="https://clovlog.com"
                themeColor="#daca4f"
            />
            <section className="px-5 mb-4">
                <h1 className="text-4xl font-bold text-white-400">{title}</h1>
                <div className="flex flex-wrap mb-4 justify-between">
                    <h2 className="my-4">{formatArticleDate(date)}</h2>
                    <Tab.Group
                        selectedIndex={author.toLowerCase() === "abhay" ? 0 : 1}
                    >
                        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
                            <Link href={`/article/abhay/${slug}`}>
                                <Tab
                                    key="Abhay"
                                    className={({ selected }) =>
                                        classNames(
                                            "w-44 rounded-lg py-2.5 text-sm font-medium leading-5",
                                            "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                                            selected
                                                ? "bg-white text-blue-700 shadow"
                                                : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                                        )
                                    }
                                >
                                    Abhay
                                </Tab>
                            </Link>
                            <Link href={`/article/sai/${slug}`}>
                                <Tab
                                    key="Venkatasai"
                                    className={({ selected }) =>
                                        classNames(
                                            "w-full rounded-lg py-2.5 text-sm font-medium leading-5",
                                            "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                                            selected
                                                ? "bg-white text-blue-700 shadow"
                                                : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                                        )
                                    }
                                >
                                    Venkatasai
                                </Tab>
                            </Link>
                        </Tab.List>
                    </Tab.Group>
                </div>
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
    const doc = await getArticleBySlug(params.author, params.slug);

    return {
        props: {
            ...doc,
        },
    };
};

export const getStaticPaths: GetStaticPaths = async () => {
    const docs = await getAllArticles();
    return {
        paths: Object.entries(docs)
            .map(([author, articles]) =>
                articles.map((doc: ArticleData) => ({
                    params: { slug: doc.slug, author: author.toLowerCase() },
                }))
            )
            .flat(),
        fallback: false,
    };
};

export default Article;
