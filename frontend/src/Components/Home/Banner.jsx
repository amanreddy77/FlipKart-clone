import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import { bannerData } from "../Constants/data";
import { styled } from '@mui/system';
const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};
const Image = styled('img')(({ theme }) => ({
    width: '100%',
    height: '280px',
    objectFit: 'cover',
    borderRadius: '10px',
    [theme.breakpoints.down('md')]: {
        objectFit: 'cover',
        height: '180px',
    }
}));
const Banner = () => {
    return (
            <Carousel responsive={responsive} dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px" containerClass="carousel-container" keyBoardControl={true} autoPlaySpeed={2000} autoPlay={true}  infinite={true}  swipeable={false} draggable={false}>
            {
                bannerData.map((item, index) => (
                    <div key={index}>
                        <Image src={item.url} alt={item.title} />
                    </div>
                ))
            }
        </Carousel>
    )
}

export default Banner