import UseProducts from "../../../Hooks/UseProducts";
import ManageProductCard from "./ManageProductCard";


const ManageProduct = () => {
    const [products,refetch] = UseProducts();
    return (
        <div className="ps-4">
            <h1 className="text-4xl text-error font-bold text-center my-8 uppercase">Manage <span className="text-black">Products</span></h1>
            <div className="grid grid-cols-1 gap-5">
                {
                    products.map(product => <ManageProductCard key={product._id} product={product} refetch={refetch}></ManageProductCard>)
                }
            </div>
        </div>
    );
};

export default ManageProduct;