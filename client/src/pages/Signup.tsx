// import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
export default function Signup() {
  return (
    <div className="flex min-h-screen">
      <div className="flex flex-col justify-between w-1/2 p-8 bg-gradient-to-tl from-violet-500 to-purple-500 text-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {/* <CommandIcon className="w-6 h-6" /> */}
            <span className="text-2xl font-bold">TaskX</span>
          </div>
          <a className="text-sm font-medium text-white" href="#">
            Signup
          </a>
        </div>
        <div className="text-lg italic">
          <p>
            "This library has saved me countless hours of work and helped me\n
            deliver stunning designs to my clients faster than ever before."
          </p>
          <p className="mt-4 font-semibold">Sofia Davis</p>
        </div>
      </div>
      <div className="flex flex-col justify-center w-1/2 p-8 bg-white">
        <div className="max-w-md mx-auto">
          <h2 className="mb-4 text-4xl font-bold">Create an account</h2>
          <p className="mb-6 text-gray-600">
            Enter your email below to create your account
          </p>
          <Input type="email" placeholder="name@example.com" className="mb-4" />
          <Button className="w-full mb-4">Sign In with Email</Button>
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">
                OR CONTINUE WITH
              </span>
            </div>
          </div>
          <Button variant="outline" className="w-full">
            {/* <GitlabIcon className="w-5 h-5 mr-2" /> */}
            Google
          </Button>
          <p className="mt-4 text-sm text-gray-600">
            Already have an account?{" "}
            <Link to={"/"} className="underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
