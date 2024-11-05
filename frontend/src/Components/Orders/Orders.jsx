import { useSelector } from "react-redux"
import OrderDetails from "./OrderDetails"
import EmptyOrders from "./EmptyOrders"

const Orders = () => {
    const { orderItems } = useSelector(state => state.orders)
    return (
        <div>
            {
                <div className="min-h-screen flex  justify-center lg:mx-14 md:mx-0 ">
                    {orderItems.length ? (
                        <div className="container mx-auto p-[2rem] ">
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 ">
                                <div className="md:col-span-3 border border-[#f0f0f0] pb-4 bg-white">
                                    <div>
                                        <h3 className="text-lg font-semibold py-4 px-6">My orders ({orderItems.length})</h3>
                                    </div>
                                    {orderItems.map(item => (
                                        <OrderDetails item={item} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <EmptyOrders />
                        </div>
                    )}
                </div>
            }
        </div>
    )
}

export default Orders
