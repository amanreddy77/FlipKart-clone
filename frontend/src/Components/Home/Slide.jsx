import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import Countdown from "react-countdown";
import { Divider } from "@mui/material";
import { Link } from "react-router-dom";
const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};
const Slide = ({products,title,timer}) => {
    const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';
    const renderer = ({ hours, minutes, seconds }) => {
        return <div>{hours}:{minutes}:{seconds}</div>
    };
    return (
        <div className="mt-3 bg-white">
            <div className="flex items-center py-4 px-5">
                <h4 className="text-xl font-semibold pr-6 leading-8">{title}</h4>
                {timer &&
                    <div className="flex justify-center items-center pl-2 text-[#7f7f7f]">
                    <img src={timerURL} alt="time" className="w-6 pr-1"/>
                    <Countdown date={Date.now() + 5.04e7} renderer={renderer}/>
                </div>
                
                }
                <button className="bg-[#2874f0] hover:bg-blue-400 text-white py-2 px-4 text-sm rounded-sm ml-auto">View all</button>
            </div>
            <Divider />
            <Carousel responsive={responsive}
        infinite={true}  
        swipeable={true} 
        draggable={false}
        keyBoardControl={true}
        autoPlaySpeed={4000}
        autoPlay={true}
        centerMode={true}
        containerClass="carousel-container"
        itemClass="carousel-item-padding-40-px"
        dotListClass="custom-dot-list-style"
        >
            {
                products.map((product, index) => (
                    <Link to={`product/${product.id}`}>
                        <div key={index} className="flex flex-col justify-center align-middle text-center py-6 px-4 ">
                        <div className="flex justify-center align-middle w-auto h-48 text-center cursor-pointer hover:scale-105 ease-in ">
                        <img src={product.url} alt={product.name} className="w-auto h-full" />
                        </div>
                        <p className="text-base cursor-pointer pt-2 font-semibold text-[#212121]">{product.title.shortTitle}</p>
                        <p className="text-sm pt-2 font-normal text-green-500">{product.discount}</p>
                        <p className="text-sm pt-2 font-normal text-[#7f7f7f]">{product.tagline}</p>
                    </div>
                    </Link>
                ))
            }
        </Carousel>
        </div>
    )
}

export default Slide