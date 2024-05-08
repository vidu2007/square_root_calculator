'use client'

import Image from "next/image";
import axios from "axios";

const getCalculations = async (e) => {
  e.preventDefault();

  const submitData = {
    input_number: document.querySelector('#input_number').value
  }

  try {
    const res = axios.post('http://localhost:3000/api/calculate', submitData)
    .then((res) => {
      document.querySelector('#calculation').innerHTML = res.data.message;
      document.querySelector('#description').innerHTML = res.data.description;
    });

      } catch(err) {
    console.log(err);
  }
};

export default async function Home() {  
  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
  <div className="mx-auto max-w-lg text-center">
    <h1 className="text-2xl font-bold sm:text-3xl">Square Root Calculator</h1>

    <p className="mt-4 text-gray-500">
      This square root calculator calculates more accurately than your typical scientific calculator using the derivative function of the √x
    </p>
    <p className="text-gray-500">
      Please note that the Error (difference) showed here is not 100% accurate
    </p>
  </div>

  <form method="post" onSubmit={getCalculations} className="mx-auto mb-0 mt-8 max-w-md space-y-4">
    <div>
      <div className="relative">
        <input
          type="text"
          id="input_number"
          name="input_number"
          className="w-full text-center rounded-lg border-gray-200 p-3 font-medium pe-12 text-lg shadow-sm"
          placeholder="Enter a number to calculate the square root"
        />
      </div>
    </div>

    <div>
      <div className="relative">
        <h2 id="calculation" className="w-full rounded-lg p-4 pe-12 text-lg font-bold text-center"></h2>
      </div>
      <div className="relative">
        <h2 id="description" className="w-contain rounded-lg p-4 pe-12 text-lg font-bold text-center"></h2>
      </div>
    </div>

    <div className="flex items-center justify-center">
      <button
        type="submit"
        className="text-center inline-block rounded-full bg-blue-500 px-5 py-3 text-sm font-medium text-white hover:bg-blue-800 hover:border-solid hover:border-black hover:border-2 duration-300"
      >
        Calculate
      </button>
    </div>
  </form>
</div>
    </div>

  );
}