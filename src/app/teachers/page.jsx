import Image from "next/image";
import styles from "./page.module.css";
import Header from "../components/Header/Header";
import { FcGraduationCap } from "react-icons/fc";
import {
  Blob,
  IconDiv,
} from "../components/TeachersComponents/TeachersComponents";

export default function Teachers() {
  return (
    <main>
      <section>
        {/* ////////// SECTION 1 //////////// */}
        <div className={styles.section1} >
          <div className={styles.section_container}>
            <div className={styles.navbar}>
              <Header />
            </div>

            <div className='max-width  flex justify-center items-center  mt-[9rem] '>
              <div className='grid grid-rows-1 lg:grid-cols-2 justify-center items-center lg:gap-x-[15rem] '>
                <div className=' font-bold text-5xl text-white'>
                  <h2>Teachers</h2>
                </div>
                <div>
                  <Image
                    src='/images/DesignImages/d1.png'
                    className=' w-full h-full   '
                    width={100}
                    height={100}
                    alt='red star'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='py-20'>
        <h2 className='text-left font-medium text-lg'>Who we are</h2>
        <div className='max-width grid grid-rows-1 lg:grid-cols-2 lg:gap-20 '>
          <div className='mask1 '>
            <Image
              src='/images/Teacher-Training/DSC0407-1024x684.jpg'
              className=' w-full h-full mb-[7rem] object-cover '
              width={100}
              height={100}
              alt='red star'
            />
          </div>

          <div className='grid grid-cols-2 justify-center items-center gap-6'>
            <div className='space-y-4'>
              <div className='flex items-center space-x-2  '>
                <div className='iconsDiv bg-purple-400 border border-purple-400 flex justify-center items-end w-fit pb-7'>
                  <FcGraduationCap className='text-3xl' />
                </div>
                <p className='w-1/2 t text-base font-bold'>
                  Self-contained gifted programs
                </p>
              </div>
              <p className='w-full'>
                By creating a safe,consistent and welcoming environment
              </p>
            </div>
            <div className='spac space-y-4'>
              <div className='flex items-center space-x-2 '>
                <div className='iconsDiv bg-green-400 border border-green-400 flex justify-center items-end w-fit pb-7'>
                  <FcGraduationCap className='text-3xl' />
                </div>
                <p className='w-1/2 text-base font-bold'>
                  Self-contained gifted programs
                </p>
              </div>
              <p className=''>
                By creating a safe,consistent and welcoming environment
              </p>
            </div>
            <div className='spac space-y-4'>
              <div className='flex items-center space-x-2 '>
                <div className='iconsDiv bg-lime-600 border border-lime-600 flex justify-center items-end w-fit pb-7'>
                  <FcGraduationCap className='text-3xl' />
                </div>
                <p className='w-1/2 text-base font-bold'>
                  Self-contained gifted programs
                </p>
              </div>
              <p className=''>
                By creating a safe,consistent and welcoming environment
              </p>
            </div>
            <div className='spac space-y-4'>
              <div className='flex items-center space-x-2 '>
                <div className='iconsDiv bg bg-sky-600 border--400 flex justify-center items-end w-fit pb-7'>
                  <FcGraduationCap className='text-3xl' />
                </div>
                <p className='w-1/2 text-base font-bold'>
                  Self-contained gifted programs
                </p>
              </div>
              <p className=''>
                By creating a safe,consistent and welcoming environment
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="grid grid-cols-1 justify-center items-center my-10 after:content-['ffffffffff'] ">
        <div className=''>
          <h2 className='text-center font-bold text-lg'>Our Team</h2>
          <div className='grid grid-cols-3 max-width'>
            <Blob />
            <Blob />
            <Blob />
          </div>
        </div>
      </section>



      <section className='bg-purple-900'>
        <div className='max-width grid grid-rows-1 lg:grid-cols-2 items-center justify-between lg:gap-20 '>
          <div className='grid grid-cols-2 justify-center items-center gap-10'>
            <div className='flex items-center space-x-2 '>
              <div className='iconsDiv bg-lime-600 border border-lime-600 flex justify-center items-end w-fit pb-7'>
                <FcGraduationCap className='text-3xl' />
              </div>
              <p className=' text-gray-200 text-base font-bold'>
                Self-contained gifted programs
              </p>
            </div>
            <div className='flex items-center space-x-2 '>
              <div className='iconsDiv bg-lime-600 border border-lime-600 flex justify-center items-end w-fit pb-7'>
                <FcGraduationCap className='text-3xl' />
              </div>
              <p className='w-1/2 text-gray-200 text-base font-bold'>
                Extra Activities
              </p>
            </div>
            <div className='flex items-center space-x-2 '>
              <div className='iconsDiv  bg-yellow-400 border border-red-600 flex justify-center items-end w-fit pb-7'>
                <FcGraduationCap className='text-3xl' />
              </div>
              <p className=' text-gray-200 text-base font-bold'>
                Complete Tracking
              </p>
            </div>
            <div className='flex items-center space-x-2 '>
              <div className='iconsDiv bg-sky-600 border border-blue-600 justify-center items-end w-fit pb-7'>
                <FcGraduationCap className='text-3xl' />
              </div>
              <p className=' text-gray-200 text-base font-bold'>
                Individual Bus
              </p>
            </div>
          </div>
          <div className='lg:-mt-20'>
            <Image
              src='/images/DesignImages/little_boy_with_paint.png'
              className=' w-full h-full obj object-cover '
              width={100}
              height={100}
              alt='red star'
            />
          </div>
        </div>
      </section>
      <section>
        <h2 className='text-center font-bold text-lg'>Curriculum</h2>
        {/*Curriculum */}
        <div>
          <div></div>
        </div>
      </section>
    </main>
  );
}
