import React, { useState } from "react";
import Link from "next/link";
import * as fs from 'fs';

// setp 1: Collect all the files from blogdata directory
// setp 2: Iterate through the and display them
const blog = (props) => {
  // console.log(props);
  const [blogs, setBlogs] = useState(props.allBlogs);
  
  return (
    <>
      <div className="section flex flex-col items-center mb-10">
        {blogs.map((blogitem) => {
          return (
            <div
              key={blogitem.slug}
              className="cursor-pointer md:w-2/3 space-y-2 border-[2px] shadowimg p-5 border-black rounded-lg mt-10 flex flex-col justify-start"
            >
              <Link href={`/blogpost/${blogitem.slug}`}>
                <h3 className="text-xl md:text-3xl font-semibold">
                  {blogitem.title}
                </h3>
                <p className="text-sm md:text-base my-4">
                  {blogitem.content.substr(0, 300)}....
                </p>
                <p className="text-right font-semibold md:text-lg">
                  -{blogitem.author}
                </p>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export async function getStaticProps(context) {
  let data = await fs.promises.readdir("blogdata");
  let myfile;
  let allBlogs = [];
  for (const element of data) {
      const item = element;
      // console.log(item)
      myfile = await fs.promises.readFile(('blogdata/' + item), 'utf-8')
      allBlogs.push(JSON.parse(myfile))
  }
// console.log(allBlogs);
  return {
      props: { allBlogs }, // will be passed to the page component as props
  }
}

export default blog;