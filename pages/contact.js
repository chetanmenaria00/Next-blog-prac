import React, { useState } from "react";
import Image from "next/image";
import contact from "../public/contact.webp";


const Contact = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [desc, setDesc] = useState("")

  //page will not reload on form submit and will remain on default behaviour!
  const handleSubmit = (e) => {
    e.preventDefault()
    const data = { phone, name, email, desc };

    fetch('http://localhost:3000/api/postcontact', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then(response => response.text()).then(data => {
      // console.log('Success:', data);
      alert("Thanks for contacting us");
      setPhone('')
      setName('')
      setDesc('')
      setEmail('')
    })
      .catch((error) => {
        console.error('Error:', error);
      });

  }

  const handleChange = (e) => {
    if (e.target.name == 'name') {
      setName(e.target.value)
    }
    else if (e.target.name == 'email') {
      setEmail(e.target.value)
    }
    else if (e.target.name == 'phone') {
      setPhone(e.target.value)
    }
    else if (e.target.name == 'desc') {
      setDesc(e.target.value)
    }
  }

  return (
    <>
      <div className="section flex flex-col justify-center items-center">
        <h1 className="text-3xl font-semibold mb-10 underline">Contact Us</h1>
        <div className="grid grid-cols-12 w-full">
          <div className="col-span-12 md:col-span-6 flex items-center justify-center">
            <Image src={contact} alt="contact-abstract" className="w-1/2" />
          </div>
          <div className="my-10 md:mt-0 col-span-12 md:col-span-6">
            <form onSubmit={handleSubmit} className="flex flex-col items-start justify-center w-full space-y-8">
              <input
                name="name"
                placeholder="Enter your Name"
                className="w-full md:w-3/4 border-b border-black px-4 py-2 focus:rounded-lg"
                type="text"
                value={name}
                onChange={handleChange}
                required
              />
              <input
                name="email"
                placeholder="Enter your Email"
                className="w-full md:w-3/4 border-b border-black px-4 py-2 focus:rounded-lg"
                type="email"
                value={email}
                onChange={handleChange}
                required
              />
              <input
                name="phone"
                placeholder="Enter your phone Number"
                className="w-full md:w-3/4 border-b border-black px-4 py-2 focus:rounded-lg"
                type="phone"
                value={phone}
                onChange={handleChange}
                required
              />
              <textarea
                placeholder="Elaborate your concern..."
                className="rounded-lg py-1 px-3 w-full md:w-3/4 border border-black"
                name="desc"
                id="desc"
                cols="8"
                rows="4"
                value={desc}
                onChange={handleChange}
                required
              />
              <button className="hover:bg-gray-200 hover:text-black text-gray-600 font-semibold px-4 py-2 border border-black rounded-lg">
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
