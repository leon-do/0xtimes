# 0xTimes.com

## Getting Started

```bash
npm install
npm run dev
```

## Page Contribution

To add pages, in `public/html` add a `.html` file with the naming convention

```
<HOST_URL>+<Article-Name-With-Hyphens>.html>
or
filecoin.io+Why-Filecoin-is-Changing-Storage-Ecosystem.html
```

## Image Contribution

To add logos, edit `public/json/logos.json`

- The key is the host url
- The value is the base64

```JSON
{
    <HOST_URL>: <BASE_64>,
    "filecoin.io": "data:image/png;base64,iVBORw0KGgo..."
}
```

## How it works

On build:

- A function in `src/utils/getPages.ts` will
  - list all of the `html` files
  - sort them by reverse chronological order
  - then return the list as `Page[]`
- `src/app/page.tsx` will get `Page[]` to display each `Card`
- `src/components/Card.tsx` will render and style the individual card
