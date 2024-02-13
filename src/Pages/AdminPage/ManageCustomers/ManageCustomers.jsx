import {useQuery} from "@tanstack/react-query";
import axios from "axios";
import UserCard from "./UserCard";


const ManageCustomers = () => {
    const {data:users = [],refetch} = useQuery({
        queryKey: ['allUsers'],
        queryFn: async () => {
            const res = await axios.get('https://facebook-ads-house-server.vercel.app/allUsers');
            return res.data;
        }  
    });



    return (
        <div>
            <h1 className="text-center text-4xl font-semibold my-7 uppercase">All <span className="text-error">Users</span></h1>
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 w-full">
           {
                users.map(user => <UserCard key={user._id} user = {user} refetch = {refetch} ></UserCard>)
            }
           </div>
        </div>
    );
};

export default ManageCustomers;