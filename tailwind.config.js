/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#007bff",
                secondary: "#6c757d",
                success: "#28a745",
                danger: "#dc3545",
                warning: "#ffc107",
                info: "#17a2b8",
                light: "#f8f9fa",
                dark: "#343a40",
            },
        },
    },
    plugins: [],
};

export default tailwindConfig;
