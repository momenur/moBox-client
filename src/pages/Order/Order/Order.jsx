import Swal from "sweetalert2";
import useOrders from "../../../hooks/useOrders";

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
                fetch(`http://localhost:5000/order/${item._id}`, {
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
        <div className="pt-32 pb-10">
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
                                        <button onClick={()=> handleDelete(item)} className="btn bg-transparent text-red-500 text-2xl">X</button>
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