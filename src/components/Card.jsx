
const Card = ({ item }) => {
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl rounded-none hover:bg-rose-300 hover:text-white transition duration-1000">
                <figure><img className="w-[360px] h-[200px] pt-2" src={item.image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h3 className="uppercase">{item.brand}</h3>
                    <div className="flex justify-between">
                        <h2 className="card-title">
                            {item.model}
                        </h2>
                        <h3 className="badge badge-secondary py-3">${item.price}</h3>
                    </div>
                    <div className="flex justify-between">
                        <p className="text-sm">RAM: {item.ram}</p>
                        <p className="text-sm">ROM: {item.rom}</p>
                    </div>
                    <p className="capitalize text-sm">release date: {item.releasedDate}</p>
                    <div className="card-actions justify-end gap-4">
                        <button className="badge badge-outline cursor-pointer badge-secondary rounded-md p-4 shadow-lg">View Details</button>
                        <button className="badge badge-outline cursor-pointer badge-secondary rounded-md p-4 shadow-lg">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;