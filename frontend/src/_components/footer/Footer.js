import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div>
      <footer class="p-4 sm:p-6">
        <div class="mx-auto max-w-screen-xl">
          <div class="Footer">
            <div class="mb-6 md:mb-0">
              <a href="/" class="flex items-center">
                <img src="logo.png" class="mr-3 h-8" alt="Edu suite Logo" />
                <span className="site-name-white">PURPLEBOTS.CO</span>
              </a>
              <p className="footerBody block">
                A platform to keep everyone in the loop and up to date while
                promoting collaboration and communication. Get started with our
                products today!
              </p>
            </div>
            <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 class="mb-6 text-lg font-semibold text-white">Company</h2>
                <ul class="text-white font-semibold">
                  <li class="mb-4">
                    <a class="hover:underline">About Us</a>
                  </li>
                  <li class="mb-4">
                    <a class="hover:underline">Agents</a>
                  </li>
                  <li>
                    <a class="hover:underline">Listings</a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 class="mb-6 text-lg font-semibold text-white">Support</h2>
                <ul class="text-white font-semibold">
                  <li class="mb-4">
                    <a class="hover:underline ">Help Centre</a>
                  </li>
                  <li class="mb-4">
                    <a class="hover:underline">FAQs</a>
                  </li>
                  <li class="mb-4">
                    <a class="hover:underline">Call centre</a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 class="mb-6 text-lg font-semibold text-white">Others</h2>

                <ul class="text-white font-semibold">
                  <li class="mb-4">
                    <a class="hover:underline">What new</a>
                  </li>
                  <li class="mb-4">
                    <a href="#" class="hover:underline">
                      Blog{" "}
                    </a>
                  </li>
                  <li class="mb-4">
                    <a href="#" class="hover:underline">
                      Categories{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
