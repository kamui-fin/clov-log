import { MDXRemoteSerializeResult } from "next-mdx-remote";

export interface ArticleData {
    slug: string;
    mdxSource: MDXRemoteSerializeResult<Record<string, unknown>>;
    title: string;
    desc: string;
    date: Date;
    author: string;
    tags: string[];
}
