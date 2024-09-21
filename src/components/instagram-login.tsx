import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ig from "../assets/ig.jpg";
import fc from "../assets/fc.svg";
import { Link } from "react-router-dom";
export function InstagramLogin() {
  const metaInfoArray = [
    "Meta",
    "Información",
    "Blog",
    "Empleo",
    "Ayuda",
    "API",
    "Privacidad",
    "Configuración de cookies",
    "Condiciones",
    "Ubicaciones",
    "Instagram Lite",
    "Threads",
    "Importación de contactos y no usuarios",
    "Meta Verified",

    "Español",
    "© 2024 Instagram from Meta",
  ];
  return (
    <div className="flex flex-col justify-center items-center ">
      <div className="flex flex-col lg:flex-row gap-2 justify-center items-center bg-[#FFFFFF]">
        <div className="hidden lg:block   ">
          <img
            src={ig}
            alt="Instagram app mockup"
            className="mx-auto h-[600px]"
          />
        </div>
        <div className=" flex flex-col">
          <div className="w-full  max-w-md mt-10 p-10 bg-white  border w-[370px]">
            <img
              className="w-[200px] ml-10 p-6 flex items-center justify-center"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/800px-Instagram_logo.svg.png?20160616034027"
              alt=""
            />
            <form className="flex flex-col">
              <Input
                type="text"
                placeholder="Teléfono, usuario o correo electrónico"
                className="w-full p-4 border "
              />
              <Input
                type="password"
                placeholder="Contraseña"
                className="w-full p-4 mt-2 border "
              />
              <Link to={"/info"}>
              <Button className="w-full bg-[#4CB5F9] text-white py-2 mt-4 rounded-md hover:bg-blue-600">
                Iniciar sesión
              </Button>
              </Link>
          
            </form>
            <div className="mt-4 flex justify-between items-center gap-4 text-center text-sm text-gray-600">
              <div className="size-[0.5px] w-full bg-black bg-opacity-10  "></div> <span>O</span>{" "}
              <div className="size-[0.5px] bg-black bg-opacity-10 w-full  "></div>
            </div>
            <div className="w-full cursor-pointer bg-white text-[#385185] mt-4  py-2 rounded-md flex items-center justify-center">
              <img src={fc} alt="Facebook logo" className="mr-2 size-6" />
              Iniciar sesión con Facebook
            </div>
            <div className="mt-4 text-center">
              <a href="#" className="text-sm text-[#385185] hover:underline">
                ¿Olvidaste tu contraseña?
              </a>
            </div>
          </div>

          <div className="mt-2 text-center border  p-4">
            <p className="text-sm text-gray-600">
              ¿No tienes una cuenta?{" "}
              <a href="#" className="text-blue-500 hover:underline">
                Regístrate
              </a>
            </p>
          </div>
          <div className="mt-6 text-center  rounded-lg   p-2">
            <p className="text-sm text-gray-600 mb-2">Descarga la app.</p>
            <div className="flex justify-center space-x-4">
              <img
                className="w-32"
                src="https://static.cdninstagram.com/rsrc.php/v3/yT/r/0BpxdgM3WUr.png"
                alt="Get it on Google Play"
              />
              <img
                className="w-32"
                src="https://static.cdninstagram.com/rsrc.php/v3/y9/r/LjIQEL8csb0.png"
                alt="Get it from Microsoft"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex text-black gap-2 mt-10 mb-10 w-[1100px] flex-wrap justify-center text-[13px] opacity-60">
        {metaInfoArray.map((e) => (
          <span>{e}</span>
        ))}
      </div>
    </div>
  );
}
