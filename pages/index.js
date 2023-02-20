import Head from "next/head";
import Image from "next/image";
import imgbtm from "../public/next.jpg";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>ChetanBlogs</title>
        <meta name="description" content="chetanblogs" />
        <meta name="keywords" content="chetan, chetanblogs, blogs, next" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="section flex flex-col">
        <div className="space-y-3 flex flex-col items-center mb-10">
          <h1 className="text-black z-10 text-4xl md:text-5xl font-bold tracking-wide">Chetan-Blogs</h1>
          <Image
            className="rounded-xl shadowimg w-2/3 md:w-80"
            src={imgbtm}
            alt="Next.js Logo"
            priority
          />
        </div>

        <div className="flex flex-col items-center">
          <p className="text-xl md:text-3xl tracking-wider font-bold">Some popular logs......</p>
          <div className="w-2/3 space-y-2 border-[1px] p-5 border-black mt-10 flex flex-col justify-start">
            <h3 className="text-xl md:text-3xl font-semibold">know about JS More</h3>
            <p className="text-sm md:text-base">
              here you will learn a bit more about JavaScript, This is used for
              web design and logic for webSites.
            </p>
          </div>
          <div className="w-2/3 space-y-2 border-[1px] p-5 border-black mt-10 flex flex-col justify-start">
            <h3 className="text-xl md:text-3xl font-semibold">know about JS More</h3>
            <p className="text-sm md:text-base">
              here you will learn a bit more about JavaScript, This is used for
              web design and logic for webSites.
            </p>
          </div>
          <div className="w-2/3 space-y-2 border-[1px] p-5 border-black mt-10 flex flex-col justify-start">
            <h3 className="text-xl md:text-3xl font-semibold">know about JS More</h3>
            <p className="text-sm md:text-base">
              here you will learn a bit more about JavaScript, This is used for
              web design and logic for webSites.
            </p>
          </div>
          <div className="w-2/3 space-y-2 border-[1px] p-5 border-black mt-10 flex flex-col justify-start">
            <h3 className="text-xl md:text-3xl font-semibold">know about JS More</h3>
            <p className="text-sm md:text-base">
              here you will learn a bit more about JavaScript, This is used for
              web design and logic for webSites.
            </p>
          </div>
          <div className="w-2/3 space-y-2 border-[1px] p-5 border-black mt-10 flex flex-col justify-start">
            <h3 className="text-xl md:text-3xl font-semibold">know about JS More</h3>
            <p className="text-sm md:text-base">
              here you will learn a bit more about JavaScript, This is used for
              web design and logic for webSites.
            </p>
          </div>
          <div className="w-2/3 space-y-2 border-[1px] p-5 border-black mt-10 flex flex-col justify-start">
            <h3 className="text-xl md:text-3xl font-semibold">know about JS More</h3>
            <p className="text-sm md:text-base">
              here you will learn a bit more about JavaScript, This is used for
              web design and logic for webSites.
            </p>
          </div>
          <div className="w-2/3 space-y-2 border-[1px] p-5 border-black mt-10 flex flex-col justify-start">
            <h3 className="text-xl md:text-3xl font-semibold">know about JS More</h3>
            <p className="text-sm md:text-base">
              here you will learn a bit more about JavaScript, This is used for
              web design and logic for webSites.
            </p>
          </div>
          <div className="w-2/3 space-y-2 border-[1px] p-5 border-black mt-10 flex flex-col justify-start">
            <h3 className="text-xl md:text-3xl font-semibold">know about JS More</h3>
            <p className="text-sm md:text-base">
              here you will learn a bit more about JavaScript, This is used for
              web design and logic for webSites.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
