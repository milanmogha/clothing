import React from "react";
import "./Main.css";
import Image from "next/image";

function Main_a() {
  return (
    <div>
      <div className="flex">
        <div>
          <h1 className="font-extrabold text-9xl mt-20 ml-10">
            GATHER YOUR <br /> RARE <span className="out_fits">OUT-FITS</span>{" "}
            <br /> NFTS .
          </h1>
          <p className="text-3xl ml-10 mt-10 ">
            Get started with the easiest and most secure <br />
            platforms to buy and sell the rarest of digital ARTS <br />
            and NFT's
          </p>
          <button className="explorebtn mt-10 ml-10">EXPLORE NOW</button>
          <button className="createbtn ml-20">CREATE</button>
          <div className="flex mt-10 ml-10">
            <div className="mr-10">
              <h4 className="text-5xl font-extrabold">30k+</h4>
              <p className="text-3xl text-gray-400 mt-5">Artwork</p>
            </div>
            <span className="mt-3">
              <svg
                width="15"
                height="70"
                viewBox="0 0 7 54"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.67"
                  d="M3.5 0.333333C2.02724 0.333333 0.833333 1.52724 0.833333 3C0.833333 4.47276 2.02724 5.66667 3.5 5.66667C4.97276 5.66667 6.16667 4.47276 6.16667 3C6.16667 1.52724 4.97276 0.333333 3.5 0.333333ZM3.5 48.3333C2.02724 48.3333 0.833331 49.5272 0.833331 51C0.833331 52.4728 2.02724 53.6667 3.5 53.6667C4.97276 53.6667 6.16666 52.4728 6.16666 51C6.16666 49.5272 4.97276 48.3333 3.5 48.3333ZM3 3L3 51L4 51L4 3L3 3Z"
                  fill="white"
                />
              </svg>
            </span>
            <div className="ml-10 mr-10">
              <h3 className="text-5xl font-extrabold">7630k+</h3>
              <p className="text-3xl text-gray-400 mt-5">Artist</p>
            </div>
            <span className="mt-3">
              <svg
                width="15"
                height="70"
                viewBox="0 0 7 54"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.67"
                  d="M3.5 0.333333C2.02724 0.333333 0.833333 1.52724 0.833333 3C0.833333 4.47276 2.02724 5.66667 3.5 5.66667C4.97276 5.66667 6.16667 4.47276 6.16667 3C6.16667 1.52724 4.97276 0.333333 3.5 0.333333ZM3.5 48.3333C2.02724 48.3333 0.833331 49.5272 0.833331 51C0.833331 52.4728 2.02724 53.6667 3.5 53.6667C4.97276 53.6667 6.16666 52.4728 6.16666 51C6.16666 49.5272 4.97276 48.3333 3.5 48.3333ZM3 3L3 51L4 51L4 3L3 3Z"
                  fill="white"
                />
              </svg>
            </span>
            <div className="ml-10">
              <h3 className="text-5xl font-extrabold">99k+</h3>
              <p className="text-3xl text-gray-400 mt-5">Auction</p>
            </div>
          </div>
        </div>
        <div>
          <img src="./img1.png" className="ml-20 mt-10" />
          <br />
          <div className="container ml-36 pt-3 pl-5">
            <p className="text-stone-300 font-bold ">
              Ending in <span className="ml-60">Current Bid</span>
            </p>
            <p className="agency font-bold text-5xl">
              14 : 02 : 34 <span className="ml-32">3.4 </span>{" "}
              <span className="text-lg ml-2">ETH</span>{" "}
            </p>
            <p className="time ml-1.5 mb-5">
              HOUR <span className="ml-8">MINUTES</span>{" "}
              <span className="ml-8">SECONDS</span>
            </p>
          </div>
        </div>
      </div>

      <h3 className="artwork mt-44 text-5xl ml-10 font-extrabold font-['Poppins']">
        Artwork of the week
      </h3>

      <div className="flex">
      <div
        className="artwork1
       ml-10 rounded-xl flex bg-slate-900 mt-28 mb-20"
      >
        <div>
          <img src="./img2.png" className="img2 ml-5 mt-5 mb-5 mr-5" />
        </div>
        <div>
          <h4 className="ml-12 mt-10 text-2xl">Out-fits</h4>
          <h3 className="ml-10 mt-2 text-5xl font-extrabold">Out-fits #432</h3>
          <p className="flex ml-12 mt-6">
            <img src="./clock.png" width={20}/> <span className="ml-5">Dec 15, 2022 at 7:04pm </span>
            </p>
            <p className="flex ml-12 mt-5">
            <img src="./vector.png" width={20}/> <span className="ml-5">3.44  <span>USD 6348</span> </span>
            </p>

            <button className="w-[250px] h-[39px] bg-gradient-to-r from-purple-900 to-fuchsia-800 rounded-[5px] text-2xl ml-20 mt-10">View Details</button>
        </div>
      </div>
        <div className="ml-20 mt-72 w-[40px] h-[40px] bg-gradient-to-r from-fuchsia-800 to-purple-900 rounded-full border border-fuchsia-800">
          <h3 className="ml-3  text-3xl font-medium"> > </h3>
        </div>
        <div
        className="artwork1
       ml-10 rounded-xl flex bg-slate-900 mt-28 mb-20"
      >
        <div>
            <img src="./img3.png" className="mt-5 ml-5 w-[328.42px] h-[328.71px] opacity-70 bg-gradient-to-l from-pink-600 to-blue-600 rounded-[5px] " />
          </div>
         <div>
           <h4 className="ml-12 mt-10 text-2xl">Out-fits</h4>
            <h3 className="ml-10 mt-2 text-5xl font-extrabold">Out-fits #432</h3>
           <p className="flex ml-12 mt-6">
              <img src="./clock.png" width={20}/> <span className="ml-5">Dec 15, 2022 at 7:04pm </span>
              </p>
              <p className="flex ml-12 mt-5">
              <img src="./vector.png" width={20}/> <span className="ml-5">3.44  <span>USD 6348</span> </span>
              </p>

              <button className="w-[250px] h-[39px] bg-gradient-to-r from-purple-900 to-fuchsia-800 rounded-[5px] text-2xl ml-20 mt-10">View Details</button>
          </div>
        </div>
      </div>
      <div className="rectangle1  text-white text-[23px] font-semibold font-['Poppins']"> <h2 className="text-3xl ml-12">More</h2></div>
      <h3 className="text-center text-6xl font-extrabold mt-20">WELCOME <span className="nftmarket">TO THE NFT</span> <br /> <span className="nftmarket">MARKET</span>PLACE</h3>

      <p className="text-center mt-14 text-4xl font-medium font-['Poppins']">Welcome to the virtual world's one-stop for the rarest virtual and digital assests. Here you can Create, Explore and Trade digital <br />
      NFT' and buy ASSETS with SAND to incorporate them into your LANDs</p>

      <div className="flex justify-center items-center mt-20 mb-20">
      <div className="w-[213px] flex text-2xl justify-center items-center h-[54px] bg-gradient-to-r from-purple-900 to-fuchsia-800 rounded-[5px]">
        <a href="/" className="font-bold">Newest items</a>
      </div>

      <button className="btn ml-32 w-[213px] h-[54px] text-2xl"> Latest sales</button>
      <button className="btn ml-32 w-[213px] h-[54px] text-2xl"> Auctions</button>
      <button className="btn ml-32 w-[213px] h-[54px] text-2xl"> Creators</button>
      
      </div>

      <div className="flex justify-center mb-10">
        <div className="w-[428.42px] h-[475.71px] mr-20 opacity-70 bg-gradient-to-l from-lime-200 to-pink-500 rounded-[5px] border border-white"><img src="./img4.png" className="ml-10 mt-[30px]" />
        <div className="w-[428px] h-[77px] opacity-70 bg-black rounded-bl-[5px] rounded-br-[5px]">
          <h3 className="pt-2 pl-1">#56775 GUCCI DRIP</h3>
          <p className="pl-2">RARE</p>
        </div>
        </div>

        <div className="w-[428.42px] h-[475.71px] opacity-70 bg-gradient-to-l from-yellow-400 to-violet-800 rounded-[5px] border border-white mr-20"><img src="./img5.png" className="img5 ml-10 mt-[30px]" />
        <div className="w-[428px] h-[77px] opacity-70 bg-black rounded-bl-[5px] rounded-br-[5px]">
          <h3 className="pt-2 pl-1">#56775 GUCCI DRIP</h3>
          <p className="pl-2">RARE</p>
        </div>
        </div>

        <div className="w-[428.42px] h-[475.71px] opacity-70 bg-gradient-to-l from-pink-600 to-blue-600 rounded-[5px] border border-white"><img src="./img3.png" className="img5 ml-10 mt-[30px]" />
        <div className="w-[428px] h-[77px] opacity-70 bg-black rounded-bl-[5px] rounded-br-[5px]">
          <h3 className="pt-2 pl-1">#56775 GUCCI DRIP</h3>
          <p className="pl-2">RARE</p>
        </div>
        </div>
      </div>

      <div className="flex justify-center mb-10">
        <div className="w-[428.42px] h-[475.71px] mr-20 opacity-70 bg-gradient-to-l from-lime-200 to-pink-500 rounded-[5px] border border-white"><img src="./img6.png" className="img5 ml-10 mt-[30px]" />
        <div className="w-[428px] h-[77px] opacity-70 bg-black rounded-bl-[5px] rounded-br-[5px]">
          <h3 className="pt-2 pl-1">#56775 GUCCI DRIP</h3>
          <p className="pl-2">RARE</p>
        </div>
        </div>

        <div className="w-[428.42px] h-[475.71px] opacity-70 bg-gradient-to-l from-yellow-400 to-violet-800 rounded-[5px] border border-white mr-20"><img src="./img7.png" className="img5 ml-10 mt-[30px]" />
        <div className="w-[428px] h-[77px] opacity-70 bg-black rounded-bl-[5px] rounded-br-[5px]">
          <h3 className="pt-2 pl-1">#56775 GUCCI DRIP</h3>
          <p className="pl-2">RARE</p>
        </div>
        </div>

        <div className="w-[428.42px] h-[475.71px] opacity-70 bg-gradient-to-l from-pink-600 to-blue-600 rounded-[5px] border border-white"><img src="./img8.png" className="img5 ml-10 mt-[30px]" />
        <div className="w-[428px] h-[77px] opacity-70 bg-black rounded-bl-[5px] rounded-br-[5px]">
          <h3 className="pt-2 pl-1">#56775 GUCCI DRIP</h3>
          <p className="pl-2">RARE</p>
        </div>
        </div>
      </div>

      <h3 className="text-center text-5xl font-extrabold mt-24">Linked Communities</h3>
      <div className="w-[58px] h-[13px] bg-gradient-to-r from-fuchsia-800 to-purple-900 ml-[930px] mt-5 mb-5 rounded-[20px]" />

      <div className="flex justify-center mt-14">
        <div className="flex items-center">
          <img src="./wallet1.png" />
          <h3 className="text-6xl font-extrabold">Dropbox</h3>
        </div>

        <div className="flex items-center ml-60">
          <img src="./wallet2.png" />
          <h3 className="text-6xl font-extrabold text-rose-400">airbnb</h3>
        </div>

        <div className="flex items-center ml-60">
          <h3 className="text-6xl font-extrabold text-blue-700">coinbase</h3>
        </div>

      </div>

      <div className="flex justify-center mt-14 mb-44">
      
      <div className="flex items-center">
          <h3 className="text-6xl font-extrabold text-indigo-700">stripe.</h3>
        </div>


        <div className="flex items-center ml-60">
          <img src="./wallet5.png" />
          <h3 className="text-6xl font-extrabold ml-5 text-orange-600">Reddit</h3>
        </div>


      </div>

      <footer className="flex w-full border-t h-24 items-center border-gray-400">
        <img src="./group1.png" className="w-20 h-20 ml-10"/>
        <img src="./copyr.png" className="ml-10 w-8 h-8" />

        <h3 className="ml-10 text-3xl text-gray-400">
          Copyright 2022 - Milan
        </h3>
        <div className="ml-[1000px] flex justify-center items-center w-[39px] h-[39px] bg-purple-900 rounded">
        <img src="./in.png"/>
        </div>
        <div className="ml-7 flex justify-center items-center w-[39px] h-[39px] bg-purple-900 rounded">
        <img src="./fb.png"/>
        </div>
        <div className="ml-7 flex justify-center items-center w-[39px] h-[39px] bg-purple-900 rounded">
        <img src="./tw.png"/>
        </div>
        <div className="ml-7 flex justify-center items-center w-[39px] h-[39px] bg-purple-900 rounded">
        <img src="./rb.png"/>
        </div>
        <div className="ml-7 flex justify-center items-center w-[39px] h-[39px] bg-purple-900 rounded">
        <img src="./tg.png"/>
        </div>
      </footer>

    </div>
  );
}

export default Main_a;
