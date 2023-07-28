import { useEffect, useState } from "react";
import { FidgetSpinner } from "react-loader-spinner";

const CustomerOrders = () => {
    const [cusOrter, setCusOrder] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('http://localhost:5000/customerOrder')
            .then(res => res.json())
            .then(data => {
                setCusOrder(data)
                setLoading(false)
            })
    }, [])
    console.log(cusOrter);
    if (loading) {
        return <div className="h-screen flex justify-center items-center">
            <FidgetSpinner
                visible={true}
                height="80"
                width="80"
                ariaLabel="dna-loading"
                wrapperStyle={{}}
                wrapperClass="dna-wrapper"
                ballColors={['#ff0000', '#00ff00', '#0000ff']}
                backgroundColor="#F4442E"
            />
        </div>
    }
    return (
        <div>
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
                            <th>Customer Name & Email</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            cusOrter.map((item, index) => <>
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
                                        {item.customerName ? <>{item.customerName}</> : <><p className="m-0 p-0">Unknown Customer</p></>
                                        }
                                        <br />
                                        <span className="badge badge-ghost text-rose-500 badge-sm">{item.email}</span>
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

export default CustomerOrders;