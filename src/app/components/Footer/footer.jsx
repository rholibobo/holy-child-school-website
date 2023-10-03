"use client";

import Link from "next/link";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
import { BsFacebook, BsTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { TiLocation } from "react-icons/ti";
import { FaFax } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" bg-[#1c1464] text-white ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  justify-center align-middle text-white p-5 sm:p-10 gap-5">
        <div className="flex p-4 rounded-[10px] hover:bg-[#140e46] flex-col max-w-[500px]">
          <h1 className="text-3xl font-semibold mb-5">About Us</h1>
          <p>
            Holy Child Preparatory School is a learning Community. Because of
            our strong background in reading, our practice is research – driven.
            We are constantly adopting new ideas & questioning our practices. We
            are also open to suggestions & criticisms.
          </p>
        </div>
        <div className="flex flex-col p-4 rounded-[10px] hover:bg-[#140e46] ">
          <h1 className="text-3xl font-semibold mb-5">Contact Us</h1>
          <div className="flex flex-col gap-3">
            <p className="flex align-middle gap-2">
              <TiLocation className="text-xl" />
              Nza Street Independence layout Enugu
            </p>

            <p className="flex  align-middle gap-2">
              <BsTelephoneFill className="text-xl" />
              Phone: +234 (701) 790 7896
            </p>
            <p className="flex  align-middle gap-2">
              <FaFax className="text-xl" />
              fax: +234 (80) 345 6789
            </p>
            <p className="flex  align-middle gap-2">
              <GrMail className="text-xl" />
              contact@holychildpreparatory.org
            </p>
          </div>
          <div className="flex mt-3 gap-3">
            <p className="">Follow Us:</p>
            <Link href="/">
              <AiFillInstagram className="text-[24px] hover:text-[#329999] w-fit " />
            </Link>
            <Link href="/">
              <BsFacebook className="text-[24px] hover:text-[#329999]" />
            </Link>
            <Link href="/">
              <AiOutlineTwitter className="text-[24px] hover:text-[#329999]" />
            </Link>
          </div>
        </div>
        <div className="flex flex-col py-4 px-6 min-w-fit rounded-[10px] hover:bg-[#140e46] gap-1 ">
          <h1 className="text-3xl font-semibold mb-5">Links</h1>
          <Link className="hover:text-[#329999] w-fit " href="/">
            Home
          </Link>
          <Link className="hover:text-[#329999] w-fit " href="/blog">
            Blog
          </Link>
          <Link className="hover:text-[#329999] w-fit " href="/about-us">
            About Us
          </Link>
          <Link className="hover:text-[#329999] w-fit " href="/teachers">
            Meet Our Teachers
          </Link>
          <Link className="hover:text-[#329999] w-fit " href="/services">
            Services
          </Link>
          <Link className="hover:text-[#329999] w-fit " href="/gallery">
            Gallery
          </Link>
          <Link className="hover:text-[#329999] w-fit " href="/contact-us">
            Contact Us
          </Link>
          <Link className="hover:text-[#329999] w-fit " href="/#">
            School Portal
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
