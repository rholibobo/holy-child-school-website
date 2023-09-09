import Image from "next/image";

export function Blob({ image, name, area_of_discipline }) {
  return (
    <div className='flex flex-col  justify-center items-center'>
      <div
        className={`blob1 bg-blue-500 border-s-4 flex justify-center items-center  w-1/2  overflow-hidden `}
      >
        <Image
          src={image}
          className='w-full'
          width={100}
          height={100}
          alt='red star'
        />
      </div>
      <p className='text-lg font-semibold'>{name}</p>
      <p className=' text-gray-500 font-medium text-base'>
        {area_of_discipline}
      </p>
    </div>
  );
}
