
import { FidgetSpinner } from "react-loader-spinner";
import Title from "../../../components/Title";
import Card from "../../../components/card";
import useProducts from "../../../hooks/useProducts";

const Productrs = () => {
    const [products, loading] = useProducts();
    if(loading){
        return <div className="flex items-center justify-center h-screen">
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
            <Title title="order now" subTitle="check it out"></Title>
            <div className="grid grid-cols-1 gap-4 sm: md:grid-cols-2 lg:grid-cols-3">
                {
                    products.map(item => <Card key={item._id} item={item}></Card>)
                }
            </div>
        </div>
    );
};

export default Productrs;