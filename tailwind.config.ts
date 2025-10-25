import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--color-bg)",
        fg: "var(--color-fg)",
        accent: "var(--color-accent)",
        border: "var(--color-border)",
        primary: "var(--color-primary)",
        success: "var(--color-success)",
        surface: "var(--color-surface)",
        "text-muted": "var(--color-text-muted)",
        "primary-hover": "var(--color-primary-hover)",
        "surface-hover": "var(--color-surface-hover)",
      },
      borderRadius: {
        lg: "var(--radius-lg)",
        md: "var(--radius-md)",
        sm: "var(--radius-sm)",
        full: "var(--radius-full)",
      },
      spacing: {
        xs: "var(--spacing-xs)",
        sm: "var(--spacing-sm)",
        md: "var(--spacing-md)",
        lg: "var(--spacing-lg)",
        xl: "var(--spacing-xl)",
        section: "var(--spacing-section)",
      },
      boxShadow: {
        card: "var(--shadow-card)",
        glow: "var(--shadow-glow)",
        "card-hover": "var(--shadow-card-hover)",
      },
      transitionDuration: {
        base: "250ms",
        fast: "150ms",
        slow: "400ms",
      },
    },
  },
  plugins: [],
};

export default config;
