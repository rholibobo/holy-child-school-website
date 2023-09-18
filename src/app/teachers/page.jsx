import Image from "next/image";
import styles from "./page.module.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/footer";
import { FcGraduationCap } from "react-icons/fc";
import { FcNext } from "react-icons/fc";
import { FcPrevious } from "react-icons/fc";
//
import { Blob } from "../components/TeachersComponents/TeachersComponents";
import { TeachersCarousel } from "../components/Carousels/Carousels";

export default function Teachers() {
  return (
    <main>
      <section>
      <div className={styles.navbar}>
            <Header />
        </div>
        {/* ////////// SECTION 1 //////////// */}
        <div className={styles.section1}>
          
          <div className={styles.section_container}>
            <div className="max-width  flex justify-center items-center  mt-[9rem] ">
              <div className="grid grid-rows-1 lg:grid-cols-2 justify-center items-center lg:gap-x-[15rem] ">
                <div className=" font-bold text-5xl text-white">
                  <h2>Teachers</h2>
                </div>
                <div>
                  <Image
                    src="/images/DesignImages/d1.png"
                    className=" w-full h-full   "
                    width={100}
                    height={100}
                    alt="red star"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <h2 className="text-gray-900 font-bold  text-2xl text-center space-y-4 pb-8">
          Who we are
        </h2>
        <div className="max-width grid grid-rows-1 lg:grid-cols-2 lg:gap-20 relative">
          <Image
            src="/images/DesignImages/crown.png "
            className="w-fit absolute  left-1"
            width={100}
            height={100}
            aria-hidden="true"
            alt="red star"
          />

          {/* Here */}
          <div className="mask1 w-80 h-80 ">
            <Image
              src="/images/Teacher-Training/DSC0407-1024x684.jpg"
              className=" w-80 h-80 mb-[7rem] object-cover "
              width={100}
              height={100}
              alt="red star"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-6">
            <div className="space-y-4 bg-gray-100  rounded-sm p-3 ">
              <div className="flex items-center space-x-2  ">
                <div className="iconsDiv bg-[#1c1464] border-purple-400 flex justify-center items-end w-fit">
                  <FcGraduationCap className="text-3xl" />
                </div>
                <p className="text-base font-bold">
                  Self-contained gifted programs
                </p>
              </div>
              <p className="w-full text-gray-800 text-base">
                By creating a safe,consistent and welcoming environment
              </p>
            </div>
            <div className="space-y-4 bg-gray-100  rounded-sm p-3 ">
              <div className="flex items-center space-x-2 ">
                <div className="iconsDiv bg-[#1c1464] border border-green-400 flex justify-center items-end w-fit pb-7">
                  <FcGraduationCap className="text-3xl" />
                </div>
                <p className=" text-base font-bold">
                  Self-contained gifted programs
                </p>
              </div>
              <p className="text-gray-800 text-base">
                By creating a safe,consistent and welcoming environment
              </p>
            </div>
            <div className="space-y-4 bg-gray-100  rounded-sm p-3 ">
              <div className="flex items-center space-x-2 ">
                <div className="iconsDiv bg-[#1c1464] border border-lime-600 flex justify-center items-end w-fit pb-7">
                  <FcGraduationCap className="text-3xl" />
                </div>
                <p className="text-base font-bold">
                  Self-contained gifted programs
                </p>
              </div>
              <p className="text-gray-800 text-base">
                By creating a safe,consistent and welcoming environment
              </p>
            </div>
            <div className="spac space-y-4 bg-gray-100  rounded-sm p-3">
              <div className="flex items-center space-x-2 ">
                <div className="iconsDiv bg bg-[#1c1464] flex justify-center items-end w-fit pb-7">
                  <FcGraduationCap className="text-3xl" />
                </div>
                <p className=" text-base font-bold">
                  Self-contained gifted programs
                </p>
              </div>
              <p className="text-gray-800 text-base">
                By creating a safe,consistent and welcoming environment
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="grid grid-cols-1 justify-center items-center my-10 ">
        <div className="">
          <h2 className="text-center text-gray-900 font-bold  text-2xl">
            Our Team
          </h2>

          <div className=" max-width h-full relative py-4">
            <Image
              src="/images/DesignImages/redstar.png"
              className="w-20  h-20 absolute  left-[90%] top-[20%]"
              width={100}
              height={100}
              alt="red star"
            />
            <TeachersCarousel />
          </div>
        </div>
      </section>

      <section className="bg-[#1c1464]  mt-14">
        <div className="max-width grid grid-rows-1 lg:grid-cols-2 items-center justify-between lg:gap-20 ">
          <div className="grid grid-cols-2 justify-center items-center py-5 gap-10">
            <div className="flex items-center space-x-2 ">
              <div className="iconsDiv bg-[#FFA500] border border-[#FFA500] flex justify-center items-end w-fit pb-7">
                <FcGraduationCap className="text-3xl  text-white" />
              </div>
              <p className=" text-gray-200 text-base font-bold">
                Self-contained gifted programs
              </p>
            </div>
            <div className="flex items-center space-x-2 ">
              <div className="iconsDiv bg-[#FFA500] border border-[#FFA500] flex justify-center items-end w-fit pb-7">
                <FcGraduationCap className="text-3xl" />
              </div>
              <p className="w-1/2 text-gray-200 text-base font-bold">
                Extra Activities
              </p>
            </div>
            <div className="flex items-center space-x-2 ">
              <div className="iconsDiv  bg-[#FFA500] border border-[#FFA500] flex justify-center items-end w-fit pb-7">
                <FcGraduationCap className="text-3xl" />
              </div>
              <p className=" text-gray-200 text-base font-bold">
                Complete Tracking
              </p>
            </div>
            <div className="flex items-center space-x-2 ">
              <div className="iconsDiv bg-[#FFA500] border border-[#FFA500] justify-center items-end w-fit pb-7">
                <FcGraduationCap className="text-3xl" />
              </div>
              <p className=" text-gray-200 text-base font-bold">
                Individual Bus
              </p>
            </div>
          </div>
          <div className="lg:-mt-20">
            <Image
              src="/images/DesignImages/cube-unscreen.gif"
              className=" w-full h-full obj object-cover "
              width={100}
              height={100}
              quality={100}
              aria-hidden="true"
              alt="red star"
            />
          </div>
        </div>
      </section>
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        // viewBox="0 100 1200 500"
        preserveAspectRatio="none"
      >
        <path
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
          className="fill-[#1c1464]"
        ></path>
      </svg>

      <Footer />
    </main>
  );
}
