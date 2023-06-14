# Services-Front-Vanilajs

This is part of [services tool](https://github.com/nuxion/services)

It could be used for `frontend` part of the service. 

This template itsn't a pure vanilla project because it includes support for:

- alpinejs
- taildwindcss
- polyfills
- htmx [not added but should be easy to add]

## Quickstart

A easy way to copy the files into your proyect is using [degit](https://github.com/Rich-Harris/degit).

1- We our project created the first step is clonning the frontend code:

```
degit https://github.com/nuxion/services-front-vanillajs front
```

2- After the files are copied, you will need to check the `tailwind.config.cjs` file,  uncomment line 4 and modify it to your project: 

```
content: ["./src/**/*.{html,js,svelte,ts}", "../<your-app>/templates/**/*.html"],
```


3- Finally, install the node dependencies:

```
cd front/
npm install
```

## Testing template locally

It's possible to test this template locally using the `http-server` of nodejs: 

```
npx http-server --cors 
```

By default it will server files located in the `public/` folder.

You will need to have both servers running:  vite server and http-server

Then in the browser go to the address served by `http-server`

## Resources

- [degit](https://github.com/Rich-Harris/degit).
- [services tool](https://github.com/nuxion/services)
- [backend integration](https://vitejs.dev/guide/backend-integration.html)

