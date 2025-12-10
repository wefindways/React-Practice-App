import { Handbag } from "lucide-react";

const CartIcon = () => {
  return (
    <div className="relative text-white">
      <Handbag
        size={26}
        className="cursor-pointer text-gray-700 hover:text-violet-600 transition-colors"
      />
      <span className="absolute -top-2 -right-2 flex justify-center items-center bg-red-600 rounded-full w-5 h-5 text-xs font-semibold">
        2
      </span>
    </div>
  );
};

export default CartIcon;