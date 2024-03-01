import axios from "axios";
import UseProducts from "../../../Hooks/UseProducts";
import {useQuery} from "@tanstack/react-query";

const AdminHome = () => {

    const [products] = UseProducts();
    const {data:users = []} = useQuery({
        queryKey: ['allUsers'],
        queryFn: async () => {
            const res = await axios.get('https://facebook-ads-house-server.vercel.app/allUsers');
            return res.data;
        }  
    });


    const {data:customerPayments = []} = useQuery({
        queryKey: ['loadCustomerPayment'],
        queryFn: async () => {
            const res = await axios.get('https://facebook-ads-house-server.vercel.app/loadCustomerPayment');
            return res.data;
        }  
    });

    const totalSold = customerPayments?.reduce((sum,item)=> item.amount + sum,0);

    return (
        <div>
            <div className="grid md:grid-cols-2 gap-4">
               <div>
               <div className="w-72 h-56 bg-red-200 uppercase text-xl font-bold flex items-center justify-center ps-2 rounded-md">total sold : ${totalSold}</div>
               </div>
                <div className="w-72 h-56 bg-green-200 uppercase text-xl font-bold flex items-center justify-center ps-2 rounded-md">total customer : {users.length}</div>
                <div className="w-72 h-56 bg-teal-200 uppercase text-xl font-bold flex items-center justify-center ps-2 rounded-md">total products : {products.length}</div>
                <div className="w-72 h-56 bg-blue-200 uppercase text-xl font-bold flex items-center justify-center ps-2 rounded-md">total order sold : {customerPayments.length}</div>
               
            </div>
        </div>
    );
};

export default AdminHome;