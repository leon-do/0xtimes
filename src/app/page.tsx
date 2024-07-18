import Nav from "../components/Nav";
import Card from "../components/Card";
import pages from "../config/pages.json";

export default function Home() {
  console.log(pages);
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
