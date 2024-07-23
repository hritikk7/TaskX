import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
export default function Login() {
  return (
    <div className="flex min-h-screen">
      <div className="flex flex-col justify-between w-1/2 p-8 bg-gradient-to-bl from-slate-300 to-slate-500 text-white" id="gradient-container"> 
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {/* <CommandIcon className="w-6 h-6" /> */}
            <span className="text-2xl font-bold text-black">TaskX</span>
          </div>
          {/* <Link to="#" className="text-sm font-medium text-white">
            Login
          </Link> */}
        </div>
        <div className="text-lg italic">
          <p>
          "This library has significantly boosted my productivity, enabling me to deliver exceptional designs to my clients swiftly and efficiently."
          </p>
          <p className="mt-4 font-semibold">Sofia Davis</p>
        </div>
      </div>
      <div className="flex flex-col justify-center w-1/2 p-8 bg-white" id="login-container">
        <div className="max-w-md mx-auto" >
          <h2 className="mb-4 text-4xl font-bold">Login</h2>
          <p className="mb-6 text-gray-600">
            Enter your email and password to login to your account.
          </p>
          <div className="space-y-4 mb-8">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" placeholder="name@example.com" />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input type="password" id="password" />
            </div>
          </div>
          <Button className="w-full mb-4">Login</Button>
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
            Don't have an account?{" "}
            <Link to={"/signup"} className="underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
