import Image from "next/image";
import Link from "next/link";
// Import img from "./public/images/DesignImages/error.png"
import ErrorImg from "/public/images/DesignImages/error.png";

export default function NotFound() {
  return (
    <div className="m-auto flex flex-col gap-10 lg:flex-row p-5 border border-gray-600 justify-center items-center h-screen">
      <Image src={ErrorImg} width={700} height={700} alt="error" />
      <div className="flex flex-col">
        <p>AWWW...DON’T CRY.</p>
        <p>It's just a 404 Error! </p>
        <Link href="/">
          Click here:{" "}
          <span className="text-[purple] underline">
            Let's take you back home
          </span>
        </Link>
      </div>
    </div>
  );
}
