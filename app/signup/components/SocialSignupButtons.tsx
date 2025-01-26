import { Button } from "@/components/ui/button";
import { FaGoogle, FaFacebook, FaTwitter } from "react-icons/fa";

export function SocialSignupButtons() {
  return (
    <div className="w-full">
      <div className="mt-6">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">
              Or continue with
            </span>
          </div>
        </div>
        <div className="mt-6 flex justify-center space-x-4">
          <Button
            variant="outline"
            className="border-gray-300 hover:border-purple-500 hover:text-purple-500"
          >
            <FaGoogle className="w-5 h-5" />
          </Button>
          <Button
            variant="outline"
            className="border-gray-300 hover:border-blue-500 hover:text-blue-500"
          >
            <FaFacebook className="w-5 h-5" />
          </Button>
          <Button
            variant="outline"
            className="border-gray-300 hover:border-blue-400 hover:text-blue-400"
          >
            <FaTwitter className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
