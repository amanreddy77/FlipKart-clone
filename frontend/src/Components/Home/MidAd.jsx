
import { imageURL } from "../Constants/data"


const MidAd = () => {
    const url = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';
    return (
        <>
            <div className="grid my-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
            {
                imageURL.map((url, index) => (
                    <div key={index}>
                        <img src={url} alt="ad" className="w-full" />
                    </div>
                ))
            }
            </div>
            <div>
                <img src={url} alt="donate" />
            </div>
        </>
    )
}

export default MidAd