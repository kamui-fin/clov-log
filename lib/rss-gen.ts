import RSS from "rss";
import fs from "fs";
import { ArticleData } from "./types";

const DOMAIN = "https://clovlog.com";

const outputRSS = async (posts: ArticleData[]): Promise<void> => {
    const feed = new RSS({
        title: "Blog title",
        description: "Blog description",
        site_url: DOMAIN,
        feed_url: `${DOMAIN}/rss.xml`,
        language: "en",
    });

    posts.forEach((post) => {
        feed.item({
            title: post.title,
            description: post.desc,
            url: `${DOMAIN}/article/${post.author.toLowerCase()}/${post.slug}`,
            categories: [],
            author: post.author,
            date: post.date,
        });
    });

    const path = `${process.cwd()}/public/rss.xml`;
    fs.writeFileSync(path, feed.xml(), "utf8");
};

export default outputRSS;
