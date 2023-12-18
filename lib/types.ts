import { MDXRemoteSerializeResult } from "next-mdx-remote";

export interface MinimalArticleData {
    slug: string;
    mdxSource: MDXRemoteSerializeResult<Record<string, unknown>>;
}

export interface ArticleData {
    slug: string;
    mdxSource: MDXRemoteSerializeResult<Record<string, unknown>>;
    title: string;
    desc: string;
    date: string;
    author: string;
    tags: string[];
}

export interface AllArticles {
    Sai: ArticleData[];
    Abhay: ArticleData[];
}
