import { defineConfig } from 'windicss/helpers'
// import colors from 'windicss/colors'

export default defineConfig({
  // https://windicss.org/posts/v30.html#attributify-mode
  // attributify: true,
  theme: {
    extend: {
      colors: {
        primary: '#f9af3f',
        secondary: '#675bf5',
        error: '#f93f5c',
        yellow: '#fffcf7',
        black: '#212429',
        gray4: '#333333',
        gray3: '#a2a2ac',
        gray2: '#d4d4de',
        gray1: '#fafaff',
      },
      fontSize: {
        h1: 'clamp(36px, 3.125vw, 60px)',
        h2: 'clamp(24px, 2.09vw, 40px)',
        h3: 'clamp(16px, 1.46vw, 28px)',
        h4: 'clamp(14px, 1.09vw, 21px)',
        h5: 'clamp(10px, 0.625vw, 12px)',
        p: 'clamp(12px, 0.83vw, 16px)',
        small: 'clamp(10px, 0.625vw, 12px)',
      },
    },
  },
})
