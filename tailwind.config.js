/** @type {import('tailwindcss').Config} */
export const content = [
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/**/*.{js,ts,jsx,tsx,mdx}"
];
export const theme = {
  extend: {
    colors: {
        'white':    '#fff',
        'black':    '#111',
        'blue':     '#3a80e9',
        'gray':     '#888',
        'darkGray': '#1b1b1b',
        'green':    '#61c96f',
        'red':      '#f94141',
      },
    },
    variants: {},
  };
 
export const plugins = [];

//  <div class="bg-blue|green text-white">
//   This is a div with a custom blue background and white text.
//   </div>
  