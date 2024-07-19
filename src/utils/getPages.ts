import fs from "fs";

// returns a list of pages that's sorted in reverse chronological order for page.tsx
export default async function getPages(): Promise<Page[]> {
  const pages = await fs.readdirSync("public/html");
  return pages
    .map((source) => ({
      source,
      time: fs.statSync(`public/html/${source}`).mtime.getTime(),
    }))
    .sort((a, b) => b.time - a.time)
    .map((file) => {
      return {
        source: `/${file.source}`,
        destination: `/html/${file.source}`,
        time: file.time,
      };
    });
}
