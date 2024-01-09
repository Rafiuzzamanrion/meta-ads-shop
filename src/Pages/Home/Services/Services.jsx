import {Helmet} from "react-helmet-async";
import UseProducts from "../../../Hooks/UseProducts";
import Card from "./Card";



const Services = () => {
    const [products,refetch] = UseProducts();
    return (
        <div className="my-16 flex flex-col justify-center items-center">
            <Helmet>
                <title>Meta-Ads-Shop | Services </title>
            </Helmet>
            <h1 className="text-4xl font-bold text-center text-error uppercase">our <span className="text-black">services</span></h1>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
                {
                  products.map(product => <Card key={product._id} product={product} refetch={refetch}></Card>)
                }
            </div>
            
        </div>
    );
};

export default Services;