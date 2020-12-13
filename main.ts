import * as express from "express";
import * as bodyParser from "body-parser";
import { add } from "@api/add";
import { AddRequest } from "@request/addRequest";

const app = express();
const port = 8080;

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

app.post("/add", (req, res) => {
  console.log("add was called");
  console.log("request: ", req.body);
  const request = req.body as AddRequest;
  const response = add(request);
  console.log("response:", response);
  res.send(JSON.stringify(response));
});

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
