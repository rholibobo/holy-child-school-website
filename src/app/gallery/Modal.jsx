"use client";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const Modal = (props) => {
  const { clickedImg, handleCickRightNavigation, setClickedImg } = props;
  const handleClick = (e) => {
    if (e.target.classList.contains("dismiss")) {
      setClickedImg();
    }
  };
  return (
    <>
      <div className="dismiss" onClick={handleClick}>
        {clickedImg && <Image src={clickedImg} alt="Bigger Image" />}
        <span className="dismiss" onClick={handleClick}>
          X
        </span>
        <span onClick={handleCickRightNavigation}>
          <FaArrowRight />
        </span>
      </div>
    </>
  );
};

export default Modal;
