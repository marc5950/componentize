# Fra HTML til Astro-components

1. Kig i mappen src/pages og find HTML-filen `componentize.html`. Opgaven er at konvertere denne HTML-fil til Astro-components.

2. Fokuser på at lave følgende components i en ny mappe under src/components:

- `Header.astro`
- `Hero.astro`
- `CardSection.astro`
- `Card.astro`
- `Button.astro` (&lt;a&gt;)
- `Footer.astro`

3. Importer de nye components i `index.astro` og brug dem i stedet for de tilsvarende HTML-elementer.

4. Kør `npm run dev` og tjek at alt stadig virker.

5. Flyt nu mappen styles fra public til src, så CSS'en bliver optimeret af Astro.

```
/
├── public/
│   └── styles/
├── src/
│   └── pages/
│       └── componentize.html
│       └── index.astro
└── README.md
```

## 🧞 Relevante kommandoer

Alle kommandoer køres fra roden af projektet, fra den indbyggede terminal i VS Code:

| Kommando      | Handling                                    |
| :------------ | :------------------------------------------ |
| `npm install` | Installs dependencies                       |
| `npm run dev` | Starts local dev server at `localhost:4321` |
