Includes compression. helment, and cors

# levvel-starter-express

This project is an example implementation of a express running on node

## Getting Started

```bash
git clone git@github.com:GetLevvel/levvel-starter-react.git
cd levvel-starter-react
npm install
DEBUG=node-express:* npm start
```

Server will be running at http://localhost:3000

### Tradeoffs

- **Scalability** - 

### TL;DR

Use SSR for any public-facing applications that you are exposing to the general internet. Use CSR for internal applications where you don't care about SEO or social media.

## Key Libraries

### Cors

This project uses a library called [Cors](https://github.com/expressjs/cors) for providing a Connect/Express middleware that can be used to enable CORS with various options.

### Helmet

Using [Helmet](https://github.com/helmetjs/helmet) helps you secure your Express apps by setting various HTTP headers.

### Compression

[Compression](https://github.com/expressjs/compression) is a library to make requests lighter and load faster, responsible for compacting the JSON responses and also the static files which your application will serve via GZIP format; a compatible format to several browsers.

### Morgan

[Morgan](https://github.com/expressjs/morgan) is a middleware for generating request’s logs in the server.