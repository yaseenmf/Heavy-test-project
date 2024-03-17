import TextField from "../../ui/textFild";
import { useMutation } from "@tanstack/react-query";
import { getOtp } from "../../services/authServce";
import toast from "react-hot-toast";
import Loading from "./../../ui/loading";

function sendOTPForm({ setStep, phoneNumber, onChange }) {
  const { isPending, error, data, mutateAsync } = useMutation({
    mutationFn: getOtp,
  });

  const sendOtpHandler = async (e) => {
    e.preventDefault();
    try {
      const data = await mutateAsync({ phoneNumber });
      setStep();
      toast.success(data.message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div>
      <form className="space-y-8" onSubmit={sendOtpHandler}>
        <TextField
          name="phoneNumber"
          value={phoneNumber}
          onChange={onChange}
          label="شماره موبایل"
        />
        <div>
          {isPending ? (
            <Loading />
          ) : (
            <button type="submit" className="btn btn--primary w-full">
              ارسال کد تایید
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default sendOTPForm;
