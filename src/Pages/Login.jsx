import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",

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
    localStorage.setItem("email", formData.email);

    navigate("/account");
  };
  return (
    <div className="relative w-[375px] h-[812px] bg-[#F7F8F9] opacity-100 border-2">
      <p className="absolute top-[40px] left-[20px] w-[199px] h-[69px] text-left text-[28px] leading-[36px] font-rubik font-[600] text-[#1D2226] opacity-100">
        Signin to your PopX account
      </p>
      <p className="absolute top-[123px] left-[20px] w-[232px] h-[48px] text-left text-[18px] leading-[26px] font-rubik font-normal text-[#1D2226] opacity-60">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </p>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="relative top-[195px] left-[20px]">
          <label
            htmlFor="email"
            className="absolute -top-2 left-[14px] px-1 bg-[#F7F8F9] text-[13px] font-[600] text-[#6C25FF] z-10"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-[335px] focus:outline-none focus:border-blue-500 h-[40px] left-[20px] px-5 bg-[#F7F8F9] border-2 border-[#CBCBCB] rounded-md text-[14px] text-[#919191] font-normal"
            placeholder="Enter email address"
            required
          />
        </div>
        <div className="relative top-[195px] mx-auto  left-[20px]">
          <label
            htmlFor="password"
            className="absolute -top-2 left-[14px] px-1 bg-[#F7F8F9] text-[13px] font-[600] text-[#6C25FF] z-10"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-[335px] focus:outline-none focus:border-blue-500 h-[40px] left-[20px] px-5 bg-[#F7F8F9] border-2 border-[#CBCBCB] rounded-md text-[14px] text-[#919191] font-normal"
            placeholder="Enter email address"
            required
          />
        </div>
        <button
          type="submit"
          className="absolute top-[300px] left-[20px] w-[335px] h-[46px] bg-[#CBCBCB] rounded-md opacity-100 text-center hover:bg-blue-300 font-rubik text-white font-medium "
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
