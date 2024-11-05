

const EmptyCart = () => {
    const imgurl = 'https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90';
    return (
        <div className="h-[70vh] w-auto mt-20 bg-white flex justify-center items-center ">
            <div className="text-center py-5 ">
                <img src={imgurl} alt="emptyCart" className="w-[35%] flex m-auto"/>
                <p>Your Cart is Empty</p>
                <p>Add Items to it.</p>
            </div>
        </div>
    )
}

export default EmptyCart