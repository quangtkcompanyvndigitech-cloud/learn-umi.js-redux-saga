/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./src/layouts/admin/**/*.{ts,tsx}",
    "./src/components/admin/**/*.{ts,tsx}",
    "./src/components/ui/**/*.{ts,tsx}",
    "./src/pages/admin/**/*.{ts,tsx}",
  ],
  // Tránh đụng class Bootstrap/template; dùng tiền tố tw-
  // prefix: "tw-",
  // Không reset toàn cục (trang client vẫn dùng CSS cũ trong cùng bundle)
  corePlugins: {
    preflight: false,
  },
  theme: {
  	extend: {
  		colors: {
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			}
  		}
  	}
  },
  plugins: [],
};
