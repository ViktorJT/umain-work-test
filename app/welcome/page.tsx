import Link from "next/link";

import Logo from "@/icons/logo.svg";

export default function WelcomePage() {
  return (
    <main
      className={`
        fixed inset-0 
        pb-9 pt-24 px-6
        bg-green text-white 
        flex flex-col justify-between
      `}
    >
      <Logo className="w-40 fill-white" />

      <div
        className={`
          flex flex-col 
          max-w-[280px] 
          text-balance 
          gap-4
        `}
      >
        <h1 className="text-huge">Treat yourself.</h1>
        <p className="text-blurb">
          Find the best restaurants in your city and get it delivered to your
          place!
        </p>
      </div>

      <Link
        href="/"
        className={`
          p-2
          rounded-lg
          text-center 
          border-white border-[1px] 

          md:hover:bg-white md:hover:text-green
          transition-colors
        `}
      >
        Continue
      </Link>
    </main>
  );
}
