import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import LeftSide from "../components/allproduct/LeftSide";
import RightSide from "../components/allproduct/RightSide";
import BackToTop from "../components/BackToTop";
import CustomModel from "../components/CustomModel";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { selectProducts } from "../slices/basketSlice";
import { selectServer } from "../slices/mahadiSlice";

function Allproduct() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectCatagory, setselectCatagory] = useState("all");
  const [products, setProducts] = useState([]);
  const [catagorys, setCatagorys] = useState([]);
  const ReduxProducts = useSelector(selectProducts);
  const sliceServer = useSelector(selectServer);

  // product Sorting with selector
  const SortProduct = (e) => {
    switch (e.target.value) {
      case "plow":
        let plowProduct = products.slice().sort((a, b) => a.price - b.price);
        setProducts(plowProduct);
        break;
      case "pHigh":
        let pHigh = products.slice().sort((a, b) => b.price - a.price);
        setProducts(pHigh);
        break;
      case "az":
        let az = products.slice().sort(function(a, b){
            if(a.name.toLowerCase() < b.name.toLowerCase()) { return -1; }
            if(a.name.toLowerCase() > b.name.toLowerCase()) { return 1; }
            return 0;
        });
        setProducts(az);
        break;
      case "za":
        let za = products.slice().sort(function(a, b){
            if(a.name.toLowerCase() > b.name.toLowerCase()) { return -1; }
            if(a.name.toLowerCase() < b.name.toLowerCase()) { return 1; }
            return 0;
        });
        setProducts(za);
        break;
    }

  };

  // Search handler...
  const handleSearch = (e) => {
    let trem = e.target.value;
    trem = trem.toLowerCase();
    setSearchTerm(trem);

    if (selectCatagory === "bookmark") {
      setProducts(
        ReduxProducts.filter((item) => item.save === true).filter(
          (product) =>
            product.name.includes(trem) ||
            product.category.includes(trem) ||
            product.company.includes(trem)
        )
      );
      return;
    } else {
      setProducts(
        ReduxProducts?.filter(
          (product) =>
            product.name.includes(trem) ||
            product.category.includes(trem) ||
            product.company.includes(trem)
        )
      );
      setselectCatagory("");
    }
  };

  const catagoryHandlar = (data) => {
    setSearchTerm("");
    setselectCatagory(data);
  };

  useEffect(() => {
    // uniqe category set
    setCatagorys([
      "all",
      ...new Set(ReduxProducts?.map((item) => item.category)),
    ]);
  }, [ReduxProducts]);

  useEffect(() => {
    // product set
    if (selectCatagory === "all") {
      setProducts(ReduxProducts);
      return;
    }
    if (selectCatagory === "bookmark") {
      setProducts(ReduxProducts.filter((item) => item.save === true));
      return;
    }

    if (searchTerm) {
      setProducts(
        ReduxProducts?.filter(
          (product) =>
            product.name.includes(searchTerm) ||
            product.category.includes(searchTerm) ||
            product.company.includes(searchTerm)
        )
      );
      return;
    }

    setProducts(
      ReduxProducts.filter((item) => item.category === selectCatagory)
    );
  }, [selectCatagory, ReduxProducts]);

  return (
    <div className="bg-gray-50">
      <Header />
      {/* banner  */}
      <div className="bg-gray-200 py-28 p-5 flex items-center justify-center gap-2 font-semibold">
        <Link href={"./"}> Home </Link>
        <p>/</p>
        <p className="text-yellow-500">All Product</p>
      </div>
      <main className="max-w-screen-2xl mx-auto ">
        <div className="grid md:grid-cols-4 grid-cols-1 gap-1 py-9 ">
          {/* left  */}
          <LeftSide
            catagorys={catagorys}
            selectCatagory={selectCatagory}
            catagoryHandlar={catagoryHandlar}
            ReduxProducts={ReduxProducts}
          />
          {/* right */}
          <RightSide
            products={products}
            handleSearch={handleSearch}
            searchTerm={searchTerm}
            SortProduct={SortProduct}
          />
        </div>
      </main>
      {/* footer start  */}
      <footer>
        <BackToTop />
        <Footer />
      </footer>
      {/* footer end  */}
      {/* alert Model area start */}
      {sliceServer === 0 ? "" : <CustomModel />}
      {/* alert Model area end */}
    </div>
  );
}

export default Allproduct;
