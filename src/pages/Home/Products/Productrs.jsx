import { useEffect, useState } from "react";
import Card from "../../../components/card";

const Productrs = () => {
    const [products, setProducts] = useState([]);
    useEffect( () => {
        fetch('phone.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div className="grid sm: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                products.map(item => <Card key={item._id} item={item}></Card>)
            }
        </div>
    );
};

export default Productrs;