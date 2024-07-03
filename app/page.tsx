import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div>
        <ul className="text-white flex w-full h-28 items-center">
          <span className="ml-10 text-6xl font-extrabold">O</span>
          <li className="text-4xl font-bold">UT-FITS</li>
          <li className="home text-3xl font-semibold">Home</li>
          <li className="text-3xl ml-32 font-semibold">Explore</li>
          <li className="text-3xl ml-32 font-semibold">Marketplace</li>
          <li className="text-3xl ml-32 font-semibold">News</li>
          <li className="ml-20">
            <svg
              width="55"
              height="55"
              viewBox="0 0 35 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="17.5"
                cy="17.5"
                r="17"
                fill="url(#paint0_linear_1_203)"
                stroke="url(#paint1_linear_1_203)"
              />
              <path
                d="M13 10.9414L11 13.5601V22.7257C11 23.073 11.1405 23.406 11.3905 23.6516C11.6406 23.8971 11.9797 24.0351 12.3333 24.0351H21.6667C22.0203 24.0351 22.3594 23.8971 22.6095 23.6516C22.8595 23.406 23 23.073 23 22.7257V13.5601L21 10.9414H13Z"
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M11 13.5601H23"
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M19.6663 16.179C19.6663 16.8735 19.3854 17.5396 18.8853 18.0307C18.3852 18.5218 17.7069 18.7977 16.9997 18.7977C16.2924 18.7977 15.6142 18.5218 15.1141 18.0307C14.614 17.5396 14.333 16.8735 14.333 16.179"
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1_203"
                  x1="1.20699e-07"
                  y1="14"
                  x2="35"
                  y2="26"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#89347C" stop-opacity="0.6" />
                  <stop offset="1" stop-color="#521D82" stop-opacity="0.05" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_1_203"
                  x1="0"
                  y1="17.5"
                  x2="35"
                  y2="17.5"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#89347C" />
                  <stop offset="1" stop-color="#521D82" />
                </linearGradient>
              </defs>
            </svg>
          </li>
          <li className="ml-10 text-xl">
            <button className=" text-white font-semibold border border-pink-200 rounded-lg pt-2 pb-2 pr-5 pl-5 bg-gradient-to-r from-gray-800 to-fuchsia-900">
              Buy Now
            </button>
          </li>
        </ul>
      </div>
    </main>
  );
}
