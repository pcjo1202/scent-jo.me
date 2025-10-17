import { Blog, ResponseData } from "@/types/blog.type";
import { XMLParser } from "fast-xml-parser";

export async function getBlogs() {
  const velogResponse = await fetch("https://v2.velog.io/rss/pcjo1202");
  const xmlData = await velogResponse.text();
  const parser = new XMLParser();
  const xmlDocument = parser.parse(xmlData);

  const items = xmlDocument.rss.channel.item;

  const blogs: ResponseData = items.map(
    ({ title, link, pubDate, description }: Blog) => {
      const imageSrc = description?.match(/<img src="([^"]+)"/)?.[1];
      const imageURL = imageSrc ? new URL(imageSrc, link ?? "").href : null;
      return {
        title,
        link,
        pubDate,
        imageURL,
      };
    }
  );

  return blogs;
}
