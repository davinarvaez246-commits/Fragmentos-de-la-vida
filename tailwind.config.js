/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        // Paleta neón
        neon: {
          blue: '#00f3ff',
          pink: '#ff00c8',
          purple: '#9d00ff',
          green: '#00ff9d',
          yellow: '#faff00'
        },
        dark: {
          950: '#050517',
          900: '#0a0a23',
          800: '#121235'
        }
      },
      fontFamily: {
        // Tipografías que combinan con el estilo neón
        future: ['Orbitron', 'sans-serif'],
        poetic: ['Cormorant Garamond', 'serif']
      },
      boxShadow: {
        // Efectos neón personalizados
        'neon-blue': '0 0 5px #00f3ff, 0 0 20px rgba(0, 243, 255, 0.5)',
        'neon-pink': '0 0 5px #ff00c8, 0 0 20px rgba(255, 0, 200, 0.5)',
        'neon-purple': '0 0 5px #9d00ff, 0 0 20px rgba(157, 0, 255, 0.5)',
        'neon-green': '0 0 5px #00ff9d, 0 0 20px rgba(0, 255, 157, 0.5)',
        'neon-yellow': '0 0 5px #faff00, 0 0 20px rgba(250, 255, 0, 0.5)'
      },
      keyframes: {
        // Animaciones neón
        pulseNeon: {
          '0%, 100%': { boxShadow: '0 0 5px #00f3ff, 0 0 20px rgba(0, 243, 255, 0.5)' },
          '50%': { boxShadow: '0 0 10px #00f3ff, 0 0 30px rgba(0, 243, 255, 0.8)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        glowText: {
          '0%, 100%': { textShadow: '0 0 5px #00f3ff, 0 0 20px rgba(0, 243, 255, 0.5)' },
          '50%': { textShadow: '0 0 10px #00f3ff, 0 0 30px rgba(0, 243, 255, 0.8)' }
        }
      },
      animation: {
        pulseNeon: 'pulseNeon 3s ease-in-out infinite',
        float: 'float 4s ease-in-out infinite',
        glowText: 'glowText 3s ease-in-out infinite'
      }
    }
  },
  plugins: []
}
