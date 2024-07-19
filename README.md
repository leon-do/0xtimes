# 0xTimes.com

## Getting Started

```bash
npm install
npm run dev
```

## Contribution

**Add a `your-file.html` file in `public/html`**

## How it works

On build:
- A function in `src/utils/getPages.ts` will
    - list all of the `html` files
    - sort them by reverse chronological order
    - then return the list as `Page[]`
- `src/app/page.tsx` will get `Page[]` to display each `Card`
- `src/components/Card.tsx` will render and style the individual card