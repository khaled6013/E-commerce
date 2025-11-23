import { RxCross2 } from "react-icons/rx";
import { FiMinus } from "react-icons/fi";
import { GoPlus } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";
import { cartRemove, incrementQty, decrementQty } from "./slice/ProductSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  let cartData = useSelector((state) => state.product.cardItem);
  let dispatch = useDispatch();

  let hendleRemove = (item) => {
    dispatch(cartRemove(item));
  };

  let grandTotal = cartData.reduce((acc, item) => {
    let discountPrice = item.price - (item.price * item.discountPercentage) / 100;
    return acc + discountPrice * item.qun;
  }, 0);

  return (
    <>
      <div className="lg:py-[80px] py-[30px]">
        <div className="lg:w-10/12 w-11/12 mx-auto">
          <div className="w-full">
            <h1 className="text-[#262626] lg:text-[49px] text-[30px] font-dm font-bold">
              Cart
            </h1>
            <span className="cursor-pointer font-dm text-[12px] text-[#6D6D60]">
              Home / Cart
            </span>
          </div>
          <div className="w-full lg:mt-[80px] mt-[30px]">
            <div className="py-[20px] px-[10px] bg-[#F5F5F3] hidden md:block">
              <div className="grid grid-cols-4">
                <h1 className="text-[16px] font-dm text-[#262626] font-bold">
                  Product
                </h1>
                <h1 className="text-[16px] font-dm text-[#262626] font-bold">
                  Price
                </h1>
                <h1 className="text-[16px] font-dm text-[#262626] font-bold">
                  Quantity
                </h1>
                <h1 className="text-[16px] font-dm text-[#262626] font-bold">
                  Total
                </h1>
              </div>
            </div>
            <div className="w-full px-[10px] py-[10px] border-b border-[#F0F0F0]">
              {cartData.length > 0 ? (
                cartData.map((item) => (
                  <div
                    key={item.id}
                    className="grid md:grid-cols-4 grid-cols-1 gap-y-5 md:gap-y-0 justify-between items-center "
                  >
                    <div className="flex items-center gap-x-5">
                      <RxCross2
                        className="cursor-pointer"
                        onClick={() => hendleRemove(item)}
                      />
                      <img
                        src={item.thumbnail}
                        alt=""
                        className="w-[80px] md:w-[100px]"
                      />
                      <p className="text-[16px] font-dm text-[#262626] font-bold">
                        {item.title}
                      </p>
                    </div>
                    <h1 className="text-[16px] font-dm text-[#262626] font-bold md:text-left text-right">
                      $
                      {(
                        item.price -
                        (item.price * item.discountPercentage) / 100
                      ).toFixed(2)}
                    </h1>
                    <div className="flex md:justify-start justify-end">
                      <div className="flex items-center gap-x-4 border px-3 py-1">
                        <button
                          className="cursor-pointer"
                          onClick={() => dispatch(decrementQty(item))}
                        >
                          <FiMinus />
                        </button>
                        <p>{item.qun}</p>
                        <button
                          className="cursor-pointer"
                          onClick={() => dispatch(incrementQty(item))}
                        >
                          <GoPlus />
                        </button>
                      </div>
                    </div>
                    <h1 className="text-[16px] font-dm text-[#262626] font-bold md:text-left text-right">
                      $
                      {(
                        (item.price -
                          (item.price * item.discountPercentage) / 100) *
                        item.qun
                      ).toFixed(2)}
                    </h1>
                  </div>
                ))
              ) : (
                <h2>No product</h2>
              )}
            </div>
            <div className="mt-[40px] w-full md:w-4/12 border border-[#F0F0F0] px-[20px] py-[15px] flex justify-between">
              <h1 className="font-dm font-bold text-[16px] text-[#262626]">
                Total
              </h1>
              <h1 className="font-dm font-bold text-[16px] text-[#262626]">
                ${grandTotal.toFixed(2)}
              </h1>
            </div>
            <div className="mt-[30px]">
              <Link
                to="/checkout"
                className="py-[16px] px-[25px] text-white bg-[#262626] font-bold font-dm cursor-pointer hover:bg-[#3a3737] inline-block"
              >
                Proceed to Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;