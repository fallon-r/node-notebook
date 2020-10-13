const chalk = require('chalk')
const fs= require('fs'); 
 
 
 function getNotes() { return "Your notes..."}

// Add note brain
 const addNote = function(title, body){
    const notes = loadNotes()

    // check for dup titles 
    const duplicates = notes.filter(function(note){
        return note.title === title
    })

    if (duplicates.length === 0){

            // logic for pushing
            notes.push({
                title: title,
                body : body
            })
        
    
        saveNotes(notes);
        console.log(chalk.greenBright.inverse.italic("Note Saved Successfully"))
    } else{
        console.log(chalk.red.bold.inverse("Need unique title"))
    }


}
// -----add note end

// Save notes brain

const saveNotes= function(notes){
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync("notes.json", dataJSON)
}
// ----- save end 


// Load notes brain 
const loadNotes = function(){
    try {

        const dataBuffer = fs.readFileSync("notes.json")
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON)
    } catch (e){
        return []
    }




}
// ------ Load note end 



module.exports = {
    getNotes: getNotes,
     addNote: addNote
    }