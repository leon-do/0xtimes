import Image from "next/image";
import Link from "next/link";
import getBgColor from "../utils/getBgColor";

// https://neo-brutalism-ui-library.vercel.app/components/card
export default function Sponsor() {
  return (
    <div
      className={`${getBgColor()} h-96 flex justify-center border-black rounded-md border-2 shadow-[10px_10px_0px_rgba(0,0,0,1)]  hover:shadow-[12px_12px_0px_rgba(0,0,0,1)]`}
    >
      <Link href="https://youtube.com" target="_blank">
        <Image
          src="/img/sponsor.png"
          alt="sponsor"
          width={0}
          height={0}
          sizes="100vw"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            padding: "10px"
          }}
        />
      </Link>
    </div>
  );
}
