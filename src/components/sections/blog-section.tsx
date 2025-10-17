import { getBlogs } from "@/api/get-blog";
import Image from "next/image";
import { use } from "react";
import SectionLayout from "../layouts/section-layout";

export default function BlogSection() {
  const data = use(getBlogs());

  console.log(data);

  return (
    <SectionLayout id="blog" title="Blog">
      <div className="flex flex-col gap-4">
        {data.map(({ title, link, pubDate, imageURL }) => (
          <div key={title}>
            <h3>{title}</h3>
            <p>{pubDate}</p>
            <Image
              src={imageURL ?? null}
              alt={title}
              width={100}
              height={100}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </SectionLayout>
  );
}
