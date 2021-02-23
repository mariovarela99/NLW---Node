import express from "express";

const app = express();

app.get("/", (request, response) => {
  return response.json({ message: "Hello WLRD NLW 04" });
});

app.post("/", (request, response) => {
  return response.json({ message: "Todos os dados foram salvos com sucesso." });
});

app.listen(3333, () => console.log("Server is Running..."));
