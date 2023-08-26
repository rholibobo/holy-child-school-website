import Image from "next/image";

export function Blob(props) {
  console.log(props);

  return (
    <div className='flex flex-col justify-center items-center'>
      <div className={`${props} blob1 bg-purple-900 border-s-4 flex justify-center items-center  w-1/2  overflow-hidden `}>
        <Image
          src='/images/Teachers/1d-2-transparentbg.png'
          className='w-[94%]  '
          width={100}
          height={100}
          alt='red star'
        />
      </div>
      <p className='text-lg font-semibold'>John Snow</p>
      <p className=' text-gray-500 font-medium text-base'>
        Specialist in Crops
      </p>
    </div>
  );
}
