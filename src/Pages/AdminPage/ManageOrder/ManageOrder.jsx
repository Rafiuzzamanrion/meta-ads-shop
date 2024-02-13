import {useQuery} from "@tanstack/react-query";
import axios from "axios";
import ManageOrderCard from "./ManageOrderCard";






const ManageOrder = () => {
    const {data:payments = [],refetch} = useQuery({
        queryKey:['paymentData'],
        queryFn:async()=>{
            const res = await axios.get('https://facebook-ads-house-server.vercel.app/paymentData');
            return res.data;
        }
    })
    return (
        <div>


            <div className="grid grid-cols-1 gap-5 my-6">
                {
                    payments.map(payment => <ManageOrderCard key={payment._id} payment={payment} refetch={refetch}></ManageOrderCard>)
                }
            </div>
           
           
        </div>
    );
};

export default ManageOrder;