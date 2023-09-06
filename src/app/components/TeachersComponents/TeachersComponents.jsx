import Image from "next/image";

export function Blob(props) {
  // console.log(props);
  // const { image, name, area_of_discipline } = props;
  return (
    <div className='flex flex-col justify-center items-center'>
      <div
        className={`blob1 bg-purple-900 border-s-4 flex justify-center items-center  w-full  overflow-hidden `}
      >
        <Image
          src='/images/Teachers/1d-2-transparentbg.png'
          className='w-full'
          width={100}
          height={100}
          alt='red star'
        />
      </div>
      <p className='text-lg font-semibold'>Mr Wills</p>
      <p className=' text-gray-500 font-medium text-base'>
        {/* {props.area_of_discipline} */}
        Crops
      </p>
    </div>
  );
}
