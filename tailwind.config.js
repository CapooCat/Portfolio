/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'hsl(var(--primary-color) 95% 45% / <alpha-value>)',
          light: 'hsl(var(--primary-color) 95% 85% / <alpha-value>)',
          dark: 'hsl(var(--primary-color) 95% 15% / <alpha-value>)',
        },

        secondary: {
          DEFAULT: 'hsl(var(--secondary-color) 95% 45% / <alpha-value>)',
          light: 'hsl(var(--secondary-color) 95% 85% / <alpha-value>)',
          dark: 'hsl(var(--secondary-color) 95% 15% / <alpha-value>)',
        },
      },
    },

    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '2rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },

    fontFamily: {
      serif: ['Lexend Deca'],
      sans: ['Lexend Deca'],
      mono: ['Lexend Deca'],
    },
  },
  plugins: ['postcss-import', 'autoprefixer', 'prettier-plugin-tailwindcss'],
};
