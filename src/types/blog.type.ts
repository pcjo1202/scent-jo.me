export interface Blog {
  title: string;
  link: string;
  pubDate: string;
  description: string;
}

export type ResponseData = (Blog & {
  imageURL: string;
})[];
