import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate();
  const handleCreate = () => {
    navigate("/register");
  };
  const handleLogin = () => {
    navigate("/login");
  };
  return (
    <div className="relative w-[375px] h-[812px] bg-[#F7F8F9] opacity-100 border-2 ">
      <h1 className="absolute top-[549px] left-[20px] w-[231px] h-[33px] text-left text-[28px] leading-[17px] font-rubik font-medium text-[#1D2226] opacity-100">
        Welcome to PopX
      </h1>
      <p className="absolute top-[587px] left-[20px] w-[232px] h-[48px] text-left text-[18px] leading-[26px] font-rubik font-normal text-[#1D2226] opacity-60">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </p>
      <button
        onClick={handleCreate}
        className="absolute top-[665px] left-[20px] w-[335px] h-[46px] bg-[#6C25FF] rounded-[6px] opacity-100 font-rubik font-medium text-white"
      >
        Create Account
      </button>
      <button
        onClick={handleLogin}
        className="absolute top-[725px] left-[20px] w-[335px] h-[46px] bg-[#6C25FF4B] opacity-100 rounded-[6px] font-rubik font-medium text-[#1D2226]"
      >
        Already Registered? Login
      </button>
    </div>
  );
}

export default Landing;
