import { useEffect, useState } from "react";
import image from "../images/Ellipse 114.png";
import camera from "../images/Group 1585.png";
function Account() {
  const [userData, setUserData] = useState({
    fullName: "Marry Doe",
    email: "Marry@Gmail.Com",
  });
  useEffect(() => {
    const storedName = localStorage.getItem("fullName");
    const storedEmail = localStorage.getItem("email");
    setUserData({
      fullName: storedName || "Marry Doe",
      email: storedEmail || "Marry@Gmail.Com",
    });
  }, []);

  return (
    <div className="relative w-[375px] h-[812px] bg-[#F7F8F9] opacity-100 border-2">
      <div className="absolute top-0 left-0 w-[375px] h-[68px] bg-white shadow-md opacity-100">
        <h1 className="absolute top-[27px] left-[15px] w-[152px] h-[22px] text-left text-[18px] leading-[21px] font-medium font-rubik text-[#1D2226] capitalize opacity-100">
          Account Settings
        </h1>
      </div>
      <img
        src={image}
        alt="profile"
        className="absolute top-[98px] left-[20px] w-[76px] h-[76px] bg-transparent bg-no-repeat bg-center opacity-100"
      />
      <img
        src={camera}
        alt="camera"
        className="absolute top-[147px] left-[79px] w-[21px] h-[23px] bg-transparent bg-no-repeat bg-center opacity-100"
      />
      <p className="absolute top-[98px] left-[116px] w-[90px] h-[18px] text-left text-[17px] leading-[19px] font-medium font-rubik text-[#1D2226] capitalize opacity-100">
        {userData.fullName}
      </p>
      <p className="absolute top-[122px] left-[116px] w-[118px] h-[17px] text-left text-[16px] leading-[19px] font-normal font-rubik text-[#1D2226] capitalize opacity-100">
        {userData.email}
      </p>
      <p className="absolute top-[204px] left-[20px] w-[337px] h-[63px] text-left text-[14px] leading-[22px] font-normal font-rubik text-[#1D2226] capitalize opacity-100">
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy
        Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
      </p>
      <div className="absolute top-[287px] left-0 w-[375px] border-t-2 border-dashed border-[#CBCBCB] opacity-100"></div>
      <div className="absolute top-[776px] left-0 w-[375px] border-t-2 border-dashed border-[#CBCBCB] opacity-100"></div>
    </div>
  );
}

export default Account;
