import TextField from "../../ui/textFild";
import Loading from "./../../ui/loading";

function sendOTPForm({ isSendOtp, onSubmit, phoneNumber, onChange }) {
  return (
    <div>
      <form className="space-y-8" onSubmit={onSubmit}>
        <TextField
          name="phoneNumber"
          value={phoneNumber}
          onChange={onChange}
          label="شماره موبایل"
        />
        <div>
          {isSendOtp ? (
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
