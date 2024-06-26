const Koa = require("koa");
const app = new Koa();
const PORT = 8080;

app.use(async (ctx, next) => {
  const start = Date.now();
  const mSecond = Date.now() - start;
  console.log(`${ctx.method} ${ctx.url} - ${mSecond}ms`);
  await next();
});

app.use(async (ctx) => {
  ctx.body = "This is from middleware file";
});

app.listen(PORT, () => {
  console.log(`server listening on port : ${PORT}`);
});
