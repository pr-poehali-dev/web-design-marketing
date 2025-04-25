import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}"
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				space: {
					blue: '#3E63DD',
					purple: '#8B5CF6',
					indigo: '#4338CA',
					nebula: '#A78BFA',
					dark: '#0c1121',
					black: '#050814',
					gray: '#2D3748'
				},
				planet: {
					earth: '#43A9FF',
					mars: '#FF5149',
					jupiter: '#FFAD49',
					saturn: '#F6E05E'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'orbit': {
					'0%': { transform: 'rotate(0deg) translateX(50px) rotate(0deg)' },
					'100%': { transform: 'rotate(360deg) translateX(50px) rotate(-360deg)' }
				},
				'pulse-glow': {
					'0%, 100%': { opacity: '0.6', boxShadow: '0 0 20px 5px rgba(99, 102, 241, 0.3)' },
					'50%': { opacity: '1', boxShadow: '0 0 30px 10px rgba(99, 102, 241, 0.5)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'fade-in': 'fade-in 0.6s ease-out',
				'orbit-slow': 'orbit 20s linear infinite',
				'orbit-medium': 'orbit 15s linear infinite',
				'orbit-fast': 'orbit 10s linear infinite',
				'pulse-glow': 'pulse-glow 3s ease-in-out infinite'
			},
			fontFamily: {
				'sans': ['Inter', 'sans-serif'],
				'display': ['Montserrat', 'sans-serif'],
			},
			backgroundImage: {
				'space-gradient': 'linear-gradient(to bottom, #0c1121, #0f172a)',
				'nebula': 'radial-gradient(circle at center, rgba(139, 92, 246, 0.3), rgba(0, 0, 0, 0) 70%)',
				'planet-glow': 'radial-gradient(circle at center, rgba(62, 99, 221, 0.5), rgba(0, 0, 0, 0) 70%)'
			},
			boxShadow: {
				'neon': '0 0 15px rgba(99, 102, 241, 0.5)',
				'planet': '0 0 30px rgba(62, 99, 221, 0.3)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
