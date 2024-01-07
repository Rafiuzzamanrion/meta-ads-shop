import {useQuery} from "@tanstack/react-query";
import axios from "axios";


const UseProducts = () => {

    const {data: products =[],refetch} = useQuery({
        queryKey:['products'],
        queryFn: async()=>{
            const res = await axios.get('http://localhost:5000/products');
            return res.data;
        }
    })
   return [products,refetch]
}
export default UseProducts;