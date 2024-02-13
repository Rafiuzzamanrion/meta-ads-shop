import {useContext} from "react";

import {useQuery} from "@tanstack/react-query";
import axios from "axios";
import {AuthContext} from "../Providers/AuthProviders";


const UseAdmin = () => {
   
    const {user,loading} = useContext(AuthContext);
    const {data:admin,isLoading:isAdminLoading} = useQuery({
        queryKey:['isAdmin',user?.email],
        enabled:!loading ,
        queryFn: async ()=> {
            const res = await axios.get(`https://facebook-ads-house-server.vercel.app/isAdmin?email=${user?.email}`);
            return res.data;
        }
    })
return [admin,isAdminLoading]
}; 

export default UseAdmin;