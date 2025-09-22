/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        inter: ['var(--font-inter)']
      },
      colors:{
        background: 'rgb(var(--background))',
        foreground: 'rgb(var(--foreground))',
        muted: 'rgb(var(--muted))',
        accent: 'rgb(var(--accent))',
        },
        backgroundImage:{
          'firefly-radial': "radial-gradient(50% 50% at 50% 50%, rgba(253,255, 80, 0.5) 0% rgba(217,217,217,0)100%)"
        },
         boxShadow:{
          'glass-inset':'inset 0 17px 5px -9px rgba(254,254, 91, 0.05)',
          'glass-sm':'5px 5px 20px 0px rgba(254,254, 91, 0.3)',
         },
         keyframes: {
          'spin-reverse': {
            '0%': { transform: 'rotate(0deg)' },
            '100%': { transform: 'rotate(-360deg)' }
          },
          'move': {
            '0%': { transform: 'translate(0, 0)' },
            '100%': { transform: 'translate(100px, 100px)' }
          }
         },
         animation: {
          'spin-slow': 'spin 40s linear infinite',
          'spin-slow-reverse': 'spin-reverse 40s linear infinite',
          'paused': 'paused',
          'move': 'move 2s ease-in-out infinite alternate'
         },
         animationPlayState: {
          'running': 'running',
          'paused': 'paused'
         }
      },
      },
  plugins: [
    function({ addUtilities, theme }) {
      const newUtilities = {
        '.custom-bg': {
          // bg-background/20
          backgroundColor: 'rgb(var(--background) / 0.2)',
          // border + border-solid
          borderWidth: '1px',
          borderStyle: 'solid',
          // border-accent/30
          borderColor: 'rgb(var(--accent) / 0.3)',
          // backdrop-blur[6px]
          backdropFilter: 'blur(6px)',
          WebkitBackdropFilter: 'blur(6px)',
          // shadow-glass-inset
          boxShadow: theme('boxShadow.glass-inset'),
        },
        '.custom-bg:hover': {
          // hover:shadow-glass-sm
          boxShadow: theme('boxShadow.glass-sm'),
        }
      };
      addUtilities(newUtilities, ['responsive']);
    }
  ],
};
