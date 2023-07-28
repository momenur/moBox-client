import useOrders from "../../../hooks/useOrders";

const Order = () => {
    const [order] = useOrders();
    console.log(order);
    return (
        <div className="pt-32 pb-10">
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    SL
                                </label>
                            </th>
                            <th>Photo</th>
                            <th>Brand & Model</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            order.map((item, index) => <>
                                <tr>
                                    <th>
                                        <label>
                                            {index + 1}
                                        </label>
                                    </th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {item.model}
                                        <br />
                                        <span className="badge badge-ghost text-rose-500 badge-sm">{item.brand}</span>
                                    </td>
                                    <td className="font-semibold">${item.price}</td>
                                    <th>
                                        <button className="btn bg-transparent text-red-500 text-2xl">X</button>
                                    </th>
                                </tr>
                            </>)
                        }
                    </tbody>
                    {/* foot */}


                </table>
            </div>
        </div>
    );
};

export default Order;