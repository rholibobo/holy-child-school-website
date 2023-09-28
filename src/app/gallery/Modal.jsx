import Image from "next/image";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import {AiFillCloseCircle} from 'react-icons/ai'

const Modal = (props) => {
  const { clickedImg, handleRightNavigation, setClickedImg, handleLeftNavigation } = props;

  const handleClick = (e) => {
    // Check if the clicked element has the "dismiss" class
    if (e.target.classList.contains("dismiss")) {
      setClickedImg();
    }
  };

  return (
    <>
      {clickedImg && (
        <div className="fixed top-0 left-0 w-full p-2 md:p-0 h-full flex items-center justify-center z-50 backdrop-filter backdrop-blur-sm bg-opacity-50">
          <div className="bg-white p-2 rounded-lg text-center w-full md:w-[75%] lg:w-[50%]">
            <Image src={clickedImg} className="dismiss" alt="Bigger Image" />
            <span
              className="dismiss absolute top-10 lg:top-4 right-6 rounded-full text-[2.5rem] md:text-[2.5rem] cursor-pointer hover:bg-gray-300 transition-colors duration-300"
              onClick={handleClick}
            >
             <AiFillCloseCircle className="dismiss"/>
            </span>
          </div>
            <span className="p-2 text-[2.5rem] md:text-[3rem] right-2 bottom-[13rem] cursor-pointer absolute md:right-6 hover:bg-gray-300 transition-colors duration-300" onClick={handleRightNavigation}>
              <FaArrowRightLong />
            </span>
            <span className="p-2 text-[2.5rem] md:text-[3rem] left-2 bottom-[13rem] cursor-pointer absolute md:left-6 hover:bg-gray-300 transition-colors duration-300" onClick={handleLeftNavigation}>
              <FaArrowLeftLong />
            </span>
        </div>
      )}
    </>
  );
};

export default Modal;
