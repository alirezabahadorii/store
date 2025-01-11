/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        customWhite:'#dfdcdc',
        bgDarkerColor: 'rgba(41,41,44,0.91)',
        customRed: '#ff0000',
        customGreen: '#28a745',
        whitesmoke: '#f5f5f5',
        bgLightColor: '#f5f5f5',
        primaryColor: '#ffc400',
        background: "var(--background)",
        foreground: "var(--foreground)",
        textPrimaryDarkColor: 'rgb(255 255 255 / 1)',
      },
    },
  },
  variants: {
    extend: {
      height: ['responsive'],
      textColor: ['responsive'],// این بخش تضمین می‌کند که کلاس‌ها در سایزهای مختلف قابل استفاده هستند
    },
  },
  plugins: [],
};
