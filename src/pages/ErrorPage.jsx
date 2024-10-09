import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const { error, status } = useRouteError();
  return (
    <div >
     <div className="flex justify-center items-center ">
     <img
        className="mt-16"
        src={"https://d3jl769oy69y7b.cloudfront.net/2022/08/outcrowd.gif"}
        alt=""
      />
     </div>

      <div className="mx-auto w-[250px] mt-10">
        <h2 className="mb-8 mx-auto ">
          <span className="text-red-400">Error</span> {status || 404}
        </h2>
        <p className=" text-yellow-600">{error?.message}</p>
        <button className="btn mx-auto"><Link to="/" >
          Back to homepage
        </Link></button>
      </div>
    </div>
  );
};

export default ErrorPage;
