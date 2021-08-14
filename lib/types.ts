import { MDXRemoteSerializeResult } from "next-mdx-remote/dist/types";

export interface ArticleData {
    slug: string;
    mdxSource: MDXRemoteSerializeResult<Record<string, unknown>>;
    title: string;
    desc: string;
    date: Date;
    author: string;
}
