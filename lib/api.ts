import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { MinimalArticleData, ArticleData, AllArticles } from "./types";

const dataDir = path.join(process.cwd(), "data");
const blogDir = path.join(dataDir, "blog");

export const getArticles = (author: string): string[] => {
    return fs
        .readdirSync(path.join(blogDir, author.toLowerCase()), {
            withFileTypes: true,
        })
        .filter((dn) => dn.isFile())
        .map((dn) => dn.name);
};

export const getArticleBySlugWithoutMatter = async (
    slg: string
): Promise<MinimalArticleData> => {
    const slug = slg.replace(/\.mdx$/, "");
    const fullPath = path.join(dataDir, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { content, data } = matter(fileContents);
    const mdxSource = await serialize(content, { scope: data });

    return {
        slug,
        mdxSource,
    };
};

export const getArticleBySlug = async (
    author: string,
    slg: string
): Promise<ArticleData> => {
    const slug = slg.replace(/\.mdx$/, "");
    const fullPath = path.join(blogDir, author.toLowerCase(), `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { content, data } = matter(fileContents);
    const mdxSource = await serialize(content, { scope: data });
    const { title, desc, date, tags } = data;

    return {
        slug,
        mdxSource,
        title,
        desc,
        date,
        author,
        tags,
    };
};

export const getAllArticles = async (): Promise<AllArticles> => {
    const getDataForDir = async (author: string): Promise<ArticleData[]> => {
        const slugs = getArticles(author);
        const acs = await Promise.all(
            slugs.map(async (slug) => {
                const data = await getArticleBySlug(author, slug);
                return data;
            })
        );
        return acs.sort((a1, a2) =>
            new Date(a1.date) > new Date(a2.date) ? -1 : 1
        );
    };

    return {
        Abhay: await getDataForDir("Abhay"),
        Sai: await getDataForDir("Sai"),
    };
};

export const getUniqueTags = (articles: ArticleData[]): string[] =>
    Array.from(new Set(articles.map(({ tags }) => tags).flat(1)));
