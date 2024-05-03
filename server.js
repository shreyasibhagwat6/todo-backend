const express = require('express');
const app = express();
const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient();

app.use(express.json());

// setup endpoints

app.get("/", (req, res) => {

})

app.listen(3002, () => console.log(`server running on port ${3002}`));