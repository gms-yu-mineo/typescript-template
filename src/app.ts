import express from 'express'
import onFinished from 'on-finished'
const app = express();
const port = 3000;

app.use((_req, res, next) => {
  onFinished(res,  (_err, res)  => {
    console.log(res);
  });
  next();
});

app.get('/', (_req, res)  => {
  res.status(200).json({result: 'SUCCESS!'});
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
