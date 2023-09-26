import Image from "next/image";
import styles from "./page.module.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/footer";

import {
  Blob,
  Quote,
} from "../components/TeachersComponents/TeachersComponents";
import { TeachersCarousel } from "../components/Carousels/Carousels";

export default function Teachers() {
  return (
    <main>
      <div className={styles.navbar}>
        <Header />
      </div>
      <section className='overflow-x-hidden'>
        {/* ////////// SECTION 1 //////////// */}
        <div
          className={`${styles.section1} flex justify-center items-center py-20 lg:py-10 `}
        >
          <div
            className={`${styles.section_container} flex justify-center items-center`}
          >
            <div className='max-width  flex justify-center items-center '>
              <div className='grid grid-rows-1 lg:grid-cols-2 justify-between items-center gap-y-10  lg:gap-x-[15rem] lg:gap-y-0 w-full '>
                <div className='  flex flex-col   space-y-6 '>
                  <h2 className='font-bold text-2xl lg:text-5xl text-white'>
                    Teachers
                  </h2>
                  <p className='text text-gray-100 font-medium text-base'>
                    We are Looking to give our pupils quality education after
                    all our teachers can make that happen.Quality education is
                    the key that unlocks the door to endless possibilities,
                    empowering your kids to shape a brighter future for
                    themselves and society.
                  </p>
                </div>
                <div>
                  <Image
                    src='/images/DesignImages/teaching.svg'
                    className='w-[400px]  h-full'
                    width={100}
                    height={100}
                    alt='teacher description'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='py-5 flex flex-col justify-center items-center space-y-9 relative '>
        <Image
          src='/images/DesignImages/redstar.png'
          className='w-10  h-10 absolute  left-[90%] top-[20%] opacity-25'
          width={100}
          height={100}
          alt='red star'
          aria-hidden='true'
        />

        <Image
          src='/images/DesignImages/yellowStar.png'
          className='w-10  h-10 absolute  right-[90%] top-[70%] opacity-25'
          width={100}
          height={100}
          alt='yellow star'
          aria-hidden='true'
        />
        <h2 className='text-[#1c1489] font-bold  text-4xl text-center pb-3'>
          Who Are Our Teachers
        </h2>
        <div className='max-width grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-14 justify-between items-center my-5 '>
          <div className='w-[17rem] h-[17rem] teacherCardShadow  bg-white flex flex-col justify-center items-center rounded-sm hover:scale-110 transition duration-1000'>
            <div className=' flex justify-center items-center w-16 h-16 rounded-full bg-white '>
              <Image
                src='/images/DesignImages/qualified.svg'
                className='w-40  h-40'
                width={100}
                height={100}
                alt='qualified'
                aria-hidden='true'
              />
            </div>
            <br />
            <div className='flex flex-col justify-center items-center px-3  '>
              <h2 className='mb-10 text-black text-xl font-bold text-center'>
                Qualified
              </h2>
              <p className='text-center text-black text-sm'>
                We boast of qualified and competent teachers to give your child
                qualitative teaching
              </p>
            </div>
            <div className='w-full h-[1px] bg-white my-2' />
          </div>

          {/* Second Box */}

          <div className='w-[17rem] h-[17rem]  bg-white teacherCardShadow   flex flex-col justify-center items-center rounded-sm hover:scale-110 transition duration-1000'>
            <div className=' flex justify-center items-center w-16 h-16 rounded-full bg-white '>
              <Image
                src='/images/DesignImages/competent.svg'
                className='w-40  h-40'
                width={100}
                height={100}
                alt='competent'
                aria-hidden='true'
              />
            </div>
            <br />
            <div className='flex flex-col justify-center items-center px-3  '>
              <h2 className='mb-10 text-black text-xl font-bold text-center'>
                Competent
              </h2>
              <p className='text-center text-black text-sm'>
                No doubt with our teachers competence.They are topnotch.
              </p>
            </div>
            <div className='w-full h-[1px] bg-white my-2' />
          </div>

          {/* Third Box */}

          <div className='w-[17rem] h-[17rem]  bg-white teacherCardShadow flex flex-col justify-center items-center rounded-sm hover:scale-110 transition duration-1000'>
            <div className=' flex justify-center items-center w-16 h-16 rounded-full bg-white '>
              <Image
                src='/images/DesignImages/award.svg'
                className='w-40  h-40'
                width={100}
                height={100}
                alt='award'
                aria-hidden='true'
              />
            </div>
            <br />
            <div className='flex flex-col justify-center items-center px-2  '>
              <h2 className='mb-10 text-black text-xl font-bold text-center'>
                Award Winning
              </h2>
              <p className='text-center text-black text-sm'>
                Our teachers have won awards both within and outside the school.
              </p>
            </div>
            {/* <div className='w-full h-[1px] bg-white my-2' /> */}
          </div>
        </div>
      </section>
      <section className='grid grid-cols-1 justify-center items-center my-10 '>
        <div className=''>
          <h2 className='text-center text-[#1c1489] font-bold  text-4xl pb-5'>
            Our Team
          </h2>

          <div className=' max-width h-full relative py-4'>
            <TeachersCarousel />
          </div>
        </div>
      </section>

      <section className='bg-[#F8FBF8] py-10  mt-14 overflow-hidden'>
        <div className='max-width  py-4'>
          <Quote />
        </div>
      </section>

      <Footer />
    </main>
  );
}
