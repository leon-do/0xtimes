import Image from "next/image";
import Link from "next/link";
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

  // prettier-ignore
  const colors = ["bg-red-400","bg-orange-400","bg-amber-400","bg-yellow-400","bg-lime-400","bg-emerald-400","bg-cyan-400","bg-sky-400","bg-violet-400","bg-yellow-400","bg-green-400","bg-teal-400","bg-fuchsia-400","bg-blue-400","bg-indigo-400","bg-purple-400","bg-pink-400","bg-rose-400",];
  const bgColor = colors[Math.floor(Math.random() * colors.length)];

  return (
    <article className="border-black border-2 rounded-md shadow-[5px_5px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_rgba(0,0,0,1)]">
      <figure className="border-black border-b-2">
        <Link href={props.destination}>
          {/* background justify=horizontal items=vertical */}
          <div className={`h-48 flex justify-center items-center ${bgColor}`}>
            {/* rounded image */}
            <div className="w-40 h-40 overflow-hidden rounded-full border-black border-2 shadow-[5px_5px_0px_rgba(0,0,0,1)]  hover:shadow-[8px_8px_0px_rgba(0,0,0,1)]">
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
      {/* bottom card */}
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
