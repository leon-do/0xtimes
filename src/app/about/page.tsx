import Nav from "../../components/Nav";

export default function About() {
  return (
    <>
      <Nav />
      <div className="mx-auto max-w-5xl my-5">
        <div className="text-5xl p-4">The Times</div>
        <div className="text-xl p-4">
          The first notable use of &quot;Times&quot; in a newspaper title was
          with &quot;The Daily Universal Register&quot; in London, which changed
          its name to &quot;The Times&quot; in 1788. It became highly
          influential, setting journalistic standards.
        </div>
        <div className="text-xl p-4">
          Now in this era, notable organizations include
        </div>
        <ul className="text-xl p-4">
          <li>- The New York Times</li>
          <li>- Los Angeles Times</li>
          <li>- New Roman Times 😉</li>
        </ul>

        <div className="text-5xl p-4">The 0x</div>
        <div className="text-xl p-4">
          The prefix &quot;0x&quot; has a specific meaning in computer science
          and mathematics, particularly in the context of number systems. 0x is
          used to indicate that the following number is in hexadecimal (base-16)
          format and is used in
        </div>
        <ul className="text-xl p-4">
          <li>
            - EVM addresses. &quot;0x&quot; followed by 40 hexadecimal
            characters
          </li>
          <li>
            - Smart contract functions: “0x” followed by the first 4 bytes of
            the hash of the function
          </li>
        </ul>

        <div className="text-5xl p-4">0xTimes</div>
        <div className="text-xl p-4">
          0xTimes combines our love of modern computer science with the past
          eras.
        </div>
        <div className="text-xl p-4">How it works under the hood:</div>
        <ul className="text-xl p-4">
          <li>
            - We email subscribe to the best and newestblockchain projects
          </li>
          <li>
            - For every new email, we immediately archive it on our website
          </li>
          <li>
            - Our website will display the latest news in reverse chronological
            order
          </li>
          <li>- Our site is then backed up on the permanent web</li>
        </ul>

        <div className="text-5xl p-4">Design</div>
        <div className="text-xl p-4">
          Our design is heavily inspired by Neobrutalism which is our way to
          stray from the homogenization of web design. Having looked through the
          previous “Times”, we chose this to have more personality.
        </div>
      </div>
    </>
  );
}
