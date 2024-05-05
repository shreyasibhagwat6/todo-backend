const express = require('express');
const app = express();
const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient();

app.use(express.json());

// setup endpoints

app.get("/", async (req, res) => {
    const allTodos = await prisma.todos.findMany();
    res.json(allTodos);
})

app.post("/", async (req, res) => {
    const newTodo = await prisma.todos.create({ data: req.body });
    res.json(newTodo);
})

app.put("/:id", async (req, res) => {
    const id = req.params.id;
    const updatedTodo = req.body.todo;
    const newTodo = await prisma.todos.update({ 
        where: {id: parseInt(id)},
        data: {todo: updatedTodo},
    });
    res.json(newTodo);
})

app.delete("/:id", async (req, res) => {
    const id = req.params.id;
    const newTodo = await prisma.todos.delete({ 
        where: {id: parseInt(id)},
    });
    res.json(newTodo);
})

app.listen(3002, () => console.log(`server running on port ${3002}`));