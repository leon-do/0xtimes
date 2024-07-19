import Nav from "../components/Nav";
import Card from "../components/Card";
import getPages from "../utils/getPages";

export default async function Home() {
  const pages = await getPages();
  return (
    <>
      <Nav />
      <div className="p-8 grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3 xl:gap-x-8">
        {pages.map((page, index) => (
          <Card key={index} {...page} />
        ))}
      </div>
    </>
  );
}
