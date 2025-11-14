import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        cosmic: {
          navy: "hsl(var(--space-navy))",
          purple: "hsl(var(--nebula-purple))",
          gold: "hsl(var(--starlight-gold))",
          silver: "hsl(var(--cosmic-silver))",
          teal: "hsl(var(--ethereal-teal))",
        },
      },
      backgroundImage: {
        'gradient-cosmic': 'var(--gradient-cosmic)',
        'gradient-nebula': 'var(--gradient-nebula)',
        'gradient-starlight': 'var(--gradient-starlight)',
      },
      boxShadow: {
        'cosmic': 'var(--shadow-cosmic)',
        'glow': 'var(--shadow-glow)',
        'elegant': 'var(--shadow-elegant)',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "stardust-float": {
          "0%, 100%": {
            transform: "translateY(0) translateX(0)",
            opacity: "0.3",
          },
          "50%": {
            transform: "translateY(-20px) translateX(10px)",
            opacity: "0.8",
          },
        },
        "constellation-draw": {
          from: {
            strokeDashoffset: "1000",
          },
          to: {
            strokeDashoffset: "0",
          },
        },
        "glow-pulse": {
          "0%, 100%": {
            opacity: "0.8",
            filter: "brightness(1)",
          },
          "50%": {
            opacity: "1",
            filter: "brightness(1.2)",
          },
        },
        "celestial-spin": {
          from: {
            transform: "rotate(0deg)",
          },
          to: {
            transform: "rotate(360deg)",
          },
        },
        "fade-in": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "slide-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(40px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "stardust-float": "stardust-float 3s ease-in-out infinite",
        "constellation-draw": "constellation-draw 2s ease-out forwards",
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
        "celestial-spin": "celestial-spin 60s linear infinite",
        "fade-in": "fade-in 0.6s ease-out",
        "slide-up": "slide-up 0.6s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
