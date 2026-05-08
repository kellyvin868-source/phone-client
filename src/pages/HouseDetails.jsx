import React, { useContext, useEffect, useState } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { HouseContext } from "../assets/context/HouseContext";
import { toast } from "react-toastify";
import { assests } from "../assets/asset";

const HouseDetails = () => {
  const { phones, currency, isLogin} = useContext(HouseContext);
  const [form, setForm] = useState(false);
  const { id } = useParams();
  const [service, setService] = useState("");
  const [allhouses, setAlLHouses] = useState([]);
  function handleWhatsappOrder(item){
    const url="https://wa.me//254114895068"
   const message=`Hello,I'm intersted in the purchase of: 
   Phone Name:${item.name},
   Phone Deposit:${item.deposit}
   `
   const enCodedmessage=encodeURIComponent(message);
   window.open(`${url}?text=${enCodedmessage}`);
   
  
  
  }
  const Navigate = useNavigate();
  useEffect(() => {
    setAlLHouses(phones.filter((item) => item._id == id));
  }, [id]);
  console.log(service);

  return (
    <div className="sm:mt-20 relative z-0  mt-15 fade">
      <div className="flex flex-col sm:flex-row gap-5">
        {allhouses.map((item, index) => (
          <div
            className="grid grid-cols-1 sm:grid-cols-2 gap-5 space-x-6 "
            key={index}
          >
            <div className="w-full overflow-hidden">
              <img className="w-full sm:w-full" src={item.image} alt="" />
            </div>
            <div className="flex flex-col gap-1 text-gray-800">
              <h2 className="font-semibold capitalize text-xl">
                Name: {item.name}
              </h2>
              <h4 className="text-sm font-semibold capitalize">
                Description: {item.desc}
              </h4>
              <p className="text-sm font-semibold italic">
                Version: {item.androidversion}
              </p>
              <p  className="mt-2 text-sm capitalize font-semibold">Storage:{item.storage}</p>
              <p  className="mt-2 text-sm capitalize font-semibold">Camera:{item.camera}</p>
              <p  className="mt-2 text-sm capitalize font-semibold">Battery:{item.battery}</p>
              <p  className="mt-2 text-sm font-semibold capitalize">Sim:{item.sim}</p>
              <p className="mt-2 text-xl font-semibold">
                Deposit: {currency} {item.deposit}
              </p>
              <div>
                <button
                  onClick={() => setForm(true)}
                  className="bg-gray-700 active:bg-green-600 text-white px-4 py-2 rounded-lg border-none outline-none font-semibold text-xl cursor-pointer mt-5"
                >
                  Order Now?
                </button>
                <div onClick={()=>handleWhatsappOrder(item)} className="flex mt-3 items-center  cursor-pointer">
                  <img className="w-10" src={assests.whatsapp} alt="" />
                  <span className="capitalize text-sm text-gray-800">Order Via whatsapp</span>
                </div>
              </div>
            </div>

            {form && (
              <div className=" bg-opacity-50 absolute bg-black/80 overflow-hidden min-h-screen w-full z-50 rounded-lg inset-0 flex items-center justify-center ">
                <div className="bg-white fade  relative sm:w-md w-[95%] m-auto rounded-lg p-10 shadow-lg">
                  <p
                    onClick={() => setForm(false)}
                    className="text-4xl absolute top-1 right-3 cursor-pointer hover:-translate-y-2 transition-all"
                  >
                    &times;
                  </p>
                  <form className="flex flex-col gap-2" action="">
                    <div>
                      <label className="font-semibold text-xl" htmlFor="Name">
                        Name:
                      </label>
                      <input
                        className="w-full py-2 px-3 rounded-lg border border-gray-700 outline-none focus:border-orange-600"
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label className="font-semibold text-xl" htmlFor="phone">
                        Tel:
                      </label>
                      <input
                        className="w-full py-2 px-3 rounded-lg border border-gray-700 outline-none focus:border-orange-600"
                        type="number"
                        min={0}
                        placeholder="+254115477"
                        required
                      />
                    </div>
                    <div>
                      <label className="font-semibold text-xl" htmlFor="email">
                        Email:
                      </label>
                      <input
                        className="w-full py-2 px-3 rounded-lg border border-gray-700 outline-none focus:border-orange-600"
                        type="email"
                        id="email"
                        required
                        name="email"
                        placeholder="Email Id"
                      />
                    </div>
                    <div>
                      <label className="font-semibold text-xl" htmlFor="serv">
                        Service:
                      </label>
                      <input
                        className="w-full py-2 px-3 rounded-lg border border-gray-700 outline-none focus:border-orange-600"
                        type="text"
                        value={item.name}
                        onChange={(e) => setService(e.target.value)}
                      />
                    </div>
                    <div>
                      <label htmlFor="time">Time:</label>
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold">Payment Method</h4>
                      <select
                        className="w-full py-2 px-3 rounded-lg border border-gray-700 outline-none focus:border-orange-600"
                        name=""
                        id=""
                      >
                        <option value="">Choose Payment Method</option>
                        <option value="mpesa">Lipa Na Mpesa</option>
                        <option value="pod">Pay On Delivery</option>
                      </select>
                    </div>

                    <button
                      className="w-full bg-blue-700 px-3 py-2 rounded-lg cursor-pointer text-xl font-semibold text-white transition-all hover:bg-blue-500"
                      type="submit"
                    >
                      Submit
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
