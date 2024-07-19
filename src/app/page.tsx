import Nav from "../components/Nav";
import Card from "../components/Card";
import getPages from "../utils/getPages";

export default async function Home() {
  const pages = await getPages();
  return (
    <>
      <Nav />
      {/* grid container for cards */}
      <div className="p-5 gap-x-5 gap-y-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {pages.map((page, index) => (
          <Card key={index} {...page} />
        ))}
      </div>
    </>
  );
}
