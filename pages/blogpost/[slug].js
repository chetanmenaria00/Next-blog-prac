import React from "react";
import { useRouter } from "next/router";

// setp 1: Find the file corresponding tothe slug
// setp 2: Populate them inside the page.
const slug = () => {
  const router = useRouter();
  console.log(router.query);
  const { slug } = router.query;
  return (
    <>
      <div className="section flex flex-col items-center md:w-5/6">
        <h1 className="text-3xl font-semibold mb-5">Title: {slug}</h1>
        <p></p>
      </div>
    </>
  );
};

export default slug;
