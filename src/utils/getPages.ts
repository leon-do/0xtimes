const fs = require("fs");

// this function returns a list of pages for next.config.mjs and page.tsx
export default async function getPages(): Promise<Page[]> {
  const pages = await fs.readdirSync("public/html");
  return pages
    .map((source: string) => ({
      source,
      time: fs.statSync(`public/html/${source}`).mtime.getTime(),
    }))
    .sort((a: any, b: any) => b.time - a.time) // sort by reverse chronological order
    .map((file: Page) => {
      return {
        source: `/${file.source}`,
        destination: `/html/${file.source}`,
      };
    });
}
