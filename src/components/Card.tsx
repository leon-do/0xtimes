import Image from "next/image";
import Link from "next/link";
import getBgColor from "../utils/getBgColor";
import logos from "../../public/json/logos.json";

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
      {/* top half */}
      <figure className="border-black border-b-2">
        <Link href={props.destination}>
          {/* background justify=horizontal items=vertical */}
          <div
            className={`h-36 flex justify-center items-center ${getBgColor()}`}
          >
            {/* rounded image */}
            <div className="w-32 h-32 overflow-hidden rounded-full border-black border-2 shadow-[5px_5px_0px_rgba(0,0,0,1)]  hover:shadow-[8px_8px_0px_rgba(0,0,0,1)]">
              <Image
                className="object-cover"
                // @ts-ignore
                src={logos[host] || "/img/logo.svg"}
                alt={props.source}
                width={0}
                height={0}
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(255, 255, 255, 0.80)",
                }}
              />
            </div>
          </div>
        </Link>
      </figure>

      {/* bottom half */}
      <figure className="h-60">
        {/* title */}
        <div className="px-6 py-5 border h-44">
          <Link href={props.destination}>
            <h1 className="text-3xl hover:underline break-words">
              {title.slice(0, 60)}
              {title.length > 60 ? "..." : ""}
            </h1>
          </Link>
        </div>
        {/* footer */}
        <Link
          target="_blank"
          href={`https://${host}`}
          className="hover:underline px-6"
        >
          {host || ""}
        </Link>
        <div className="px-6 pb-5">{time == "Invalid Date" ? "" : time}</div>
      </figure>
    </article>
  );
}
