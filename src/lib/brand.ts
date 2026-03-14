export const brand = {
  name: "True American Wear",
  collectionName: "250th Year Collection",
  tagline: "Premium Americana for the 250th year.",
  description:
    "True American Wear builds heritage-inspired American apparel around classic symbols, heavyweight fabrics, and a darker American palette.",
  palette: {
    obsidian: "#0b0b0c",
    charcoal: "#17181b",
    gunmetal: "#23262c",
    bronze: "#8f6b3a",
    gold: "#c7a46a",
    cream: "#ece4d6",
    rust: "#7b332d",
  },
  typography: {
    display: "Cormorant Garamond",
    body: "Geist Sans",
    direction: "Heritage serif headlines paired with modern sans body copy.",
  },
  ui: {
    buttons: [
      "Primary buttons use a bronze-gold gradient with dark text.",
      "Secondary buttons use charcoal glass with warm cream text.",
    ],
    cards: [
      "Rounded 2xl panels with gunmetal backgrounds.",
      "Hairline bronze borders and soft deep shadows.",
    ],
    sections: [
      "Layer charcoal textures with radial vignettes.",
      "Use muted cream copy and restrained red accents only inside products.",
    ],
  },
} as const;

export const brandTokens = {
  shadows: {
    soft: "0 20px 60px rgba(0, 0, 0, 0.35)",
    strong: "0 28px 90px rgba(0, 0, 0, 0.5)",
  },
  borders: {
    subtle: "1px solid rgba(199, 164, 106, 0.14)",
    strong: "1px solid rgba(199, 164, 106, 0.3)",
  },
} as const;
