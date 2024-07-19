import Nav from "../components/Nav";
import Card from "../components/Card";
import getPages from "../utils/getPages";

export default async function Home() {
  const pages = await getPages();
  return (
    <>
      <Nav />
      <div className="p-5 grid grid-cols-1 gap-x-5 gap-y-5 lg:grid-cols-3 ">
        {pages.map((page, index) => (
          <Card key={index} {...page} />
        ))}
      </div>
    </>
  );
}
