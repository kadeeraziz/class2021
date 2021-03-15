//requiring modules
const yargs = require('yargs');
var notes = require('./notes.js')


var argv = yargs.argv;

/* --Instruction--
    1. How can we add alias to our commands?
    2.Give the user feedback if the command is not completely provided. For example, if someone want to add a note with title only.
    3. Hint: use yarqs options.
*/


//* --code--

var titleOptions = {
    describe: 'Title of the note.',
    demand: true,
    alias: 't'
};
var bodyOptions = {
    describe: 'Body of the note.',
    demand: true,
    alias: 'b'
};
var argv = yargs.command('add', 'Add a new note', {
    title: titleOptions,
    body: bodyOptions
})
    .command('list', 'List all notes')
    .command('read', 'Read one node.', {
        title: titleOptions
    })
    .command('remove', 'Remove a note.', {
        title: titleOptions
    })
    .help()
    .argv;

//*-----



var command = argv._[0];

if (command == 'add') {
    note = notes.addNotes(argv.title, argv.body);
    if (note) {
        console.log('Note created');
        notes.logNote(note)
    } else {
        console.log('Note already exist.');
    }
}

else if (command === 'read') {

    /* --Instruction--
        1. Get a title from the command line and pass to the getNote() function inside notes.js.
        2. Print the note if the note is found
        3. Print 'Note note found.'
       
    */


    //---code-----

    allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s) `);
    allNotes.forEach((note) => {
        notes.logNote(note)
    });

    //--------

}
else if (command === 'list') {
    allNotes = notes.getAll();


    /* --Instruction--
        1. Print the number of notes (How many notes exist in the file.)
    */


    //* --Code---

    console.log(`Printing ${allNotes.length} note(s) `);

    allNotes.forEach((note) => {
        notes.logNote(note)
    });
}
else if (command === 'remove') {

    /* --Instruction--
        1. Get a title from the command line
        2. Pass the title to removeNote function in notes.js
        3. Give use the feedback wether or not the note was removed.
    */


    //* --Code---

    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? 'Note was removed' : 'note note found.';
    console.log(message);

    //


}
else {
    console.log('command is not recognized.')
}

