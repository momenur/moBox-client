import { useParams } from "react-router-dom";
import useProducts from "../../hooks/useProducts";
import { FidgetSpinner } from "react-loader-spinner";


const Details = () => {
    const productId = useParams()
    const [products] = useProducts();
    const product = products.find(item => item._id === productId.id)
    if (product === undefined) {
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
    const { brand, model, image, price, releasedDate, ram, rom, Display, battery, charger, color, frontCamera, backCamera, processor, body, warranty, rating, Details } = product
    console.log(product);
    return (
        <div className=" w-[55%] mx-auto">
            <div className="flex justify-center pt-32">
                <img className="border-2 border-rose-500 rounded-md" src={image} alt="" />
            </div>
            <div className="flex gap-6 flex-col pt-10 border-b-4">
                <div>
                    <h1 className="text-lg font-semibold">Brand Name: {brand}</h1>
                    <h3 className="text-4xl">Model: {model}</h3>
                </div>

                <div className="pb-4">
                    <p className="text-sm">Released Date: {releasedDate}</p>
                    <p className="text-rose-500">Price: {price}</p>
                </div>
            </div>
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="uppercase text-2xl font-semibold text-rose-500 py-6">Memory</h2>
                    <p>RAM: {ram}</p>
                    <p>ROM: {rom}</p>
                    <h2 className="uppercase text-2xl font-semibold text-rose-500 py-6">battery</h2>
                    <p>Battery: {battery}</p>
                    <p>charger: {charger}</p>
                    <h2 className="uppercase text-2xl font-semibold text-rose-500 py-6">camera</h2>
                    <p>Front Camera: {frontCamera}</p>
                    <p>Back Camera: {backCamera}</p>
                </div>

                <div>
                    <h2 className="uppercase text-2xl font-semibold text-rose-500 py-6">body</h2>
                    <p>Body: {body}</p>
                    <p>color: {color}</p>
                    <p>Display: {Display}</p>
                    <h2 className="uppercase text-2xl font-semibold text-rose-500 py-6">performance</h2>
                    <p>Processor: {processor}</p>
                    <h2 className="uppercase text-2xl font-semibold text-rose-500 py-6">other</h2>
                    <p>Warranty: {warranty}</p>
                    <p>Rating: {rating}</p>
                </div>
            </div>
            <p className="my-10 font-semibold">Details: {Details}</p>

        </div>
    );
};

export default Details;