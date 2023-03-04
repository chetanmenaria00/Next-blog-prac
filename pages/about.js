import React from "react";

const about = () => {
  return (
    <>
      <div className="section flex flex-col items-center justify-center mb-5">
        <h1 className="text-3xl md:text-4xl font-semibold">About my Blogs!</h1>
        <div className="section mx-1 mt-8">
          <h1 className="mt-2 text-xl md:text-2xl font-semibold">
            Introduction
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            alias aspernatur sint voluptas enim! Quaerat impedit eveniet
            perspiciatis corporis magni, illo ab, consequuntur officia earum,
            cumque maxime obcaecati explicabo? Porro nihil tempore facere
            perferendis, vero ea assumenda hic reiciendis architecto molestiae
            totam quisquam enim nam modi asperiores laborum corrupti inventore?
            Facilis, nemo accusantium voluptatibus laboriosam maiores dolores
            beatae, delectus, officiis quo repellat tempora? Eum maiores non
            recusandae iusto optio repellendus quo laboriosam inventore modi
            illum officiis omnis vero mollitia quia, impedit eligendi odio
            magnam reprehenderit dolores debitis amet, iure earum sint
            reiciendis. Magnam harum aut fuga unde officia, autem non accusamus,
            rem nemo aperiam earum reiciendis delectus totam odit deserunt sint
            beatae veritatis blanditiis placeat ex quaerat quam at cum hic.
            Reprehenderit, odio eum voluptatum sit laborum iure, blanditiis
            fugiat deserunt eligendi ipsa possimus aspernatur voluptatibus
            asperiores libero aperiam perspiciatis sequi, voluptas provident!
            Distinctio cum, rem dolores natus nisi repudiandae
          </p>
          <br />
          <h1 className="mt-2 text-xl md:text-2xl font-semibold">
            Services Offererd
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            alias aspernatur sint voluptas enim! Quaerat impedit eveniet
            perspiciatis corporis magni, illo ab, consequuntur officia earum
          </p>
          <p>We offer several Services:</p>
          <ul className="list-disc ml-10">
            <li>Service 1</li>
            <li>Service 2</li>
            <li>Service 3</li>
            <li>Service 4</li>
            <li>Service 5</li>
            <li>Service 6</li>
          </ul>
          <br />
          <h1 className="mt-2 text-xl md:text-2xl font-semibold">Contact Us</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            alias aspernatur sint voluptas enim! Quaerat impedit eveniet
            perspiciatis corporis magni, illo ab, consequuntur officia earum,
            cumque maxime obcaecati explicabo? Porro nihil tempore facere
            perferendis, vero ea assumenda hic reiciendis architecto molestiae
            totam quisquam enim nam modi asperiores laborum corrupti inventore?
            Facilis, nemo accusantium voluptatibus laboriosam maiores dolores
            beatae, delectus, officiis quo repellat tempora?
          </p>
          <button className="tracking-tight mt-4 px-6 py-2 border border-black rounded-lg hover:bg-gray-200 hover:text-black text-gray-600">
            Contact Us
          </button>
        </div>
      </div>
    </>
  );
};

export default about;
