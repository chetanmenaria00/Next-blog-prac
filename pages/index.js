import React, { useEffect, useState } from "react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import imgbtm from "../public/next.jpg";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    console.log("useEffect is running");
    fetch("http://localhost:3000/api/blogs")
      .then((a) => {
        return a.json();
      })
      .then((parsed) => {
        setBlogs(parsed);
      });
  }, []);
  return (
    <>
      <Head>
        <title>ChetanBlogs</title>
        <meta name="description" content="chetanblogs" />
        <meta name="keywords" content="chetan, chetanblogs, blogs, next" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="section flex flex-col mb-10">
        <div className="space-y-3 flex flex-col items-center mb-10">
          <h1 className="text-black z-10 text-3xl md:text-5xl font-bold tracking-wide">
            &lt;Coding-Blogs/&gt;
          </h1>
          <Image
            className="rounded-xl shadowimg w-2/3 md:w-80"
            src={imgbtm}
            alt="Next.js Logo"
            priority
          />
          {/* <img
          className="rounded-xl shadowimg w-2/3 md:w-80"
          src={imgbtm}
          alt="Next.js Logo"
          priority></img> */}
        </div>

        <div className="flex flex-col items-center">
          <p className="text-xl md:text-3xl tracking-wider font-bold">
            Some popular logs......
          </p>
          {blogs.slice(0, 4).map((blogitem) => {
            return (
              <div
                key={blogitem.slug}
                className="md:w-2/3 space-y-2 border-[2px] p-5 border-black mt-10 flex flex-col justify-start rounded-lg"
              >
                <Link href={`/blogpost/${blogitem.slug}`}>
                  <h3 className="text-xl md:text-3xl font-semibold hover:underline">
                    {blogitem.title}
                  </h3>
                  <span className="text-sm md:text-base">
                    {blogitem.content.substr(0, 120)}....
                  </span>&nbsp;
                  <button className="tracking-tight px-3 py-1 border border-black rounded-lg hover:bg-gray-200 hover:text-black text-gray-600">Read More</button>
                </Link>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
}
