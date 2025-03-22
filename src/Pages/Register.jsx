import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    companyName: "",
    agency: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/account");
  };
  return (
    <div className="relative w-[375px] h-[812px] bg-[#F7F8F9] opacity-100 border-2">
      <h1 className="absolute top-[40px] left-[20px] w-[198px] h-[69px] text-left text-[28px] leading-[36px] font-[600] font-rubik text-[#1D2226] opacity-100">
        Create your PopX account
      </h1>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="relative top-[142px] left-[20px]">
          <label
            htmlFor="fullName"
            className="absolute -top-2 left-[14px] px-1 bg-[#F7F8F9] text-[13px] font-[600] text-[#6C25FF] z-10"
          >
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="w-[335px] focus:outline-none text-black focus:border-blue-500 h-[40px] left-[20px] px-5 bg-[#F7F8F9] border-2 border-[#CBCBCB] rounded-md text-[14px] placeholder-[#919191] font-normal"
            placeholder="Enter Full Name"
            required
          />
        </div>
        <div className="relative top-[142px]  mx-auto  left-[20px]">
          <label
            htmlFor="phoneNumber"
            className="absolute -top-2 left-[14px] px-1 bg-[#F7F8F9] text-[13px] font-[600] text-[#6C25FF] z-10"
          >
            Phone number <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="w-[335px] focus:outline-none focus:border-blue-500 h-[40px] left-[20px] text-black px-5 bg-[#F7F8F9] border-2 border-[#CBCBCB] rounded-md text-[14px] placeholder-[#919191] font-normal"
            placeholder="Enter Phone number"
            required
          />
        </div>
        <div className="relative top-[142px]  mx-auto  left-[20px]">
          <label
            htmlFor="email"
            className="absolute -top-2 left-[14px] px-1 bg-[#F7F8F9] text-[13px] font-[600] text-[#6C25FF] z-10"
          >
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-[335px] focus:outline-none focus:border-blue-500 h-[40px] left-[20px] text-black px-5 bg-[#F7F8F9] border-2 border-[#CBCBCB] rounded-md text-[14px] placeholder-[#919191] font-normal"
            placeholder="Enter email address"
            required
          />
        </div>
        <div className="relative top-[142px]  mx-auto  left-[20px]">
          <label
            htmlFor="password"
            className="absolute -top-2 left-[14px] px-1 bg-[#F7F8F9] text-[13px] font-[600] text-[#6C25FF] z-10"
          >
            Password <span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-[335px] focus:outline-none focus:border-blue-500 h-[40px] left-[20px] text-black px-5 bg-[#F7F8F9] border-2 border-[#CBCBCB] rounded-md text-[14px] placeholder-[#919191] font-normal"
            placeholder="Enter email address"
            required
          />
        </div>
        <div className="relative top-[142px]  mx-auto  left-[20px]">
          <label
            htmlFor="companyName"
            className="absolute -top-2 left-[14px] px-1 bg-[#F7F8F9] text-[13px] font-[600] text-[#6C25FF] z-10"
          >
            Company name
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            className="w-[335px] focus:outline-none focus:border-blue-500 h-[40px] left-[20px] text-black px-5 bg-[#F7F8F9] border-2 border-[#CBCBCB] rounded-md text-[14px] placeholder-[#919191] font-normal"
            placeholder="Enter Company name"
          />
        </div>
        <div className="relative top-[140px] left-[20px]">
          <label
            htmlFor="agency"
            className="absolute  left-[10px] h-[15px] text-left text-[13px] leading-[17px] font-medium font-rubik opacity-100"
          >
            Are you an Agency? <span className="text-red-500">*</span>
          </label>

          <input
            type="radio"
            name="agency"
            className="absolute top-[30px] left-[10px] w-[22px] h-[22px] accent-[#6C25FF] bg-[#6C25FF] opacity-100 checked:bg-purple-600"
          />
          <p className="absolute top-[32px] left-[44px] w-[23px] h-[20px]  text-[16px] leading-[17px] font-medium font-rubik text-[#1D2226] opacity-100 text-center">
            Yes
          </p>
          <input
            type="radio"
            name="agency"
            className="absolute top-[30px] left-[100px] w-[22px] h-[22px] accent-[#6C25FF] bg-[#6C25FF] opacity-100 checked:bg-purple-600"
          />
          <p className="absolute top-[32px] left-[134px] w-[23px] h-[20px]  text-[16px] leading-[17px] font-medium font-rubik text-[#1D2226] opacity-100 text-center">
            No
          </p>
        </div>
        <button
          type="submit"
          className="absolute top-[710px] left-[20px] w-[335px] h-[46px] bg-[#6C25FF] rounded-md opacity-100 font-rubik font-medium text-white"
        >
          Create Account
        </button>
      </form>
    </div>
  );
}

export default Register;
