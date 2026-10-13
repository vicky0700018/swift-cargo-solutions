export const pageMeta = (title, description) => ({
  meta: [
    { title: `${title} | Shree Siddhivinayak Clearing & Forwarding Services` },
    { name: "description", content: description },
    { property: "og:title", content: `${title} | Shree Siddhivinayak Clearing & Forwarding Services` },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ],
});