const express = require('express');
const Notes = require('../modules/Note');
const fetchuserid = require('../middlewere/fetchuserid');
const { body, validationResult } = require('express-validator');
// const Note = require('../modules/Note');
const router = express.Router();


// Routes 1: fetch all notes of  user : get '/api/notes/fetchallnotes' .login requried
router.get('/fetchallnotes' ,fetchuserid , async (req, res) =>{
   

    try{

    let notes = await Notes.find({user:req.user.id})
    res.json(notes)

    } catch (error) {

        console.error(error.message)
        res.status(500).send("internal error accur ")

}
     
});


// Routes 2: Create or add a new notes of  user using : Post '/api/notes/createNotes' .login requried
router.post('/createNotes' ,[
    body('title', 'title must be atleast 3 charactor').isLength({ min: 3 }),
    body('description', 'description must be atleast 5 charactor').isLength({ min: 5 })
],fetchuserid , async (req, res) =>{

 try {

    const { title, description, tag} = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    };

    const note =await new Notes({
        title, description, tag, user: req.user.id
    })
    const saveNote = await note.save();

    res.json(saveNote)


    
} catch (error) {

    console.error(error.message)
    res.status(500).send("internal error accur ")

}

     });


     // Routes 3: update existing notes of  user using : Put '/api/notes/updatenotes' .login requried
router.put('/updatenotes/:id' ,fetchuserid , async (req, res) =>{

    const {title, description, tag} = req.body;
   //Create a new newNote object
   let newNote= {};
   if(title){newNote.title = title};
   if(description){newNote.description = description};
   if(tag){newNote.tag = tag};

   //Find the note to be updated and update it
   let note = await Notes.findById(req.params.id);
   if(!note){
    return res.status(404).send("Not Found")
   }
   if(note.user.toString() !== req.user.id){
    return res.status(401).send("Not Allowed")

   }

   note = await Notes.findByIdAndUpdate(req.params.id, {$set: newNote}, {new:true});
   res.json({note});

     });

module.exports = router