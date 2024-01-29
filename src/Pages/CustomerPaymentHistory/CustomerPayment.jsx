import {useQuery} from "@tanstack/react-query";
import axios from "axios";
import {useContext} from "react";
import {Helmet} from "react-helmet-async";
import {FaCheckCircle} from "react-icons/fa";
import {AuthContext} from "../../Providers/AuthProviders";


const CustomerPayment = () => {

    const {user} = useContext(AuthContext)
    const {data:customerPayments = []} = useQuery({
        queryKey: ['loadSpecificCustomerPayment'],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/loadSpecificCustomerPayment?email=${user?.email}`);
            return res.data;
        }  
    });
    return (
        <div>
            <div>
                <Helmet>
                    <title>Meta-ads-shop | History</title>
                </Helmet>
            <div className="overflow-x-auto min-h-screen mt-12" data-aos="zoom-in"
              data-aos-easing="linear"
              data-aos-duration="500">
                <h1 className="text-4xl font-bold text-center my-5 uppercase">Payment <span className="text-error">history</span></h1>
  <table className="table table-xs table-pin-rows table-pin-cols">
    <thead>
      <tr>
        <th></th> 
        <td>Order Time</td> 
        <td>payment Method</td> 
        <td>Amount</td> 
        <td>Status</td> 
        
        <th></th> 
      </tr>
    </thead> 
    <tbody>
     {
        customerPayments.map((customerPayment,index) =>  <tr key={Math.random}>
            <th>{index+1}</th> 
            <td>{customerPayment.time}</td> 
            <td>{customerPayment.paymentMethod}</td> 
            <td>${customerPayment.amount}</td> 
            <td className="flex gap-2 text-success"><FaCheckCircle /> {customerPayment.status}</td> 
          </tr>)
     }
      
    </tbody> 
  </table>
</div>
            </div>
        </div>
    );
};

export default CustomerPayment;