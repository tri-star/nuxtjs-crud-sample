module.exports = {
  srcDir: 'src/',
  content: ['./pages/**/*.vue', './components/**/*.vue'],
  // https://github.com/tailwindlabs/tailwindcss/blob/master/stubs/defaultConfig.stub.js
  theme: {
    colors: {
      sidemenu: {
        bg: '#232323',
        on: '#dbdbdb',
      },
      primary: {
        main: '#5162ff',
        on: '#ecf0ff',
        'main-01': '#6776ff',
        disabled: '#878ec9',
        shade03: '#0011a8',
        buttonBorder: 'color-mix(in srgb, #5162ff, black 5%)',
      },
      header: {
        main: '#a7b0ff',
        on: '#ffffff',
      },
      main: {
        bg: '#f0f0f0',
        text: '#000000',
        'section-bg': '#ffffff',
        'section-title': '#404040',
        'content-bg': '#ffffff',
        'content-border': '#6f6f6f',
        link: '#0029ff',
        alert: '#ff0000',
      },
      secondary: {
        main03: '#42ff00',
      },
      form: {
        label: '#565656',
        'row-border': '#000000',
        'memo-text': '#000000',
        error: '#ff0000',
      },
      plain: {
        main: '#f8f8f8',
        on: '#1f1f1f',
        'main-01': '#ffffff',
        disabled: '#bababa',
        shade02: '#d9d9d9',
      },
      table: {
        border: '#d1d1d1',
      },
      transparent: {
        main: 'transparent',
        hover: 'rgba(0, 0, 0, 0.05)',
        on: '#1f1f1f',
        alert: '#ff0000',
        alert01: '#ff0000',
      },
    },
    fontSize: {
      sm: '0.75rem',
      base: '1rem',
      lg: '1.25rem',
      headerLogo: '35px',
      pageTitle: '30px',
      sectionTitle: '20px',
    },
    fontWeight: {
      headerLogo: 'Bold',
      pageTitle: 'bold',
      sectionTitle: 'bold',
    },
    fontFamily: {
      default: 'Roboto',
    },
    boxShadow: {
      'main/section-shadow': '0px 4px 10px -2px rgba(0,0,0,0.25)',
      default: '0px 4px 4px rgba(0,0,0,0.25)',
    },
    borderRadius: {
      none: '0',
      xs: '0.25rem',
      sm: '0.3125rem',
      default: '0.5rem',
      lg: '5.375rem',
    },
    header: {
      height: '80px',
    },
  },
}
