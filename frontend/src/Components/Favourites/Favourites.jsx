import { useSelector } from "react-redux";
import FavoriteItem from "./FavoriteItem"; // You need to create this component
import EmptyFavorites from "./EmptyFavorites"; // You need to create this component

const Favorites = () => {
    const { favouritesItems } = useSelector(state => state.favourites);
    return (
        <div className="min-h-screen flex justify-center lg:mx-14 md:mx-0">
            {
                favouritesItems.length > 0 ? (
                    <div className="container mx-auto p-[2rem] ">
                        <div className="grid grid-cols-1 md:grid-cols-1 gap-8 ">
                            <div className="md:col-span-3 border border-[#f0f0f0] pb-4 bg-gray-100 px-4 ">
                                <div>
                                    <h3 className="text-lg font-semibold py-4 px-6">My Favourites ({favouritesItems.length})</h3>
                                </div>
                                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                    {favouritesItems.map(item => (
                                        <FavoriteItem item={item} />
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>
                ) :
                    (
                        <div>
                            <EmptyFavorites />
                        </div>
                    )
            }
        </div>
    );
};

export default Favorites;
