
import Card from "../../../components/card";
import useProducts from "../../../hooks/useProducts";

const Productrs = () => {
    const [products] = useProducts();
    return (
        <div className="grid sm: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                products.map(item => <Card key={item._id} item={item}></Card>)
            }
        </div>
    );
};

export default Productrs;