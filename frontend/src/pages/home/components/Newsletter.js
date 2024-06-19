import React from "react";
import "./Newsletter.css";

function Newsletter() {
  return (
    <div className="newsLetter">
      <section className=" ">
        <div className=" mx-auto  text-center  z-10 relative">
          <h1 className="mb-4 text-3xl font-bold tracking-tight leading-none text-gray-800">
            Keep in touch! Sign up to our newsletter.{" "}
          </h1>
          <p className="mb-8 text-sm font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-200">
            Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
            quam nihil molestiae consequatu
          </p>
          <form className="w-full max-w-md mx-auto">
            <label
              for="default-email"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Email sign-up
            </label>
            <div className="relative">
              <input
                type="email"
                id="default-email"
                className="block inputBox w-full p-4 ps-10 text-sm text-gray-800 border-none rounded-3xl focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
                placeholder=" Your email"
                required
              />
              <button
                type="submit"
                className="text-gray-800 absolute end-2.5 bottom-2.5 bg-white hover:bg-purple-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-3xl text-sm px-6 py-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
              >
                Sign up
              </button>
            </div>
          </form>
        </div>
        <div className="bg-gradient-to-b from-purple-50 to-transparent dark:from-purple-900 w-full h-full absolute top-0 left-0 z-0"></div>
      </section>
    </div>
  );
}

export default Newsletter;
