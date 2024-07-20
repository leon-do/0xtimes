import Nav from "../components/Nav";
import Card from "../components/Card";
import Sponsor from "../components/Sponsor";
import getPages from "../utils/getPages";

export default async function Home() {
  const pages = await getPages();
  return (
    <>
      <Nav />
      <div className="container mx-auto max-w-7xl my-5">
        <div className="p-5 gap-x-5 gap-y-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="grid-col-1 md:col-span-2">
            <Sponsor />
          </div>
          {pages.map((page, index) => (
            <Card key={index} {...page} />
          ))}
        </div>
      </div>
    </>
  );
}
