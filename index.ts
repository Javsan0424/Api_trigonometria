import express from 'express'

const app = express();
const Port = 3000

app.use(express.json())

app.use("/", (req,res) =>{
    res.send("Backend running")
})

app.listen(Port, () => console.log("Server running"))
