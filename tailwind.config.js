module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
     ...theme('colors'),
     'primary': '#111827',
     'secondary': '#ffed4a',
     'danger': '#e3342f',
    })
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
