import React from "react";

function Button({isDisabled = false, CLASS_NAME, handelClick, TEXT, product_ID = null}) {
  return (
    <button
      disabled={isDisabled}
      className={`mt-auto w-full mb:text-sm ${CLASS_NAME}`}
      onClick={() => handelClick(product_ID)}
    >
      {TEXT || "button"}
    </button>
  );
}

export default Button;
