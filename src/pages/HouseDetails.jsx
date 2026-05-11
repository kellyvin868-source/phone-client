import React, { useContext, useEffect, useState } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { HouseContext } from "../assets/context/HouseContext";
import { toast } from "react-toastify";
import { assests } from "../assets/asset";



const HouseDetails = ({token}) => {
  const[loading,setLoading]=useState(false);
  const[phone,setPhone]=useState('');
  const [address,setAddress]=useState('');
  const[paymentMethod,setPaymentMethod]=useState('');

  const { phones, currency, isLogin,url} = useContext(HouseContext);
  const [form, setForm] = useState(false);
  const[image,setImage]=useState('');
  const { productId } = useParams();
  const [service, setService] = useState("");
  const [allhouses, setAlLHouses] = useState([]);
   const Navigate = useNavigate();
   const[id,setId]=useState('');

     useEffect(()=>{
    const main=allhouses.map((item)=>{
      return item._id;
    });
    setId(main);

   },[allhouses])
  

  

  async function HandlePhoneBooking(e){
    e.preventDefault();
    try {
      setLoading(true);
      const res=await fetch(`${url}/api/book/${id}`,{
        method:'POST',
        headers:{
          "Content-Type":"application/json",
          "authorization":`Bearer ${token}`
        },
        credentials:"include",
        body:JSON.stringify({phone,address,paymentMethod})
      })
      const result=await res.json();
      if(res.ok){
        toast.success(result.message);
        console.log(result);
        setForm(false);
        setTimeout(() => {
          Navigate('/bookings');
        }, 1500);
      }else{
        toast.error(result.message)
      }
      
    } catch (error) {
      console.error(error);
      toast.error(error.message)
      
    }finally{
      setLoading(false);
    }
  }
  function handleWhatsappOrder(item){
    const url="https://wa.me//254114895068"
   const message=`Hello,I'm interested in the purchase of: 
   Phone Name:${item.name},
   Phone Deposit:${item.deposit}
   `
   const enCodedmessage=encodeURIComponent(message);
   window.open(`${url}?text=${enCodedmessage}`);
   
  
  
  }
 
  useEffect(() => {
    setAlLHouses(phones.filter((item) => item._id == productId));
  
  }, [productId]);

  useEffect(()=>{
      setImage(allhouses.map((item)=>{
      return item.image[0]
    }))

  },[allhouses])

  return (
    <div className="sm:mt-20 relative z-0 mt-16 fade py-8">
      <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
        {allhouses.map((item, index) => (
          <div
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full"
            key={index}
          >
            {/* Image Gallery */}
            <div className="flex flex-col lg:flex-row gap-4 lg:col-span-2">
              <div className="flex lg:flex-col gap-2 order-2 lg:order-1">
                {
                  item.image.map((imgItem,imgIndex)=>(
                    <div onClick={()=>setImage(imgItem)} className="p-3 cursor-pointer bg-gray-100 hover:bg-gray-200 shadow rounded-xl w-full lg:w-20 flex items-center justify-center transition-all transform hover:scale-105"  key={imgIndex}>
                    <img className="h-16 object-contain" src={imgItem} alt="thumbnail" />
                    </div>
                  ))
                }
              </div>
              <div className="w-full lg:flex-1 overflow-hidden order-1 lg:order-2 bg-gray-50 rounded-2xl flex items-center justify-center min-h-80">
                <img className="w-full h-full object-contain p-6" src={image} alt="main" />
              </div>
            </div>

            {/* Product Details */}
            <div className="flex flex-col gap-6 bg-white p-6 rounded-2xl shadow-lg">
              <div>
                <h2 className="font-black text-3xl text-gray-900 mb-2">
                  {item.name}
                </h2>
                <p className="text-gray-600 text-base leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="border-t pt-6 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-500 font-semibold text-sm uppercase">Storage</p>
                    <p className="text-gray-900 font-bold text-lg">{item.storage}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 font-semibold text-sm uppercase">Version</p>
                    <p className="text-gray-900 font-bold text-lg">{item.androidversion}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 font-semibold text-sm uppercase">Camera</p>
                    <p className="text-gray-900 font-bold text-lg">{item.camera}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 font-semibold text-sm uppercase">Battery</p>
                    <p className="text-gray-900 font-bold text-lg">{item.battery}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 font-semibold text-sm uppercase">SIM</p>
                    <p className="text-gray-900 font-bold text-lg">{item.sim}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 font-semibold text-sm uppercase">Screen</p>
                    <p className="text-gray-900 font-bold text-lg">{item.screen}</p>
                  </div>
                </div>
              </div>

              {/* Price */}
              <div className="border-t pt-6">
                <p className="text-gray-500 font-semibold text-sm uppercase mb-1">Deposit Price</p>
                <p className="text-4xl font-black text-indigo-600">
                  {currency} {item.deposit}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="border-t pt-6 space-y-3">
                <button
                  onClick={()=>setForm(true)}
                  className="w-full bg-linear-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white px-6 py-4 rounded-xl border-none outline-none font-bold text-lg cursor-pointer transition-all hover:shadow-lg transform hover:scale-105"
                >
                 Book This Phone
                </button>
                <div onClick={()=>handleWhatsappOrder(item)} className="w-full bg-linear-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-4 rounded-xl flex items-center justify-center gap-2 cursor-pointer transition-all hover:shadow-lg transform hover:scale-105">
                  <img className="w-6 h-6" src={assests.whatsapp} alt="whatsapp" />
                  <span className="font-bold text-lg">Order Via WhatsApp</span>
                </div>
              </div>
            </div>

            {/* Order Modal */}
            {form && (
              <div className="fixed bg-black/70 overflow-hidden inset-0 z-50 rounded-lg flex items-center justify-center p-4">
                <div className="bg-white fade relative w-full sm:w-96 rounded-2xl p-8 shadow-2xl max-h-screen overflow-y-auto">
                  <p
                    onClick={() => setForm(false)}
                    className="text-4xl absolute top-2 right-4 cursor-pointer hover:text-red-500 transition-colors font-bold"
                  >
                    &times;
                  </p>
                  <h3 className="text-2xl font-black text-gray-900 mb-6">Complete Your Order</h3>
                  <form onSubmit={HandlePhoneBooking} className="flex flex-col gap-5">
                    <div>
                      <label className="font-bold text-base text-gray-700 block mb-2">Phone Number *</label>
                      <input onChange={(e)=>setPhone(e.target.value)}
                        className="w-full py-3 px-4 rounded-xl border-2 border-gray-300 outline-none focus:border-indigo-600 text-base font-semibold transition-colors"
                        type="tel"
                        min={0}
                        placeholder="+254712345678"
                        required
                      />
                    </div>
                   
                    <div>
                      <label className="font-bold text-base text-gray-700 block mb-2">Phone Model</label>
                      <input
                        className="w-full py-3 px-4 rounded-xl border-2 border-gray-300 outline-none focus:border-indigo-600 text-base font-semibold transition-colors bg-gray-100"
                        type="text"
                        value={item.name}
                        disabled
                      />
                    </div>
                    <div>
                      <label htmlFor="add">Address:</label>
                      <textarea onChange={(e)=>setAddress(e.target.value)} className="w-full py-3 px-4 rounded-xl border-2 border-gray-300 outline-none focus:border-indigo-600 text-base font-semibold transition-colors bg-gray-100" rows={4} id="add"></textarea>
                    </div>
                    <div>
                      <label className="font-bold text-base text-gray-700 block mb-2">Payment Method *</label>
                      <select onChange={(e)=>setPaymentMethod(e.target.value)}
                        className="w-full py-3 px-4 rounded-xl border-2 border-gray-300 outline-none focus:border-indigo-600 text-base font-semibold transition-colors"
                        required
                      >
                        <option value="">Select Payment Method</option>
                        <option value="mpesa">Lipa Na M-Pesa</option>
                        <option value="cod">Pay On Delivery</option>
                      </select>
                    </div>

                    <button
                      className="w-full bg-linear-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white px-6 py-4 rounded-xl cursor-pointer text-lg font-bold transition-all hover:shadow-lg transform hover:scale-105"
                      type="submit"
                    >
                     {
                      loading?"Processing...":" Complete Booking"
                     }
                    </button>
                  </form>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HouseDetails;
