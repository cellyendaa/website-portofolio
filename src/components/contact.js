import React from "react";

function Contact() {
  return (
    <div className="w-full p-4">
      <div className="flex flex-col space-y-6">
        <div className="text-left">
          <h1 className="font-inter text-2xl md:text-3xl lg:text-4xl font-bold text-[#786262] py-2">Contact.</h1>
          <h2 className="font-inter text-xs text-[#786262]">Hubungi saya lewat media sosial atau kirim email ke saya ya!</h2>
        </div>

        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-5">
          {/* GitHub */}
          <div className="flex justify-start">
            <a
              href="https://github.com/cellyendaa?tab=repositories"
              target="_blank"
              aria-label="GITHUB"
              rel="noopener"
              className="flex items-center bg-white px-3 py-2 rounded-md text-[#786262] transition-all duration-300 hover:translate-x-2 hover:shadow-lg hover:no-underline min-w-0"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.08 512.08" width="20" height="20" className="flex-shrink-0">
                <path
                  d="M255.942 5.361C113.905 6.046-.683 121.746.003 263.783c.531 109.928 70.871 207.365 175.043 242.473 12.8 2.368 17.44-5.568 17.44-12.384 0-6.112-.192-22.4-.352-43.712-71.2 15.52-86.24-34.464-86.24-34.464a67.906 67.906 0 00-28.384-37.6c-23.264-16 1.76-15.616 1.76-15.616a53.858 53.858 0 0139.2 26.496c14.379 26.38 47.421 36.109 73.801 21.73.233-.127.464-.255.695-.386a54.848 54.848 0 0116.256-34.368c-56.832-6.496-116.48-28.512-116.48-127.008a99.488 99.488 0 0126.24-68.96 92.802 92.802 0 012.56-68.032s21.504-6.912 70.4 26.336a242.167 242.167 0 01128.224 0c48.864-33.248 70.4-26.336 70.4-26.336a92.802 92.802 0 012.56 68.032 99.422 99.422 0 0126.016 68.96c0 98.72-59.84 120.448-116.864 126.816a61.503 61.503 0 0117.376 47.616c0 34.336-.32 62.048-.32 70.4 0 6.88 4.608 14.88 17.6 12.352 134.53-45.57 206.647-191.57 161.076-326.101C462.822 76.144 365.622 6.009 255.942 5.361z"
                  fill="#5c6bc0"
                />
              </svg>
              <span className="ml-2 text-sm md:text-base truncate">cellyendaa</span>
            </a>
          </div>

          {/* Instagram */}
          <div className="flex justify-start">
            <a
              href="https://www.instagram.com/putricellyendaa_?igsh=MXhiZHpwcXU3emVjMg=="
              aria-label="INSTAGRAM"
              target="_blank"
              rel="noopener"
              className="flex items-center bg-white px-3 py-2 rounded-md text-[#786262] transition-all duration-300 hover:translate-x-2 hover:shadow-lg hover:no-underline min-w-0"
            >
              <svg height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                <linearGradient id="instagram_svg__a" gradientTransform="matrix(0 -1.982 -1.844 0 -2.292 23.869)" gradientUnits="userSpaceOnUse" x1="0.947" x2="11.036" y1="-2.332" y2="-13.176">
                  <stop offset="0" stopColor="#fd5"></stop>
                  <stop offset="0.5" stopColor="#ff543e"></stop>
                  <stop offset="1" stopColor="#c837ab"></stop>
                </linearGradient>
                <path
                  d="M12.004.5c-6.055 0-7.213-.158-8.727.597C1.883 1.791.882 3.104.628 4.863.55 5.4.528 5.51.523 8.258c-.02 10.161-.154 10.92.576 12.434a4.838 4.838 0 003.134 2.566c1.093.282 1.82.242 7.747.242 4.968 0 6.513.089 7.802-.244a4.811 4.811 0 003.134-2.571c.736-1.522.563-2.598.563-8.692 0-5.836.197-7.135-.575-8.709a4.567 4.567 0 00-.982-1.349C20.194.281 18.136.505 15.741.5h-3.737z"
                  fill="url(#instagram_svg__a)"
                />
                <path d="M12 17.537c-3.053 0-5.537-2.484-5.537-5.537S8.947 6.463 12 6.463 17.537 8.947 17.537 12 15.053 17.537 12 17.537zM18.359 6.514a.874.874 0 11.002-1.748.874.874 0 01-.002 1.748z" fill="#fff" />
                <circle cx="12" cy="12" fill="none" r="3.5" />
              </svg>
              <span className="ml-2 text-sm md:text-base truncate">putricellyendaa_</span>
            </a>
          </div>

          {/* LinkedIn */}
          <div className="flex justify-start">
            <a
              href="https://www.linkedin.com/in/putri-cellyenda-029653381/"
              aria-label="LINKEDIN"
              target="_blank"
              rel="noopener"
              className="flex items-center bg-white px-3 py-2 rounded-md text-[#786262] transition-all duration-300 hover:translate-x-2 hover:shadow-lg hover:no-underline min-w-0"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20" height="20" className="flex-shrink-0">
                <path d="M469.779 503.983H42.221c-18.891 0-34.205-15.314-34.205-34.205V42.221c0-18.891 15.314-34.205 34.205-34.205h427.557c18.891 0 34.205 15.314 34.205 34.205v427.557c0 18.891-15.314 34.205-34.204 34.205z" fill="#3cafe6" />
                <path d="M42.221 452.676V8.017c-18.891 0-34.205 15.314-34.205 34.205v427.557c0 18.891 15.314 34.205 34.205 34.205h427.557c18.891 0 34.205-15.314 34.205-34.205H59.324c-9.446 0-17.103-7.657-17.103-17.103z" fill="#1c9ad6" />
                <path fill="#fff" d="M84.977 196.142h68.409v230.881H84.977z" />
                <path
                  d="M350.063 196.142c-17.102 0-58.076 2.494-76.96 42.756v-42.756h-68.409v230.881h68.409V315.858c0-25.653 21.644-42.756 42.756-42.756 23.613 0 42.756 17.102 42.756 42.756V427.023h68.409V264.551c-.001-37.781-38.837-68.409-76.961-68.409z"
                  fill="#fff"
                />
                <circle cx="119.182" cy="119.182" r="34.205" fill="#fff" />
              </svg>
              <span className="ml-2 text-sm md:text-base truncate">Putri Cellyenda</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
