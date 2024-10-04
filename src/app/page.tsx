import React from "react";
import Card from "./component/Card";
import { url } from "inspector";

function Home() {
  return (
    <>
      <div className="h-200vh bg-gray-700  pt-10">
        {/* CARD-1 */}
        <div className=" ml-52 max-w-sm mx-auto  w-auto rounded-xl bg-gray-500 hover:bg-gray-400  overflow-hidden ">
          <h1 className="text-center font-bold pt-2 hover:text-2xl hover:bg-slate-600">Student ID Card</h1>
          <div className="md:flex p-6">
            <img
              className="  object-cover md:h-29 md:w-48 rounded-xl"
              src="https://thumbs.dreamstime.com/b/portrait-teen-boy-year-old-posing-outdoors-73564947.jpg"
            />

            <Card Name="Hassan" Age={15} RollNo={122} Class="9th" />
            <br />
          </div>
        </div>
        {/* CARD-2 */}
        <div className=" ml-52 max-w-sm mx-auto  mt-10 w-auto rounded-xl bg-gray-500 hover:bg-gray-400 overflow-hidden ">
          <h1 className="text-center font-bold pt-2 hover:text-2xl hover:bg-slate-600">Student ID Card</h1>
          <div className="md:flex p-6 ">
            <img
              className="object-cover md:h-29 md:w-48 rounded-xl"
              src="https://pandasnetwork.org/wp-content/uploads/2021/08/GettyImages-1168352687-1.jpg"
            />
            <Card Name="Shezad" Age={10} RollNo={333} Class="6th" />
          </div>
        </div>
        {/* CARD-3 */}
        <div className=" ml-52 max-w-sm mx-auot mt-10 w-auto rounded-xl bg-gray-500 hover:bg-gray-400 overflow-hidden ">
          <h1 className="text-center font-bold pt-2 hover:text-2xl hover:bg-slate-600">Student ID Card</h1>
          <div className="md:flex p-6 ">
            <img
              className="object-cover md:h-29 md:w-48 rounded-xl"
              src="https://www.shutterstock.com/image-photo/portrait-teenager-1213-years-old-260nw-1829328350.jpg"
            />
            <Card Name="Ali" Age={15} RollNo={2155} Class="7th" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
