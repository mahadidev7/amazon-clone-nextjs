import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Currency from "react-currency-formatter";
import CheckoutProduct from "../components/CheckoutProduct";
import CustomModel from "../components/CustomModel";
import Header from "../components/Header";
import { selectCarts, selectProducts } from "../slices/basketSlice";
import { selectServer } from "../slices/mahadiSlice";
import { useSession } from "next-auth/react";
import BackToTop from "../components/BackToTop";
import Footer from "../components/Footer";
import Button from "../components/share/Button";

function Checkout() {
  const ReduxProducts = useSelector(selectProducts);
  // const ReduxCarts = useSelector(selectCarts);
  const [ReduxCarts, setReduxCarts] = useState([]);
  const [ReduxBaskets, setReduxBaskets] = useState([]);
  const sliceServer = useSelector(selectServer);
  const { data: session } = useSession();
  const ReduxTotalPrice = ReduxBaskets?.reduce(
    (total, item) => total + item.totalPrice,
    0
  );

  const proceedhandeler = () => {
    alert("Thank you for your purchase");
  };

  useEffect(() => {
    setReduxCarts(ReduxProducts.filter((item) => item.cart === true));
  }, [ ReduxProducts]);

  useEffect(() => {
    setReduxBaskets(ReduxCarts.filter((item) => item.shipping === true));
  }, [ReduxCarts]);
  
  return (
    <div className="bg-gray-100">
      <Header />
      {/* Chackout page banner  */}
      <div className="flex items-center justify-center">
        <Image
          src="https://links.papareact.com/ikj"
          width={1020}
          height={250}
          objectFit="contain"
        />
      </div>
      {/* main body */}
      <main className="md:grid md:grid-cols-7 max-w-screen-2xl mx-auto ">
        {/* Left  */}
        <div className="md:m-3 m-1 shadow-sm col-span-5">
          <div className="flex flex-col space-y-10 bg-white md:p-5 p-1 rounded">
            <h1 className="text-3xl border-b pb-4 font-bold">
              {ReduxCarts.length === 0
                ? "Your Amazon Basket is empty"
                : `Shopping Basket - (${ReduxCarts.length})`
              }
            </h1>
            {ReduxCarts.length === 0 && (
              <Image
                src={`https://i.ibb.co/cLdVCws/df.jpg`}
                width={300}
                height={250}
                objectFit="contain"
              />
            )}
            {/* cart product Lists  */}
            {ReduxCarts?.map((item, i) => (
              <CheckoutProduct key={i} {...item} />
            ))}
          </div>
        </div>

        {/* Right  */}
        <div className="shadow-md bg-white p-10 rounded col-span-2 md:mt-3 my-4">
          <h2 className="text-2xl border-b pb-4 text-center mb-9">
            Subtotal {ReduxBaskets.length} items
          </h2>

          {ReduxBaskets?.map((v, i) => {
            return (
              <div className="grid grid-cols-5 border-b p-3" key={i}>
                <p className="col-span-3 capitalize">
                  ({i + 1}) {v.name}
                </p>
                <div className="col-span-2 flex gap-1">
                  <p>=</p>
                  <p>
                    <Currency quantity={v.totalPrice} currency="GBP" />
                  </p>
                </div>
              </div>
            );
          })}

          <div className="grid grid-cols-5 font-semibold uppercase my-5">
            <p className="col-span-3 text-right pr-4"> Total Price</p>

            <div className="col-span-2 flex gap-1">
              <p>=</p>
              <p>
                <Currency quantity={ReduxTotalPrice} currency="GBP" />
              </p>
            </div>
          </div>

          {/* proced Button */}

          <Button
            isDisabled={!session}
            CLASS_NAME={
              session ? "button py-3" : "bg-gray-300 rounded p-1 text-black cursor-not-allowed py-3"
            }
            handelClick={proceedhandeler}
            TEXT={!session ? "Sign in to chechout" : "Proced to chechout"}
          />
        </div>
      </main>

      {/* footer start  */}
      <footer>
        <BackToTop />
        <Footer />
      </footer>
      {/* footer end  */}

      {sliceServer === 0 ? "" : <CustomModel />}
    </div>
  );
}

export default Checkout;
