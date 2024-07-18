import Image from "next/image";
import Link from "next/link";

interface CardsProps {
  subject: string;
  url: string;
  image: string;
  date: string;
}

// https://neo-brutalism-ui-library.vercel.app/components/card
export default function Card(props: CardsProps) {
  return (
    <article className="w-full h-full border-black border-2 rounded-md shadow-[5px_5px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_rgba(0,0,0,1)]">
      <figure className="border-black border-b-2">
        <Link href={props.url}>
          <Image
            src={props.image}
            alt={props.subject}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }} // optional
          />
        </Link>
      </figure>
      <div className="px-6 py-5 text-left h-full">
        <Link href={props.url}>
          <h1 className="mb-4 text-3xl hover:underline">
            {props.subject.slice(0, 70)}
            {props.subject.length > 70 ? "..." : ""}
          </h1>
        </Link>
        <p className="mb-4">{props.date}</p>
      </div>
    </article>
  );
}
