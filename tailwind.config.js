/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        "2xs": "280px",
        xs: "360px",
        sm: "412px",
      },
      colors: {
        "bunker-gray": {
          50: "#32373D",
          100: "#65707B",
          200: "#5C6670",
          300: "#535C65",
          400: "#49525A",
          500: "#40474F",
          600: "#373D43",
          700: "#2C3035",
          800: "#25292D",
          900: "#1C1F22",
        },
        "fem-01": "hsl(30, 38%, 92%)",
        "fem-01-light": "hsl(158, 36%, 37%)",
        "fem-01-dark": "hsl(158, 62%, 15%)",
        "fem-02-primary": "hsl(25, 97%, 53%)",
        "fem-02-darkbg": "hsl(216, 12%, 8%)",
        "fem-02-cardbg1": "hsl(214, 19%, 16%)",
        "fem-02-cardbg2": "hsl(215, 27%, 12%)",
        "fem-02-btn": "hsl(210, 19%, 18%)",
        "fem-02-lightgray": "hsl(217, 12%, 63%)",
        "fem-02-medgray": "hsl(216, 12%, 54%)",
        "fem-03-mainbg": "hsl(217, 54%, 11%)",
        "fem-03-cardbg": "hsl(216, 50%, 16%)",
        "fem-03-text1": "hsl(215, 51%, 70%)",
        "fem-03-text2": "hsl(178, 100%, 50%)",
        "fem-04-pale-blue": "hsl(225, 100%, 94%)",
        "fem-04-pale-blue2": "hsl(225, 100%, 98%)",
        "fem-04-desat-blue": "hsl(224, 23%, 55%)",
        "fem-04-lpale-blue": "hsl(245, 83%, 68%)",
        "fem-04-btn-blue": "hsl(245, 75%, 52%)",
        "fem-05-mainbg": "hsl(233, 47%, 7%)",
        "fem-05-cardbg": "hsl(244, 38%, 16%)",
        "fem-05-accent": "hsl(277, 64%, 61%)",
        "fem-05-heading": "hsl(0, 0%, 100%)",
        "fem-05-paragraph": "hsla(0, 0%, 100%, 0.75)",
        "fem-05-stat-text": "hsla(0, 0%, 100%, 0.6)",
        "fem-06-orange": "hsl(31, 77%, 52%)",
        "fem-06-dark-cyan1": "hsl(184, 100%, 22%)",
        "fem-06-dark-cyan2": "hsl(179, 100%, 13%)",
        "fem-06-primary-color": "hsl(0, 0%, 95%)",
        "fem-06-secondary-color": "hsla(0, 0%, 100%, 0.75)",
        "fem-07-primary-red": "hsl(0, 100%, 74%)",
        "fem-07-primary-green": "hsl(154, 59%, 51%)",
        "fem-07-accent": "hsl(248, 32%, 49%)",
        "fem-07-dark-blue": "hsl(249, 10%, 26%)",
        "fem-07-gray-blue": "hsl(246, 25%, 77%)",
        "fem-08-dark-violet": "hsl(278, 68%, 11%)",
        "fem-08-gray-violet": "hsl(279, 6%, 55%)",
        "fem-08-light-gray": "hsl(270, 3%, 87%)",
        "fem-08-white": "hsl(0, 0%, 100%)",
        "fem-08-error": "hsl(0, 100%, 66%)",
        "fem-08-linear-grad1": "hsl(249, 99%, 64%)",
        "fem-08-linear-grad2": "hsl(278, 94%, 30%)",
        "fem-09-light-cyan": "hsl(193, 38%, 86%)",
        "fem-09-neon-green": "hsl(150, 100%, 66%)",
        "fem-09-gray-blue": "hsl(217, 19%, 38%)",
        "fem-09-dgray-blue": "hsl(217, 19%, 24%)",
        "fem-09-dark-blue": "hsl(218, 23%, 16%)",
      },
      fontFamily: {
        oswald: ["Oswald", "sans-serif"],
        petitformal: ["Petit Formal Script", "handwriting"],
        shortstack: ["Short Stack", "handwriting"],
        lato: ["Lato", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        fraunces: ["Fraunces", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        overpass: ["Overpass", "sans-serif"],
        outfit: ["Outfit", "sans-serif"],
        redhatdisplay: ["Red Hat Display", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        lexenddeca: ["Lexend Deca", "sans-serif"],
        bigshoulder: ["Big Shoulders Display", "display"],
        spacegrotesk: ["Space Grotesk", "display"],
        manrope: ["Manrope", "display"],
      },
      backgroundImage: {
        "fem-ordersumbg-desktop":
          "url('./assets/fem-04/pattern-background-desktop.svg')",
        "fem-ordersumbg-mobile":
          "url('./assets/fem-04/pattern-background-mobile.svg')",
        "fem-introbg-desktop": "url('./assets/fem-07/bg-intro-desktop.png')",
        "fem-introbg-mobile": "url('./assets/fem-07/bg-intro-mobile.png')",
        "fem-interactive-card-front":
          "url('./assets/fem-08/bg-card-front.png')",
        "fem-interactive-card-back": "url('./assets/fem-08/bg-card-back.png')",
      },
      boxShadow: {
        "nav-shadow": "0 0 2px 3px rgba(147, 225, 216, 0.5)",
        "card-shadow": "0 0 2px 7px rgba(147, 225, 216, 0.25)",
        "fem-04-btn": "0px 22px 18px 0px rgba(56,41,224,0.20)",
        "fem-07-btn": "0px 8px 2px 0px rgba(62,60,73,0.30)",
        "fem-07-primary-btn": "1px 6px 2px 0px rgba(84,171,133,1)",
        "fem-08-card-shaodw": "0px 40px 55px 1px rgba(0,0,0,0.25)",
        "fem-09-btn-shaodw": "0px 0px 36px 10px rgba(82,255,168,0.75);",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp"), require("daisyui")],
};
