import { createContext, useEffect, useState } from "react";

export const HouseContext = createContext();
import { allphones } from "../asset";
import { Loader } from "lucide-react";
import { toast } from "react-toastify";

const GlobalContext = ({ children }) => {
  const url = import.meta.env.VITE_BACKEND_URL;
  const currency = "Ksh";
  const [isLogin, setIsLogin] = useState(false);
  const [loader, setLoader] = useState(false);
  const [phones, setPhones] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [userData, setUserData] = useState({});

 // useEffect(()=>{
   // setPhones(allphones);

 // },[])

  const fetchAllPhones = async () => {
   let result;
    try {
      setLoader(true);
    const res = await fetch(`${url}/api/product/get`, {
       method: "GET",
       credentials: "include",
      });

      result = await res.json();
    if (res.ok) {
      setPhones(result.data);
      } else {
       toast.error("Something went wrong,,please try again later");
     }
   } catch (error) {
     console.log(error);
   } finally {
     setLoader(false);
    }
 };

 useEffect(() => {
    fetchAllPhones();
  }, [url]);
  const value = {
    phones,
    currency,
    isLogin,
    setIsLogin,
    url,
    setIsLogin,
    userData,
    setUserData,
    setLoader,
  };

  return (
    <HouseContext.Provider value={value}>
      {loader ? (
        <div className="bg-white w-full flex-col min-h-screen flex items-center justify-center">
          <Loader className="w-5 animate-spin" />
          <div>
            <h2 className="text-2xl animate-pulse font-semibold">Loading..</h2>
          </div>
        </div>
      ) : (
        children
      )}
    </HouseContext.Provider>
  );
};

export default GlobalContext;
