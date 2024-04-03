const Koa = require("koa");
const app = new Koa();

app.use(async (ctx, next) => {
  console.log(ctx);
  await next();
});

app.use(async (ctx) => {
  ctx.body = "hello koa";
});

app.listen(8080, () => {
  console.log("running...");
});
