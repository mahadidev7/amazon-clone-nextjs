import Head from "next/head";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BackToTop from "../components/BackToTop";
import Banner from "../components/Banner";
import CustomModel from "../components/CustomModel";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductFeed from "../components/ProductFeed";
import { addToProduct } from "../slices/basketSlice";
import { selectServer } from "../slices/mahadiSlice";
import useAlertModelHook from "../useHook/useAlertModelHook";

export default function Home({products}) {
  const dispatch = useDispatch()
  const {isAlert} = useAlertModelHook()
  const sliceServer = useSelector(selectServer)

  useEffect(() => {
    dispatch(addToProduct(products))
  }, [products]);
  
  return (
    <div className="bg-gray-100 relative">
      <Head>
        <title>Amazon 2.0</title>
      </Head>

    {/* Header start */}
      <Header />
    {/* Header end */}

    {/* main start */}
      <main className="max-w-screen-2xl mx-auto">
          {/* Banner  */}
          <Banner />
          {/* ProductFeed  */}
          <ProductFeed />
      </main>
    {/* main end */}

    {/* footer start  */}
      <footer>
        <BackToTop />
        <Footer />
      </footer>
    {/* footer end  */}

    {/* alert Model area start */}
      { sliceServer === 0 ? '' : <CustomModel /> }
    {/* alert Model area end */}
    </div>
  );
}

export async function getServerSideProps(context){
  const products = await fetch("https://course-api.com/react-store-products").then(
    (res)=> res.json()
  );

  products?.map(item => {
    return (
      // add new rating mathord for Products because is not available in API
      item.rating=Array(Math.floor(Math.random() * (5 - 1 + 1)) + 1)?.fill(1),
      // add new review mathord for Products because is not available in API
      item.review=Math.floor(Math.random() * 200),
      // add new hasPrime mathord for Products because is not available in API
      item.hasPrime=Math.random() < 0.5
    )
  })

  return {
    props: {
      products,
    }
  }
}
