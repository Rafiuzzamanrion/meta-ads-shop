import axios from "axios";
import UseProducts from "../../../Hooks/UseProducts";
import {useQuery} from "@tanstack/react-query";

const AdminHome = () => {

    const [products] = UseProducts();
    const {data:users = []} = useQuery({
        queryKey: ['allUsers'],
        queryFn: async () => {
            const res = await axios.get('http://localhost:5000/allUsers');
            return res.data;
        }  
    });
    return (
        <div>
            <div className="grid grid-cols-2">
               <div>
               <div className="w-72 h-56 bg-red-200 uppercase text-xl font-bold flex items-center justify-center ps-2">total sold : $2000</div>
               </div>
                <div className="w-72 h-56 bg-green-200 uppercase text-xl font-bold flex items-center justify-center ps-2">total customer : {users.length}</div>
                <div className="w-72 h-56 bg-teal-200 uppercase text-xl font-bold flex items-center justify-center ps-2">total products : {products.length}</div>
                <div className="w-72 h-56 bg-blue-200 uppercase text-xl font-bold flex items-center justify-center ps-2">total sold product :</div>
               
            </div>
        </div>
    );
};

export default AdminHome;