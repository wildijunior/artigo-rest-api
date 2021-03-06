import mark01 from "./config/server.js";

const app = mark01();
const port = process.env.PORT || 8000;
const url = `http://localhost:${port}`;

app.listen(port, () => console.log(`listening on ${url}`));
