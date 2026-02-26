const express = require("express");

const app = express();
app.use(express.json()); // middleware to parse the incoming request body as JSON


// title, description, date
// post,get,delete,put

const notes = [];

app.post("/notes", (req, res) => {
    notes.push(req.body);
    res.status(201).json({
        message: "Note added successfully",
    });
});

app.get("/notes", (req, res) => {
    res.status(200).json({
        message: "Notes fetched successfully",
        notes: notes
    });
});

// delete  /notes/:id

app.delete("/notes/:index",(req,res)=>{
     const index = req.params.index;

     delete notes[index];

     res.status(200).json({
        message: "Note deleted successfully",
     })
})

// patch /notes/:id

app.patch("/notes/:index",(req,res)=>{
    const index = req.params.index;
    const description = req.body.description;

    notes[index].description = description;

    res.status(200).json({
        message: "Note updated successfully",
    })
})

module.exports = app;
