import Image from "next/image";
import bgimg from "../public/Images/bgimg.avif";
import { useMoralis } from "react-moralis";

const Login = () => {
  const { authenticate } = useMoralis();
  return (
    <div className="bg-black relative">
      <h1 className="text-white">I am a login page</h1>
      <div className="w-full flex flex-col space-y-5 justify-center items-center absolute h-4/6 z-50">
        <Image
          src="https://links.papareact.com/3pi"
          height={200}
          width={200}
          objectFit="cover"
          className="rounded-full"
        />
        <button
          onClick={authenticate}
          className="bg-yellow-500 p-5 font-bold animate-bounce rounded-lg"
        >
          Login to METAVERSE
        </button>
      </div>
      <div className="w-full h-screen">
        <Image src={bgimg} layout="fill" objectFit="cover" />
      </div>
    </div>
  );
};

export default Login;
