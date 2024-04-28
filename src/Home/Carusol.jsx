import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
const Carusol = () => {




  return (
    <div className=" m-auto ">
      <Swiper 
        // pagination={{
        //   type: "progressbar",
        // }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper md:min-h-96 m-auto "
        //
        loop={true}
        autoplay={{ delay: 1000, disableOnInteraction: false }}
      >
        <SwiperSlide ><img  className="m-auto " src={'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} alt="" /></SwiperSlide>
        <SwiperSlide ><img  className="m-auto " src={'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} alt="" /></SwiperSlide>
        <SwiperSlide ><img className="m-auto "  src={'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} alt="" /></SwiperSlide>
        <SwiperSlide ><img  className="m-auto " src={'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} alt="" /></SwiperSlide>
        <SwiperSlide ><img className="m-auto "  src={'https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} alt="" /></SwiperSlide>
        {/* <SwiperSlide className=" h-screen bg-no-repeat bg-cover bg-[url('https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]"><div className=" bg-green-400  text-4xl  text-black "><h3 className="text-center my-auto items-center justify-center">home</h3> </div></SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default Carusol;
