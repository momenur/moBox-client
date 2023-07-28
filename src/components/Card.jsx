import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import useOrders from "../hooks/useOrders";


const Card = ({ item }) => {
    const { _id, brand, model, image, price, releasedDate, ram, rom, Display, battery, charger, Details } = item;
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const [, refetch] = useOrders();
    const handleAddToCart = (item) => {
        console.log(item);
        if (user && user.email) {
            const orderItem = { productId: _id, brand, model, image, price, releasedDate, ram, rom, Display, battery, charger, Details, email: user.email, customerName: user.displayName }
            fetch('http://localhost:5000/order', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(orderItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch()
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Product Added Successfully',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please Sign In for Order',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Sign In Now!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/login")
                }
            })
        }
    }

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
                        <Link to={`/products/${item._id}`}>
                            <button className="badge badge-outline cursor-pointer badge-secondary rounded-md p-4 shadow-lg">View Details</button>
                        </Link>
                        <button onClick={() => handleAddToCart(item)} className="badge badge-outline cursor-pointer badge-secondary rounded-md p-4 shadow-lg">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;