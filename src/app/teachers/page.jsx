import Image from "next/image";
import styles from "./page.module.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/footer";
import { HiAcademicCap } from "react-icons/hi";
import { FcGraduationCap } from "react-icons/fc";
import { GiTeacher } from "react-icons/gi";
import { FaChalkboardTeacher } from "react-icons/fa";
import { BsFillAwardFill } from "react-icons/bs";

//
import {
  Blob,
  Quote,
} from "../components/TeachersComponents/TeachersComponents";
import { TeachersCarousel } from "../components/Carousels/Carousels";

export default function Teachers() {
  return (
    <main >
      <section className='overflow-x-hidden'>
        <div className={styles.navbar}>
          <Header />
        </div>
        {/* ////////// SECTION 1 //////////// */}
        <div
          className={`${styles.section1} flex justify-center items-center py-20 lg:py-10 `}
        >
          <div
            className={`${styles.section_container} flex justify-center items-center`}
          >
            <div className='max-width  flex justify-center items-center  mt-[9rem]   '>
              <div className='grid grid-rows-1 lg:grid-cols-2 justify-between items-center lg:gap-x-[15rem]  w-full '>
                <div className=' font-bold text-2xl lg:text-5xl text-white '>
                  <h2>Teachers</h2>
                </div>
                <div>
                  <GiTeacher className='text-[13rem] text-blue-500' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='py-20 flex flex-col justify-center items-center space-y-9 relative overflow-x-hidden'>
        <Image
          src='/images/DesignImages/redstar.png'
          className='w-20  h-20 absolute  left-[90%] top-[20%] opacity-25'
          width={100}
          height={100}
          alt='red star'
        />

        <Image
          src='/images/DesignImages/yellowStar.png'
          className='w-20  h-20 absolute  right-[90%] top-[70%] opacity-25'
          width={100}
          height={100}
          alt='red star'
        />

        <Image
          src='/images/DesignImages/ballon.png'
          className='w-20  h-20 absolute  right-[50%] top-[80%] opacity-25'
          width={100}
          height={100}
          alt='red star'
        />
        <h2 className='text-[#1c1489] font-bold  text-2xl text-center space-y-4 pb-8'>
          Who Are Our Teachers
        </h2>
        <div className='max-width grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-14 justify-between items-center my-5 z-50'>
          <div className='w-[17rem] h-[19rem]  bg-blue-300 flex flex-col justify-center items-center rounded-sm hover:scale-125 transition duration-1000'>
            <div className=' flex justify-center items-center w-16 h-16 rounded-full bg-blue-300 -mt-16'>
              <HiAcademicCap className='text-4xl text-indigo-700' />
            </div>
            <div className='flex flex-col justify-center items-center px-3  pt-20'>
              <h2 className='mb-10 text-white text-base font-semibold'>
                Qualified teachers
              </h2>
              <p className='text-center text-gray-200'>
                We boast of qualified and competent teachers to give your child
                qualitative teaching
              </p>
            </div>
            <div className='w-full h-[1px] bg-white my-2' />
          </div>

          {/* Second Box */}

          <div className='w-[17rem] h-[19rem] bg-blue-500   flex flex-col justify-center items-center rounded-sm hover:scale-125 transition duration-1000'>
            <div className=' flex justify-center items-center w-16 h-16 rounded-full bg-blue-500 -mt-16'>
              <FaChalkboardTeacher className='text-4xl text-indigo-700' />
            </div>
            <div className='flex flex-col justify-center items-center px-3 text-white pt-20'>
              <h2 className='mb-10 text-white text-base font-semibold'>
                Competent at their specialty
              </h2>
              <p className='text-center text-gray-200'>
                No doubt with our teachers competence.They are topnotch.
              </p>
            </div>
            <div className='w-full h-[1px] bg-white my-2' />
          </div>

          {/* Third Box */}

          <div className='w-[17rem] h-[19rem] bg bg-blue-800 flex flex-col justify-center items-center rounded-sm hover:scale-125 transition duration-1000'>
            <div className=' flex justify-center items-center w-16 h-16 rounded-full bg-blue-800 -mt-16'>
              <BsFillAwardFill className='text-4xl text-indigo-400' />
            </div>
            <div className='flex flex-col justify-center items-center px-3  pt-20'>
              <h2 className='mb-10 text-white'>Award Winning Teachers</h2>
              <p className='text-center text-gray-200'>
                Our teachers have won awards both within and outside the school.
              </p>
            </div>
            <div className='w-full h-[1px] bg-white my-2' />
          </div>
        </div>
      </section>
      <section className='grid grid-cols-1 justify-center items-center my-10 '>
        <div className=''>
          <h2 className='text-center text-[#1c1489] font-bold  text-2xl'>
            Our Team
          </h2>

          <div className=' max-width h-full relative py-4'>
            <Image
              src='/images/DesignImages/redstar.png'
              className='w-20  h-20 absolute  left-[90%] top-[20%]'
              width={100}
              height={100}
              alt='red star'
            />
            <TeachersCarousel />
          </div>
        </div>
      </section>

      <section className='bg-[#828286]  mt-14'>
        <div className='max-width grid grid-rows-1 lg:grid-cols-2 items-center justify-between lg:gap-20 py-4'>
          {/* <div className='grid grid-cols-2 justify-center items-center py-5 gap-10'>
            <div className='flex items-center space-x-2 '>
              <div className='iconsDiv bg-[#FFA500] border border-[#FFA500] flex justify-center items-end w-fit pb-7'>
                <FcGraduationCap className='text-3xl  text-white' />
              </div>
              <p className=' text-gray-200 text-base font-bold'>
                Self-contained gifted programs
              </p>
            </div>
            <div className='flex items-center space-x-2 '>
              <div className='iconsDiv bg-[#FFA500] border border-[#FFA500] flex justify-center items-end w-fit pb-7'>
                <FcGraduationCap className='text-3xl' />
              </div>
              <p className='w-1/2 text-gray-200 text-base font-bold'>
                Extra Activities
              </p>
            </div>
            <div className='flex items-center space-x-2 '>
              <div className='iconsDiv  bg-[#FFA500] border border-[#FFA500] flex justify-center items-end w-fit pb-7'>
                <FcGraduationCap className='text-3xl' />
              </div>
              <p className=' text-gray-200 text-base font-bold'>
                Complete Tracking
              </p>
            </div>
            <div className='flex items-center space-x-2 '>
              <div className='iconsDiv bg-[#FFA500] border border-[#FFA500] justify-center items-end w-fit pb-7'>
                <FcGraduationCap className='text-3xl' />
              </div>
              <p className=' text-gray-200 text-base font-bold'>
                Individual Bus
              </p>
            </div>
          </div> */}

          <Quote />
          <div className='lg:-mt-20'>
            <Image
              src='/images/DesignImages/cube-unscreen.gif'
              className=' w-full h-full obj object-cover '
              width={100}
              height={100}
              quality={100}
              aria-hidden='true'
              alt='red star'
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
