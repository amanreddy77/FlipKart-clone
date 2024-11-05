import Slide from "./Slide"


const AddSlide = ({products={products},title,timer }) => {
    const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';
    return (
        <div className="flex">
            <div className="w-full lg:w-5/6 md:w-auto">
                <Slide 
                    products={products} 
                    title={title} 
                    timer={timer}
                />
            </div>
            <div className="hidden lg:flex justify-center items-center lg:bg-white p-2 mt-3 ml-3 w-[17%] ">
                <img src={adURL} alt="ad" className="w-60"/>
            </div>
        </div>
    )
}

export default AddSlide