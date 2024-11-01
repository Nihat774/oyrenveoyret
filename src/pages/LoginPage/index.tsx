import LoginForm from "../../ui/LoginForm";

function LoginPage() {
  return (
    <>
    {/* Desktop */}
      <div className="bg-gradient-custom  justify-evenly items-center py-4 xs:hidden md:flex">
        <div className="text-white flex flex-col">
          <p className=" text-[3rem] font-semibold">Öyrən və Öyrət</p>
          <p className="text-[1.8rem]">platformasına</p>
          <p className="text-[2.3rem]"> xoş gəlmisiniz!</p>
        </div>
        <LoginForm />
      </div>
      {/* phone */}
      <div className="xs:flex md:hidden bg-Respons-costum h-[81vh] justify-center items-center">
        <LoginForm />
      </div>
    </>
  );
}

export default LoginPage;
