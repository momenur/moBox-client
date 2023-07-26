
const Card = ({ item }) => {
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl rounded-none">
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
                        <div className="badge badge-outline cursor-pointer badge-secondary rounded-md p-4">View Details</div>
                        <div className="badge badge-outline cursor-pointer badge-secondary rounded-md p-4">Add to Cart</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;