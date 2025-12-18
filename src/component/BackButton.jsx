import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const BackButton = () => {
  return (
    <Link 
      to="/"
      className="w-10 bg-white shadow-md 
             rounded-full p-2 hover:bg-gray-100 active:bg-gray-50 cursor-pointer"
      title="Back"
    >
      <ArrowLeft size={20} />
    </Link>
  );
};

export default BackButton;
