const express = require('express')
const database=require("./database")
const app = express()
app.set("view engine", "ejs")//

app.get('/', (req, res) => {
    res.render("index.ejs")
})
app.get("/notes", (req, res) => {
    const notes=database.getNotes();
    res.render("notes.ejs", { notes })
})

app.get("/notes/:id", (req, res) => {
    const id=+req.params.id; //+ converts it to number
    const note=database.getNote(id);
    if(!note){
        res.status(404).render("note404.ejs")
        return
    }
    res.render("note.ejs",{note
    });
})


app.use(express.static("public"))
const port = 8080


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
