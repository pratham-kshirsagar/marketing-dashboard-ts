/** @type {import('tailwindcss').Config} */
export default {
content: [
'./index.html',
'./src/**/*.{ts,tsx}',
],
theme: {
extend: {
colors: {
brand: {
50: '#f7f7ff',
100: '#eef0ff',
200: '#dfe3ff',
300: '#c9ceff',
400: '#a5b0ff',
500: '#7f90ff', // accent used in charts
600: '#5a6df2',
700: '#3f51d7',
800: '#2f3dae',
900: '#29358c',
},
},
boxShadow: {
card: '0 4px 20px rgba(0,0,0,0.05)',
},
borderRadius: {
xl2: '1.25rem',
}
},
},
plugins: [],
}