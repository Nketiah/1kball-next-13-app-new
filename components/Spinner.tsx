import Image from "next/image";
import React from "react";
import { Oval } from "react-loader-spinner";

const Spinner = () => {
  return (
    <>
      <div style={{ marginLeft: "280px" }}>
        <Oval
          height={40}
          width={40}
          color="#576685"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="#576685"
          strokeWidth={3}
          strokeWidthSecondary={2}
        />
      </div>
    </>
  );
};

export default Spinner;
