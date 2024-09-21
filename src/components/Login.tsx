import git from "../assets/git.svg";
import { Button } from "./ui/button";
const Login = () => {
  const handleButtonClick = () => {
    window.open('/info', '_blank'); // Abre la ruta /info en una nueva pestaña
  };
  return (
    <div className="w-full flex-col bg-[#0D1117] h-screen flex items-center justify-center">
      <div className="flex flex-col justify-center item-center gap-4 text-[13px] w-72">
        <div className="w-full flex items-center justify-center mb-5">
          <img src={git} className="size-12" alt=" " />
        </div>
        <span className="text-center text-[25px]">Sign in to Github</span>
        <div className="bg-[#151B23] p-3 flex gap-3 flex-col  rounded-lg border  border-white border-opacity-10 p-2">
          <label htmlFor="">Username or email addres</label>
          <input
            type="text"
            className="bg-[#0D1117] border border-white p-1.5 rounded-lg border-opacity-10"
          />
          <div className=" flex justify-between">
            <label htmlFor="">Password</label>
            <span className="text-[#4493F8] ">Forgot password?</span>
          </div>

          <input
            type="password"
            className="bg-[#0D1117] border border-white p-1.5 rounded-lg border-opacity-10"
          />
          <Button className="bg-[#29903B] font-bold p-1.5 rounded-lg" onClick={handleButtonClick} >
            Sign in
          </Button>
        </div>
        <div className="border border-white border-opacity-10 flex flex-col p-5 gap-1 rounded-lg items-center justify-center">
          <span className="text-[#4493F8]">Sign in with a passkey</span>

          <span>
            New to GitHub?{" "}
            <span className="text-[#4493F8]">Create an account</span>
          </span>
        </div>
        
      </div>
      <div className="flex gap-4 mt-10 opacity-60 text-[12px]">
          <span>Privacy</span>
          <span>Docs</span>
          <span>Contact GitHub Support</span>
          <span>Manage cookies</span>
          <span>Do not share my personal information</span>
        </div>
    </div>
  );
};

export default Login;
