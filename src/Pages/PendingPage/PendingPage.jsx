
import { CgSandClock } from "react-icons/cg";
import {Link} from "react-router-dom";
import {Helmet} from "react-helmet-async";
const PendingPage = () => {
    return (
        <div>
            <Helmet>
                <title>Meta-ads-shop | order overview</title>
            </Helmet>
            <div className="min-h-screen p-4">
                <h1 className="text-6xl font-bold text-center uppercase my-16"><span className="text-orange-400">thank you </span> for your order</h1>
                <h1 className="lg:text-3xl font-bold flex items-center justify-center lg:gap-3 uppercase ">Payment status : <span className="text-error"><CgSandClock /></span>under review</h1>
                
                <h1 className="font-bold text-lg my-8 text-center">Please wait our team will immediately approved your order</h1>
                <h1 className="text-4xl font-bold text-center my-2">PLEASE</h1>
                <h1 className="text-4xl font-bold text-center link-hover uppercase text-orange-400"><Link to={'/contact'}>Contact with us </Link></h1>
                
            </div>
        </div>
    );
};

export default PendingPage;