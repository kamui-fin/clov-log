import RSS from "rss";
import fs from "fs";
import { ArticleData } from "./types";

// this may change
const DOMAIN = "https://linuxzone.xyz";

const outputRSS = async (posts: ArticleData[]): Promise<void> => {
    const feed = new RSS({
        title: "Linux Zone",
        description: "A blog about all things Linux, open source and more",
        site_url: DOMAIN,
        feed_url: `${DOMAIN}/rss.xml`,
        language: "en",
    });

    posts.forEach((post) => {
        feed.item({
            title: post.title,
            description: post.desc,
            url: `${DOMAIN}/article/${post.slug}`,
            categories: [],
            author: post.author,
            date: post.date,
        });
    });

    const path = `${process.cwd()}/public/rss.xml`;
    fs.writeFileSync(path, feed.xml(), "utf8");
};

export default outputRSS;
