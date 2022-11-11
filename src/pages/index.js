import Head from "next/head";
import { useState } from "react";
import BackToTop from "../components/BackToTop";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductFeed from "../components/ProductFeed";

export default function Home({products}) {
  const [allProducts, setAllProducts] = useState(products);

  return (
    <div className="bg-gray-100">
    <Head>
      <title>Amazon 2.0</title>
    </Head>

    {/* Header  */}
    <Header />

    <main className="max-w-screen-2xl mx-auto">
        {/* Banner  */}
        <Banner />

        {/* ProductFeed  */}
        <ProductFeed products={allProducts} />
    </main>

    <footer>
      <BackToTop />
      <Footer />
    </footer>
    
    </div>
  );
}

export async function getServerSideProps(context){
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res)=> res.json()
  );

  return {
    props: {
      products,
    }
  }
}
