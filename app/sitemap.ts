import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://30tai.dev", lastModified: new Date() },
    { url: "https://30tai.dev/products", lastModified: new Date() },
    { url: "https://30tai.dev/workflow", lastModified: new Date() },
    { url: "https://30tai.dev/knowledge", lastModified: new Date() },
    { url: "https://30tai.dev/workspace", lastModified: new Date() },
    { url: "https://30tai.dev/community", lastModified: new Date() },
  ];
}
