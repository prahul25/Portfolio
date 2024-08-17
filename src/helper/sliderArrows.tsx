import { FaHandPointer } from "react-icons/fa";

export function SampleNextArrow(props:any) {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
    ><FaHandPointer className='rotate-45'/></div>
  );
}

export function SamplePrevArrow(props:any) {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
    ><FaHandPointer className='-rotate-45'/></div>
  );
}


 const settings:Object = {
    autoplay:true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };