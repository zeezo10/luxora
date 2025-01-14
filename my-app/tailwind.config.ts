  import type { Config } from "tailwindcss";

  const config: Config = {
    content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          sans: ['Jakarta_bold', 'Jakarta_Mid', 'Jakarta_Light', 'Jakarta_Thin', 'sans-serif'], // Combine custom fonts under a single sans-serif family
        },
      },
    },
    plugins: [require("daisyui")],
  };
  export default config;
