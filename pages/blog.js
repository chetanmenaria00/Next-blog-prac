import Link from "next/link";
import React from "react";

// setp 1: Collect all the files from blogdata directory
// setp 2: Iterate through the and display them
const blog = () => {
  return (
    <>
      <div className="section flex flex-col items-center">
        <div className="cursor-pointer w-2/3 space-y-2 border-[1px] p-5 border-black mt-10 flex flex-col justify-start">
          <Link href="/blogpost/learn-js">
            <h3 className="text-xl md:text-3xl font-semibold">
              know about JS More
            </h3>
            <p className="text-sm md:text-base">
              here you will learn a bit more about JavaScript, This is used for
              web design and logic for webSites.
            </p>
          </Link>
        </div>
        <div className="cursor-pointer w-2/3 space-y-2 border-[1px] p-5 border-black mt-10 flex flex-col justify-start">
          <Link href="/blogpost/learn-js">
            <h3 className="text-xl md:text-3xl font-semibold">
              know about JS More
            </h3>
            <p className="text-sm md:text-base">
              here you will learn a bit more about JavaScript, This is used for
              web design and logic for webSites.
            </p>
          </Link>
        </div>
        <div className="cursor-pointer w-2/3 space-y-2 border-[1px] p-5 border-black mt-10 flex flex-col justify-start">
          <Link href="/blogpost/learn-js">
            <h3 className="text-xl md:text-3xl font-semibold">
              know about JS More
            </h3>
            <p className="text-sm md:text-base">
              here you will learn a bit more about JavaScript, This is used for
              web design and logic for webSites.
            </p>
          </Link>
        </div>
        <div className="cursor-pointer w-2/3 space-y-2 border-[1px] p-5 border-black mt-10 flex flex-col justify-start">
          <Link href="/blogpost/learn-js">
            <h3 className="text-xl md:text-3xl font-semibold">
              know about JS More
            </h3>
            <p className="text-sm md:text-base">
              here you will learn a bit more about JavaScript, This is used for
              web design and logic for webSites.
            </p>
          </Link>
        </div>
        <div className="cursor-pointer w-2/3 space-y-2 border-[1px] p-5 border-black mt-10 flex flex-col justify-start">
          <Link href="/blogpost/learn-js">
            <h3 className="text-xl md:text-3xl font-semibold">
              know about JS More
            </h3>
            <p className="text-sm md:text-base">
              here you will learn a bit more about JavaScript, This is used for
              web design and logic for webSites.
            </p>
          </Link>
        </div>
        <div className="cursor-pointer w-2/3 space-y-2 border-[1px] p-5 border-black mt-10 flex flex-col justify-start">
          <Link href="/blogpost/learn-js">
            <h3 className="text-xl md:text-3xl font-semibold">
              know about JS More
            </h3>
            <p className="text-sm md:text-base">
              here you will learn a bit more about JavaScript, This is used for
              web design and logic for webSites.
            </p>
          </Link>
        </div>
        <div className="cursor-pointer w-2/3 space-y-2 border-[1px] p-5 border-black mt-10 flex flex-col justify-start">
          <Link href="/blogpost/learn-js">
            <h3 className="text-xl md:text-3xl font-semibold">
              know about JS More
            </h3>
            <p className="text-sm md:text-base">
              here you will learn a bit more about JavaScript, This is used for
              web design and logic for webSites.
            </p>
          </Link>
        </div>
        <div className="cursor-pointer w-2/3 space-y-2 border-[1px] p-5 border-black mt-10 flex flex-col justify-start">
          <Link href="/blogpost/learn-js">
            <h3 className="text-xl md:text-3xl font-semibold">
              know about JS More
            </h3>
            <p className="text-sm md:text-base">
              here you will learn a bit more about JavaScript, This is used for
              web design and logic for webSites.
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default blog;
