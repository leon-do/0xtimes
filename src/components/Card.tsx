import Image from "next/image";
import Link from "next/link";

// https://neo-brutalism-ui-library.vercel.app/components/card
export default function Card(props: Page) {
  // convert time from 1721406522002 to Fri Jul 19 2024
  const time = new Date(props.time).toDateString();

  // parse site.com+hello-world.html to site.com
  const host = props.source.split("+")[0];

  // parse site.com+hello-world.html to hello world
  const title = props.source
    .split("+")[1]
    .split(".html")[0]
    .replace(/[/-]/g, " ")
    .trim();

  return (
    <article className="border-black border-2 rounded-md shadow-[5px_5px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_rgba(0,0,0,1)]">
      <figure className="border-black border-b-2">
        <Link href={props.destination}>
          <Image
            src={"/img/placeholder.png"}
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
      <Link
        target="_blank"
        href={`https://${host}`}
        className="hover:underline px-6"
      >
        {host || ""}
      </Link>
      <div className="px-6 pb-5">{time == "Invalid Date" ? "" : time}</div>
    </article>
  );
}
