import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { ArticleData } from "./types";

const dataDir = path.join(process.cwd(), "data");

export const getArticles = (): string[] => {
    return fs
        .readdirSync(dataDir, { withFileTypes: true })
        .filter((dn) => dn.isFile())
        .map((dn) => dn.name);
};

export const getArticleBySlug = async (slg: string): Promise<ArticleData> => {
    const slug = slg.replace(/\.mdx$/, "");
    const fullPath = path.join(dataDir, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { content, data } = matter(fileContents);
    const mdxSource = await serialize(content, { scope: data });
    const { title, desc, date, author, tags } = data;

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

export const getAllArticles = async (): Promise<ArticleData[]> => {
    const slugs = getArticles();
    const acs = await Promise.all(
        slugs.map(async (slug) => {
            const data = await getArticleBySlug(slug);
            return data;
        })
    );
    return acs.sort((a1, a2) =>
        new Date(a1.date) > new Date(a2.date) ? -1 : 1
    );
};

export const getUniqueTags = (articles: ArticleData[]): string[] =>
    Array.from(new Set(articles.map(({ tags }) => tags).flat(1)));
