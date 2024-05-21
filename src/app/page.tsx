import ReviewsSection from "@/components/Reviews";
import SearchIcon from "@/components/icons/Search";
import libAPI from "@/utils/libraryAPI";
import Link from "next/link";

export default async function Home() {
  const test = new libAPI();
  console.log(await test.getBookShelfs());
  return (
    <>
      <div className="hero min-h-screen" style={{ backgroundImage: 'url(/bg.jpg)' }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Una libreria.. <span className="text-primary">DIGITALE?</span> </h1>
            <p className="mb-5">Sei stanco di tutti i quei libri in giro per casa? Abbiamo la soluzione per te! Con il nostro servizio potrai accedere a più di <b>10.000+</b> libri di tutti i generi che vuoi.</p>
            <Link href="/search">
              <button className="btn btn-primary transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">Cerca il tuo libro ora! <SearchIcon/></button>
            </Link>
          </div>
        </div>
      </div>
      <ReviewsSection />
    </>
  );
}
