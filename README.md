# React CI/CD Docker Demo

Source React don gian de hoc CI/CD va Docker.

## Stack

- React + TypeScript
- Vite
- TailwindCSS
- Docker multi-stage build
- GitHub Actions CI mau

## Chay local

```bash
npm install
npm run dev
```

## Kiem tra nhu CI

```bash
npm run lint
npm test
npm run build
```

## Chay bang Docker

```bash
docker build -t react-ci-cd .
docker run --rm -p 8080:80 react-ci-cd
```

Mo app tai `http://localhost:8080`.

## CI/CD

Workflow mau nam o `.github/workflows/ci.yml`.

Pipeline hien tai:

1. Checkout source
2. Cai Node.js 22
3. `npm ci`
4. `npm run lint`
5. `npm test`
6. `npm run build`
7. `docker build`

Sau khi hoc xong CI, co the mo rong CD bang cach push Docker image len Docker Hub/GHCR va deploy len server.
