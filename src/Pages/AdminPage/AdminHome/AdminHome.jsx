
const AdminHome = () => {
    return (
        <div>
            <div className="grid grid-cols-2">
               <div>
               <div className="w-96 h-64 bg-red-200 uppercase text-2xl font-bold flex items-center justify-center">total sold (amount) :</div>
               </div>
                <div className="w-96 h-64 bg-green-200 uppercase text-2xl font-bold flex items-center justify-center">total customer :</div>
                <div className="w-96 h-64 bg-teal-200 uppercase text-2xl font-bold flex items-center justify-center">total product :</div>
                <div className="w-96 h-64 bg-blue-200 uppercase text-2xl font-bold flex items-center justify-center">total sold product :</div>
               
            </div>
        </div>
    );
};

export default AdminHome;