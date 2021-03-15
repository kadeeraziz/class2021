const fs = require('fs');

var fetchNote = () => {
    try {

        var notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);

    } catch (error) {
        return [];
    }
};

var saveNote = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNotes = (title, body) => {
    var notes = fetchNote()
    var note = {
        title,
        body
    };

    /* --instruction
        check if a note already exists?
        if yes; then return 'true'
        if not; save the note. and print the newly added note.
    */


    //* --code

    var duplicateNotes = notes.filter(function (note) {
        return note.title === title;
    });
    if (duplicateNotes.length === 0) {
        notes.push(note);
        saveNote(notes)
        return note;
    }

    //*/


}

var getAll = () => {
    return fetchNote();
}

var getNote = (title) => {

    /* --Instruction--
        1. Fetch the notes
        2. Filter notes get the one with title of argument
        3. Return the note if found it.
    */

    //* --Code--

    let notes = fetchNote();
    note = notes.filter((note) => note.title === title);
    return note[0];

    //*/

};

var removeNote = (title) => {
    /* --Instruction--
      1. fetch the notes
      2. filter notes, remove the one with title of the argument.
      3. save new notes array.
    */


    ///* --Code--

    let notes = fetchNote();
    let filteredNotes = notes.filter(function (note) {
        return note.title !== title;
    });
    saveNote(filteredNotes);
    return notes.length !== filteredNotes.length;

    //*/

};

var logNote = (note) => {
    console.log('--');
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
}

module.exports = {
    addNotes,
    getAll,
    logNote,
    removeNote,
    getNote
}
