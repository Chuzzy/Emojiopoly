import * as express from "express";

let app = express();

app.use(express.static("public"));

app.get('/', (_, res) => res.send('Hello World!'));

app.listen(3000, () => console.log('Example app listening on port 3000!'));