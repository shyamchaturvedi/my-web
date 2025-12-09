import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#0e2a47", // Deep Navy Blue
                secondary: "#d4a017", // Metallic Gold
                accent: "#e74c3c",
            },
            fontFamily: {
                sans: ['var(--font-inter)', 'sans-serif'],
                heading: ['var(--font-merriweather)', 'serif'],
            },
            backgroundImage: {
                'hero-pattern': "linear-gradient(rgba(14, 42, 71, 0.9), rgba(14, 42, 71, 0.8)), url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
            }
        },
    },
    plugins: [],
};
export default config;
