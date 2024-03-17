import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import OTPInput from "react-otp-input";
import { checkOtp } from "../../services/authServce";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function checkOTPForm({ phoneNumber }) {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const { isPending, mutateAsync, error } = useMutation({
    mutationFn: checkOtp,
  });
  console.log({ isPending, mutateAsync });

  const checkOtpHandler = async (e) => {
    e.preventDefault();
    try {
      console.log(0);
      const { user, error, message } = await mutateAsync({ phoneNumber, otp });
      console.log({ phoneNumber, otp });
      toast.success(message);
      if (!user.isActive) return navigate("/complete-profile");
      if (user.role === "OWNER") return navigate("/owner");
      if (user.role === "FREELANCER") return navigate("/freelancer");
      if (user.role === "ADMIN") return navigate("/admin");
    } catch (err) {
      console.log(error);
      toast.error(err?.response?.data?.message);
    }
  };
  return (
    <div>
      <form className="space-y-10" onSubmit={checkOtpHandler}>
        <p className="font-bold text-secondary-800">کد تایید را وارد کنید</p>
        <OTPInput
          inputType="number"
          value={otp}
          onChange={setOtp}
          numInputs={6}
          renderSeparator={<span>-</span>}
          renderInput={(props) => <input type="number" {...props} />}
          containerStyle="flex flex-row-reverse gap-x-2 justify-center"
          inputStyle={{
            width: "2.5rem",
            padding: "0.5rem",
            border: "1px solid rgb(var(--color-primary-300))",
            borderRadius: "0.5rem",
          }}
        />
        <button className="btn btn--primary w-full ">تایید</button>
      </form>
    </div>
  );
}
export default checkOTPForm;
