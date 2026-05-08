import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { HouseContext } from "../assets/context/HouseContext";
import { assests } from "../assets/asset";
import { PlusIcon, Phone, Book } from "lucide-react";

const Admin = () => {
  const { url, phones, currency,loader,setLoader, fetchAllPhones } = useContext(HouseContext);
  const [state, setState] = useState("dash");
  const [toggle, setToggle] = useState(false);
  const [allPhones, setAllPhones] = useState([]);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [deposit, setDeposit] = useState("");
  const [bestseller, setBestSeller] = useState("");
  const [camera, setCamera] = useState("");
  const [storage, setStorage] = useState("");
  const [battery, setBattery] = useState("");
  const [androidversion, setAndroidVersion] = useState("");
  const [sim, setSim] = useState("");
  const [screen, setScreen] = useState("");
  const [file, setFile] = useState("");

 async function handlePhoneProductSubmition(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("desc", desc);
    formData.append("deposit", deposit);
    formData.append("camera", camera);
    formData.append("bestseller", bestseller?"true":"false");
    formData.append("storage", storage);
    formData.append("androidversion", androidversion);
    formData.append("sim", sim);
    formData.append("screen", screen);
    formData.append("file", file);
    formData.append("battery",battery);

    try {
        setLoader(true);
        let result;
        const res=await fetch(`${url}/api/product/add`,{
            method:'POST',
            body:formData,
            credentials:"include"

        })
        result=await res.json();
        if(res.ok){
            toast.success(result.message);
            await fetchAllPhones();
        }else{
            console.error(result.message);
        }
        
    } catch (error) {
        console.error(error);
        toast.error("Something went wrong,please try agin later!")
        
    }finally{
        setLoader(false);
    }
  }
  useEffect(() => {
    setAllPhones(phones);
  }, []);
  console.log(phones);

  async function deletePhone(id){
    if(!confirm("Are you sure you want to delete this phone?")){
        return;
    }
    let result;
    try {
        const res=await fetch(`${url}/api/product/delete/${id}`,{
            method:'DELETE',
            credentials:"include"
        })
        result=await res.json();
        if(res.ok){
            toast.success(result.message);
            await fetchAllPhones();
        }else{
            toast.error("Failed to delete")
        }

        
    } catch (error) {
        console.log(error);
        toast.error("Failed to delete phone")
        
    }
  }
  const Navigate = useNavigate();
  const token = localStorage.getItem("token");
  if (!token) {
    toast.error("Only admins are allowed access to this page");
    setTimeout(() => {
      Navigate("/");
    }, timeout);
  }

  useEffect(() => {
    getAdminRole();
  }, [token]);

  async function getAdminRole() {
    try {
      const res = await fetch(`${url}/api/auth/admin`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        credentials: "include",
      });
      const result = await res.json();
      if (res.ok) {
        toast.success(result.message);
      } else {
        toast.error(result.message);
        setTimeout(() => {}, 1000);
      }
    } catch (error) {
      console.error(error);
      toast.error("Session expired,please login");
      setTimeout(() => {}, 2000);
    }
  }
  return (
    <div className="w-full min-h-screen relative">
      <div
        onClick={() => setToggle(!toggle)}
        className="absolute sm:hidden -top-7 flex flex-col gap-1 left-3"
      >
        <span className="w-5 h-1 bg-black"></span>
        <span className="w-5 h-1 bg-black"></span>
        <span className="w-5 h-1 bg-black"></span>
      </div>
      <div
        className={`top-0 bottom-0 transition-all absolute overflow-hidden right-0 bg-white z-20 ${toggle ? "w-full" : "w-0"}`}
      >
        <div className="flex flex-col gap-3 items-center">
          <span
            onClick={() => {
              (setState("dash"), setToggle(false));
            }}
            className="w-full text-center px-3 py-2 rounded-2xl text-2xl cursor-pointer bg-black text-white"
          >
            Dashboard
          </span>
          <span
            onClick={() => {
              (setState("add"), setToggle(false));
            }}
            className="w-full text-center px-3 py-2 rounded-2xl text-2xl cursor-pointer bg-black text-white"
          >
            Add
          </span>
          <span
            onClick={() => {
              (setState("phones"), setToggle(false));
            }}
            className="w-full text-center px-3 py-2 rounded-2xl text-2xl cursor-pointer bg-black text-white"
          >
            Phones
          </span>
          <span className="w-full text-center px-3 py-2 rounded-2xl text-2xl cursor-pointer bg-black text-white">
            Bookings
          </span>
        </div>
      </div>
      <div className="mt-10 flex gap-2">
        <div className="sm:w-30 w-0  top-0 left-0 bg-white min-h-screen rounded-lg shadow-lg overflow-auto">
          <div className="flex flex-col p-2 items-center gap-3">
            <div
              onClick={() => setState("dash")}
              className="flex items-center bg-blue-500 w-full transition-all hover:-translate-y-2 px-2 py-1 rounded-lg text-white cursor-pointer gap-1"
            >
              <span className="text-sm font-semibold capitalize">
                Dashboard
              </span>
              <PlusIcon />
            </div>
            <div
              onClick={() => setState("add")}
              className="flex items-center bg-blue-500 w-full transition-all hover:-translate-y-2 px-2 py-1 rounded-lg text-white cursor-pointer gap-1"
            >
              <span className="text-sm font-semibold capitalize">Add</span>
              <PlusIcon />
            </div>

            <div
              onClick={() => setState("phones")}
              className="flex items-center bg-blue-500 w-full transition-all hover:-translate-y-2 px-3 py-1 rounded-lg text-white cursor-pointer gap-1"
            >
              <span className="text-sm font-semibold capitalize">Phones</span>
              <Phone />
            </div>

            <div className="flex items-center bg-blue-500 w-full transition-all hover:-translate-y-2 px-3 py-1 rounded-lg text-white cursor-pointer gap-1">
              <span className="text-sm font-semibold capitalize">Bookings</span>
              <Book />
            </div>

            <div className="flex items-center bg-blue-500 w-full transition-all hover:-translate-y-2 px-3 py-1 rounded-lg text-white cursor-pointer gap-1">
              <span className="text-sm font-semibold capitalize">Phone</span>
              <PlusIcon />
            </div>
          </div>
        </div>
        <div className="flex-1 bg-white p-3 shadow-lg rounded-lg">
          {state === "dash" && (
            <div className="fade">
              <div>
                <h2 className="text-2xl font-semibold">Dashboard</h2>
              </div>
              <div className="w-full grid grid-cols-2 gap-3 sm:grid-cols-3">
                <div className="text-center bg-blue-500 text-white transition-all hover:-translate-y-2 rounded-lg shadow-lg cursor-pointer py-10">
                  <h3>Phones</h3>
                  <span>4</span>
                </div>
                <div className="text-center bg-green-500 text-white transition-all hover:-translate-y-2 rounded-lg shadow-lg cursor-pointer py-10">
                  <h3>Bookings</h3>
                  <span>4</span>
                </div>
                <div className="text-center bg-orange-500 text-white transition-all hover:-translate-y-2 rounded-lg shadow-lg cursor-pointer py-10">
                  <h3>Bestseller</h3>
                  <span>4</span>
                </div>
                <div className="text-center bg-purple-500 text-white transition-all hover:-translate-y-2 rounded-lg shadow-lg cursor-pointer py-10">
                  <h3>Emails</h3>
                  <span>4</span>
                </div>
                <div className="text-center bg-yellow-500 text-white transition-all hover:-translate-y-2 rounded-lg shadow-lg cursor-pointer py-10">
                  <h3>Less</h3>
                  <span>9</span>
                </div>
              </div>
              <div className="mt-4">
                <h4 className="text-white font-semibold">
                  Timothy's Dashboard
                </h4>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis
                  nam sequi pariatur eos, voluptatem magnam ipsam facilis fugit
                  commodi ipsa quas perferendis ut et minima, labore natus,
                  possimus tenetur provident.
                </p>
              </div>
            </div>
          )}

          {state === "add" && (
            <div className="fade">
              <div>
                <h2 className="text-xl font-semibold capitalize">
                  Add New Phone
                </h2>
              </div>
              <div className="flex flex-col items-center mt-10 ">
                <div className="bg-white sm:w-md m-auto w-[98%] sm:p-10 p-3 rounded-lg shadow-lg">
                  <form encType="multipart-formdata"
                    onSubmit={handlePhoneProductSubmition}
                    className="grid grid-cols-1 md:grid-cols-2 gap-2 space-x-6"
                    action=""
                  >
                    <div>
                      <label htmlFor="name">Name:</label>
                      <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full border border-gray-600 py-1 px-3 rounded-lg outline-none mt-1"
                        type="text"
                        required
                        id="name"
                        placeholder="Name of the phone"
                      />
                    </div>
                    <div>
                      <label htmlFor="desc">Description:</label>
                      <input
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                        className="w-full border border-gray-600 py-1 px-3 rounded-lg outline-none mt-1"
                        type="text"
                        id="desc"
                        placeholder="Brief description"
                        required
                      />
                    </div>
                      <div>
                        <label htmlFor="cam">Camera:</label>
                        <input
                          value={camera}
                          onChange={(e) => setCamera(e.target.value)}
                          className="w-full border border-gray-600 py-1 px-3 rounded-lg outline-none mt-1"
                          type="text"
                          id="cam"
                          placeholder="Phones camera"
                          required
                        />
                    
                      <div>
                        <label htmlFor="desc">Screen Size:</label>
                        <input
                          value={screen}
                          onChange={(e) => setScreen(e.target.value)}
                          className="w-full border border-gray-600 py-1 px-3 rounded-lg outline-none mt-1"
                          type="text"
                          id="desc"
                          placeholder="screen size"
                          required
                        />
                      </div>
                    </div>
                   
                      <div>
                        <label htmlFor="st">Storage:</label>
                        <input
                          value={storage}
                          onChange={(e) => setStorage(e.target.value)}
                          className="w-full border border-gray-600 py-1 px-3 rounded-lg outline-none mt-1"
                          type="text"
                          id="st"
                          placeholder="Phone Storage"
                          required
                        />
                     
                      <div>
                        <label htmlFor="bat">Battery:</label>
                        <input
                          value={battery}
                          onChange={(e) => setBattery(e.target.value)}
                          className="w-full border border-gray-600 py-1 px-3 rounded-lg outline-none mt-1"
                          type="text"
                          id="bat"
                          placeholder="Phone battery"
                          required
                        />
                      </div>
                    </div>

                  
                      <div>
                        <label htmlFor="vers">Version:</label>
                        <input
                          value={androidversion}
                          onChange={(e) => setAndroidVersion(e.target.value)}
                          className="w-full border border-gray-600 py-1 px-3 rounded-lg outline-none mt-1"
                          type="text"
                          id="vers"
                          placeholder="Phone Version"
                          required
                        />
                  
                      <div>
                        <label htmlFor="desc">Dual/Single Sim:</label>
                        <input
                          value={sim}
                          onChange={(e) => setSim(e.target.value)}
                          className="w-full border border-gray-600 py-1 px-3 rounded-lg outline-none mt-1"
                          type="text"
                          id="desc"
                          placeholder="SIM"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="desc">Bestseller:</label>
                      <input
                        value={bestseller}
                        onChange={(e) => setBestSeller(e.target.value)}
                        className="w-full border border-gray-600 py-1 px-3 rounded-lg outline-none mt-1"
                        type="text"
                        id="desc"
                        placeholder="Most sold phones yes/no"
                        
                      />
                    </div>

                    <div>
                      <label htmlFor="desc">Image:</label>
                      <input
                        onChange={(e) => setFile(e.target.files[0])}
                        className="w-full border border-gray-600 py-1 px-3 rounded-lg outline-none mt-1"
                        type="file"
                        id="desc"
                        placeholder="Upload phone image"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="desc">Deposit:</label>
                      <input
                        value={deposit}
                        onChange={(e) => setDeposit(e.target.value)}
                        className="w-full border border-gray-600 py-1 px-3 rounded-lg outline-none mt-1"
                        type="number"
                        id="desc"
                        placeholder="phone deposit"
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-blue-500 py-2 px-3 rounded-lg cursor-pointer text-xl font-semibold mt-5 text-white"
                    >
                      Add Phone
                    </button>
                  </form>
                </div>
              </div>
            </div>
          )}
          {state === "phones" && (
            <div className="fade">
              <div>
                <h2 className="text-2xl font-semibold">All Phones</h2>
              </div>
              <div className="mt-3">
                <div className="grid gap-2 space-x-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
                  {allPhones?.map((item, index) => (
                    <div
                      className="px-3 py-4 bg-white rounded-lg shadow-lg"
                      key={index}
                    >
                      <div className="w-full relative overflow-hidden">
                        <img
                          className="w-full h-30 object-cover"
                          src={item.image}
                          alt=""
                        />
                      </div>
                      <div className="flex flex-col gap-3 items-start">
                        <span className="text-sm">Name:{item.name}</span>
                        <span className="text-xs">
                          Deposit:{currency} {item.deposit}
                        </span>

                        <button
                          onClick={() => deletePhone(item._id)}
                          className="flex items-center w-full bg-red-400 text-center justify-center text-sm cursor-pointer rounded-2xl text-white "
                        >
                          <img className="w-4" src={assests.del} alt="" />
                          <span>Delete</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Admin;
