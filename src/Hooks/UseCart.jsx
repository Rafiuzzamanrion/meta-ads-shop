

import {useQuery} from "@tanstack/react-query";
import axios from "axios";
import {useContext} from "react";
import {AuthContext} from "../Providers/AuthProviders";


const UseCart = () => {
   
    const {user,loading} = useContext(AuthContext);
    const {data:carts = [],refetch} = useQuery({
        enabled:!loading,
        queryKey:['carts',user?.email],
        queryFn: async ()=> {
            const res = await axios.get(`https://facebook-ads-house-server.vercel.app/carts?email=${user?.email}`);
            return res.data;
        }
    });
    return [carts,refetch]
};

export default UseCart;