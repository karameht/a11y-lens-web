export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        a11y: {
          "bg-primary": "#0a0b0f",
          "bg-secondary": "#13151a",
          "bg-tertiary": "#1c1f26",
          accent: "#00c7e6",
          "accent-hover": "#00b3cc",
          "text-primary": "#ffffff",
          "text-secondary": "#8b8fa3",
          "text-muted": "#5a5d6b",
          green: "#10b981",
          error: "#ef4444",
          warning: "#f59e0b",
        },
      },
      fontFamily: {
        mono: [
          "SF Mono",
          "Monaco",
          "Cascadia Code",
          "Roboto Mono",
          "monospace",
        ],
      },
    },
  },
  plugins: [],
};
