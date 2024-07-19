import Image from "next/image";
import Link from "next/link";

// https://neo-brutalism-ui-library.vercel.app/components/card
export default function Card(props: Page) {
  // replace /hello-world.html with hello world
  const title = props.source.replace(".html", "").replace(/[/-]/g, " ").trim();
  const time = new Date(props.time).toDateString();
  return (
    <article className="border-black border-2 rounded-md shadow-[5px_5px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_rgba(0,0,0,1)]">
      <figure className="border-black border-b-2">
        <Link href={props.destination}>
          <Image
            src={props.image || "/img/placeholder.png"}
            alt={props.source}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }} // optional
          />
        </Link>
      </figure>
      <div className="px-6 py-5 min-h-48">
        <Link href={props.destination}>
          <h1 className="mb-4 text-3xl hover:underline break-words">
            {title.slice(0, 60)}
            {title.length > 60 ? "..." : ""}
          </h1>
        </Link>
      </div>
      <div className="px-6 pb-5">{time == "Invalid Date" ? "" : time}</div>
    </article>
  );
}
