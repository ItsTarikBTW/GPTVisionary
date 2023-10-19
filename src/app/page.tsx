import Image from "next/image";
import {
  SunIcon,
  BoltIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";
import Logo from "@/components/logo";

export default function Home() {
  return (
    <div className="flex h-screen flex-col items-center justify-center px-2 text-white">
      <Logo className="mb-20" />

      <div className="flex flex-row space-x-2 text-center">
        <div className="">
          <div className="mb-5 flex flex-col items-center justify-center">
            {/* sun icon */}
            <SunIcon className="h-8 w-8 " />
            <h2 className="">Example</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">&quot;Explain Somthing to me&quot;</p>
            <p className="infoText">
              &quot;What is the difrence between a dog and a cat&quot;
            </p>
            <p className="infoText">&quot;What is the color of the sun&quot;</p>
          </div>
        </div>
        <div className="">
          <div className="mb-5 flex flex-col items-center justify-center">
            {/* sun icon */}
            <BoltIcon className="h-8 w-8 " />
            <h2 className="">Capabilites</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">&quot;Explain Somthing to me&quot;</p>
            <p className="infoText">
              &quot;What is the difrence between a dog and a cat&quot;
            </p>
            <p className="infoText">&quot;What is the color of the sun&quot;</p>
          </div>
        </div>
        <div className="">
          <div className="mb-5 flex flex-col items-center justify-center">
            {/* sun icon */}
            <ExclamationTriangleIcon className="h-8 w-8 " />
            <h2 className="">Limitations</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">&quot;Explain Somthing to me&quot;</p>
            <p className="infoText">
              &quot;What is the difrence between a dog and a cat&quot;
            </p>
            <p className="infoText">&quot;What is the color of the sun&quot;</p>
          </div>
        </div>
      </div>
    </div>
  );
}
