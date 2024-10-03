import React, { useState } from "react";

interface OTPInputProps {
  length?: number;
  onComplete: (otp: string) => void;
  CSSClass? : string
}

const OTPInput: React.FC<OTPInputProps> = ({ length = 4, onComplete, CSSClass = null }) => {
  const [otp, setOtp] = useState<string[]>(Array(length).fill(""));

  const handleChange = (value: string, index: number) => {
    if (!/^\d?$/.test(value)) return; // Allow only digits

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to next input if not empty and it's a number
    if (value && index < length - 1) {
      const nextInput = document.getElementById(`otp-input-${index + 1}`);
      if (nextInput) {
        (nextInput as HTMLInputElement).focus();
      }
    }

    // If OTP is complete, call the onComplete function
    if (newOtp.every((digit) => digit !== "")) {
      onComplete(newOtp.join(""));
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-input-${index - 1}`);
      if (prevInput) {
        (prevInput as HTMLInputElement).focus();
      }
    }
  };

  return (
    <div className="flex space-x-4 justify-center">
      {otp.map((digit, index) => (
        <input
          key={index}
          id={`otp-input-${index}`}
          type="text"
          maxLength={1}
          value={digit}
          onChange={(e) => handleChange(e.target.value, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          className={(CSSClass) ? `${CSSClass}` : `w-12 h-12 text-center text-2xl bg-transparent border-b-2 border-white focus:outline-none focus:border-blue-400 text-white`}
        />
      ))}
    </div>
  );
};

export default OTPInput;
