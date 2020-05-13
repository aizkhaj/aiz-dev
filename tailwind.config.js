module.exports = {
  purge: {
    content: [
      './pages/**/*.{js,jsx,ts,tsx,mdx,md}',
      './components/**/*.{js,jsx,ts,tsx,mdx,md}',
    ],
    defaultExtractor: content => {
      content.match(/[\w-/.:]+(?<!:)/g) || []
    }
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [
    require('@tailwindcss/ui'),
  ],
}
