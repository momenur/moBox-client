import Swal from "sweetalert2";
import useOrders from "../../../hooks/useOrders";
import Title from "../../../components/Title";
import { FaTrash } from 'react-icons/fa';
const Order = () => {
    const [order, refetch] = useOrders();
    const handleDelete = item => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            
            if (result.isConfirmed) {
                fetch(`https://mobox-server-momenurislam6-gmailcom.vercel.app/order/${item._id}`, {
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then (data => {
                    if (data.deletedCount > 0){
                        refetch()
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                          ) 
                    }
                })
            }
          })
    }
    return (
        <div className="py-10">
            <Title title="Your orders" subTitle="please check it"></Title>
            <div className="overflow-x-auto">
                <table className="table">
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
                                                <div className="w-12 h-12 mask mask-squircle">
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
                                        <button onClick={()=> handleDelete(item)} className="text-2xl text-red-500 bg-transparent btn"><FaTrash/></button>
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