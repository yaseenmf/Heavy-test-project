import { useState } from "react";
import TextField from "./../../ui/textFild";
import RadioInput from "./../../ui/radioInput";
import { useMutation } from "@tanstack/react-query";
import { completeProfile } from "../../services/authServce";
import toast from "react-hot-toast";
import Loading from "./../../ui/loading";
import { useNavigate } from "react-router-dom";

function completeProfileForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const { mutateAsync, isPending } = useMutation({
    mutationFn: completeProfile,
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { user, message } = await mutateAsync({ name, email, role });
      toast.success(message);
      if (user.status !== 2) {
        navigate("/");
        toast("پروفایل شما در انتظار تایید است.", { icon: "👍" });
        return;
      }
      if (user.role === "OWNER") return navigate("/owner");
      if (user.role === "OWNER") return navigate("/owner");
    } catch (err) {
      toast.error(err?.response?.data?.message);
    }
  };

  return (
    <div className="flex justify-center pt-10">
      <div className="w-full sm:max-w-sm ">
        <form className="space-y-8" onSubmit={handleSubmit}>
          <TextField
            label="نام و نام خانوادگی"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            label="ایمیل"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="flex items-center justify-center gap-x-8">
            <RadioInput
              label="کارفرما"
              value="OWNER"
              name="role"
              checked={role === "OWNER"}
              onchange={(e) => setRole(e.target.value)}
              id="OWNER"
            />
            <RadioInput
              label="فریلنسر"
              value="FREELANCER"
              name="role"
              checked={role === "FREELANCER"}
              onchange={(e) => setRole(e.target.value)}
              id="FREELANCER"
            />
          </div>
          <div>
            {isPending ? (
              <Loading />
            ) : (
              <button type="submit" className="btn btn--primary w-full">
                تایید
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default completeProfileForm;
