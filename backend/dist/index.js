import express from "express";
const app = express();
// routes
app.use(express.json());
app.get("/hello", (req, res, next) => {
    return res.send("Hello!");
});
app.post("/hello", (req, res, next) => {
    console.log(req.body.name);
    return res.send("Hello!");
});
app.put("/hello", (req, res, next) => {
    console.log(req.body.name);
    return res.send("Hello!");
});
app.delete("/hello", (req, res, next) => {
    console.log(req.body.name);
    return res.send("Hello!");
});
app.delete("/user/:userId", (req, res, next) => {
    console.log(req.params.userId);
    return res.send("Hello!");
});
app.listen(5000, () => console.log("Server Open on 5000"));
//# sourceMappingURL=index.js.map