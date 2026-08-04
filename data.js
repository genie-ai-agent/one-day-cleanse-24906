// ONE DAY CLEANSE — protocol data
window.CLEANSE = {
  rules: [
    { text: "Only <b>water or tea</b>. No Celsius. No juice. No soda. No booze." },
    { text: "If you\u2019re hungry, <b>drink tea</b>. Not a snack. Tea." },
    { text: "Lunch is <b>yogurt</b>. Plain or Greek. Nothing sweetened to death." },
    { text: "Dinner is <b>seafood only</b>: pollock, shrimp, or salmon sushi. <b>&le; 500 kcal</b>." },
    { text: "One healthy <b>snack</b> allowed. One. Not three." },
    { text: "<b>Hard cutoff: no eating past 8:00 PM.</b> Kitchen closes. Period." },
    { text: "One day. You commit at sunrise, you finish at sundown." }
  ],
  drinkOk: ["water", "still water", "sparkling water", "green tea", "black tea", "herbal tea", "matcha (unsweetened)"],
  drinkNo: ["Celsius", "energy drinks", "coffee w/ sugar", "juice", "soda", "alcohol", "protein shakes", "smoothies"],
  meals: [
    {
      when: "MORNING",
      title: "Tea + Water",
      cap: "open with hot water and tea. that\u2019s it.",
      kcal: "~0 kcal",
      items: ["1 cup green or black tea", "large glass of water", "more tea if hungry"]
    },
    {
      when: "LUNCH",
      title: "Yogurt",
      cap: "plain or plain greek. add nothing sweet.",
      kcal: "~150 kcal",
      items: ["1 cup plain / greek yogurt", "optional: a pinch of cinnamon", "tea on the side"]
    },
    {
      when: "DINNER \u2264 8PM",
      title: "Seafood, pick one",
      cap: "pollock, shrimp, or salmon sushi. under 500 kcal.",
      kcal: "\u2264 500 kcal",
      items: [
        "pan-seared pollock, lemon, greens",
        "grilled or steamed shrimp, no butter",
        "salmon sushi (6\u20138 pieces, no tempura)"
      ]
    }
  ],
  snack: {
    title: "One handful of raw almonds",
    body: "or: a cucumber with sea salt. or: a hard-boiled egg. pick <b>one</b>, eat it slow, move on.",
    kcal: "~150 kcal"
  },
  crew: [
    { name: "Iqram", handle: "@iqram", locked: true },
    { name: "Johnny", handle: "@johnny", locked: false },
    { name: "Kortina", handle: "@kortina", locked: false },
    { name: "the crew", handle: "+ open slot", locked: false },
    { name: "the crew", handle: "+ open slot", locked: false }
  ]
};
