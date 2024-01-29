import axios from "axios";
import { FaCheckCircle } from "react-icons/fa";
import Swal from "sweetalert2";

const ManageOrderCard = ({payment,refetch}) => {
    const {name,productNames,image,status,paymentMethod,amount,time,email,_id} = payment;
    const product = productNames.flatMap(product => product) 
   console.log(product)

    const handleApprove = (id)=> {

      axios.patch(`http://localhost:5000/approveOrder?id=${id}`)
      .then(res => {
        console.log(res.data)
        if(res.data.modifiedCount){
          refetch();
          Swal.fire(
            "Success !!",
            `The order is approved successfully`,
            "success"
          );
          const customerPaymentData = {name:name,productNames:productNames,image:image,status:res.data.modifiedCount? 'approved':'pending', paymentMethod:paymentMethod,amount:amount,time:time,email:email};
          axios.post('http://localhost:5000/customerPayment',customerPaymentData)
          .then(res => {
            console.log(res.data)
          })
    



        }
        
      })
    







    }
    return (
        <div>
            <div  data-aos="zoom-in"
              data-aos-easing="linear"
              data-aos-duration="500" className="hero min-h-screen bg-base-100 shadow-2xl rounded-md font-semibold">
  <div className="hero-content flex-col">
    <img className="object-cover" src={image} />
    <div>
      <h1 className="text-2xl font-bold text-error">{name}</h1>
      <p className="py-3">{email}</p>
      <h1 className="my-2">Time : {time}</h1>
      <h1>amount : <span className="text-error">${amount}</span></h1>
      <h1 className="my-2">Payment Method : {paymentMethod}</h1>
     <div>
      {
        product.map(item => <h1 key={Math.random()}> Product Name : {item}.</h1>)
      }
     </div>
     {status !== 'pending'? <h1 className="flex gap-2 text-success items-center my-3 text-2xl">Status:<FaCheckCircle /> Approved</h1>:
      <button onClick={()=> handleApprove(_id)} className="btn btn-error my-3 hover:ease-in hover:duration-150 hover:scale-105">approve</button>}
    </div>
  </div>
</div>
        </div>
    );
};

export default ManageOrderCard;