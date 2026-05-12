import React, { useContext, useEffect, useState } from 'react'
import { HouseContext } from '../assets/context/HouseContext'
import { toast } from 'react-toastify';
import{DeleteIcon, SendHorizontalIcon} from 'lucide-react'



const Bookings = ({token}) => {

  const[loading,setLoading]=useState(false);
   const {url}=useContext(HouseContext);
   const [bookingData,setBookingData]=useState([]);
 
   useEffect(()=>{
    fetchBookings();

   },[])

  async function fetchBookings(){
    try {
      setLoading(true);
      const res=await fetch(`${url}/api/get-bookings`,{
        method:'GET',
        headers:{
          "authorization":`Bearer ${token}`
        },
        credentials:"include"
      })
      const result=await res.json();
      if(res.ok){
        setBookingData(result.bookings);
      }else{
        console.log(result.message);
      }
      
    } catch (error) {
      console.log(error);
      toast.error(error.message);
      
    }finally{
      setLoading(false)
    }
  }

  async function deleteBooking(id){
    try {
     
      const res=await fetch(`${url}/api/delete-bookings/${id}`,{
        method:'DELETE',
        headers:{
          "authorization":`Bearer ${token}`
        },
        credentials:"include"
      })
      const result=await res.json();
      if(res.ok){
        toast.info(result.message);
        await fetchBookings();
      }else{
        toast.error(result.message);
      }
      
    } catch (error) {
      console.log(error);
      toast.error(error.message);
      
    }
  }

  loading && <div className='w-full min-h-screen flex items-center justify-center'>
    <h2 className='w-5 h-5 bg-gray-900 rounded-full border border-b-green-500'></h2>
    <p>Fetching...</p>

  </div>
 
  
  return bookingData.length>0?(
    <div className='mt-10 min-h-screen fade w-full'>
      <div>
        <h2 className='font-semibold text-2xl'>Your Bookings</h2>

      </div>

      <div className='w-full grid grid-cols-1 sm:grid-cols-2 gap-4 gap-y-7 space-y-6'>
        <div className='border-t'>
          {
            bookingData.map((item,index)=>(
              <div className='flex items-center gap-7  border-b' key={index}>
                <div className='overflow-hidden flex flex-col gap-2 items-start w-full'>
                  <img className=' h-30 object-contain' src={item.product.image[0]} alt="" />
                  <p>{item.product.name}</p>
                  <h2 className='text-2xl text-blue-800 font-bold'>Deposit: Ksh {item.product.deposit}</h2>
                </div>
              
                <div>
                  <p className='text-sm font-semibold text-blue-900'>Status:Pending</p>
                </div>
                <div>
                  
                </div>
                  <div>
                <DeleteIcon onClick={()=>deleteBooking(item._id)}  className='w-6 ml-5 text-red-600 cursor-pointer transition-all hover:-translate-y-2'/>
                </div>
                <div>
                  

                </div>
              </div>

            ))
          }
          

        </div>
        <div  className='ml-6 flex flex-col items-start'>
          <div>
            <h2>Booking Info</h2>
          </div>
          <div>

          </div>


        </div>

      </div>
      
      
    </div>

  ):(
    <div  className='w-full opacity-0 text-2xl text-center mt-30'>
      <h2 className='text-2xl font-semibold'>No booking at the moment,please make some bookings</h2>

    </div>
  )
}

export default Bookings
