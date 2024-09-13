# Performance tests

> This package requires K6 to be installed.

Start up one of the service versions below.

run `npm run test` to start the k6 tests.

## astro

```
cd ./astro
npm ci
npm run build
npm run preview
```

## express

```
cd ./express
npm ci
npm run dev
```

## nextjs

```
cd ./nextjs
npm ci
npm run build
npm run start
```

## remix

```
cd ./remix
npm ci
npm run build
npm run start
```

## sveltekit

```
cd ./sveltekit
npm ci
npm run build
npm run preview
```

## vue-express

```
cd ./vue-express/be
npm ci
npm run start
```

```
cd ./vue-express/ui
npm ci
npm run build
npm run preview
```
