# grenzenlose-kinderhilfe-ui

Website of the Grenzenlose Kinderhilfe / Határtalan Segítség foundation.

```bash
pnpm install
pnpm dev
```

The articles, videos and supported institutions are maintained in a public
Google Spreadsheet — see [docs/content-spreadsheet.md](docs/content-spreadsheet.md)
for the setup and the column rules.

The figures in the "what we achieved together" block, the partner list, the
running campaigns and the foundation's contact and bank details live in
[src/data/](src/data/) — one file each, so they can be corrected without
touching a component. The wording of the campaign and support cards is in
`public/locales/*/translation.json`.
