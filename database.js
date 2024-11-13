
const notes = [
    {
        id: 1,
        title: "First",
        timestamp: Date.now(),
        contents: "If you need to use the dollar character ($) in a path string, enclose it escaped within ([ and ]). For example, the path string for requests at “/data/$book”, would be “/data/([\$])book”.,You define routing using methods of the Express app object that correspond to HTTP methods; for example, app.get() to handle GET requests and app.post to handle POST requests. For a full list, see app.METHOD. You can also use app.all() to handle all HTTP methods and app.use() to specify middleware as the callback function (See Using middleware for details)."
   },
    {
        id: 2,
        title: "Second",
        timestamp: Date.now(),
        contents: " you need to use the dollar character ($) in a path string, enclose it escaped within ([ and ]). For example, the path string for requests at “/data/$book”, would be “/data/([\$])book”.,You define routing using methods of the Express app object that correspond to HTTP methods; for example, app.get() to handle GET requests and app.post to handle POST requests. For a full list, see app.METHOD. You can also use app.all() to handle all HTTP methods and app.use() to specify middleware as the callback function (See Using middleware for details)."
    },
    {
        id: 3,
        title: "Third",
        timestamp: Date.now()+2,
        contents: " you need to use the dollar character ($) in a path string, enclose it escaped within ([ and ]). For example, the path string for requests at “/data/$book”, would be “/data/([\$])book”.,You define routing using methods of the Express app object that correspond to HTTP methods; for example, app.get() to handle GET requests and app.post to handle POST requests. For a full list, see app.METHOD. You can also use app.all() to handle all HTTP methods and app.use() to specify middleware as the callback function (See Using middleware for details)."
    }
]

 function getNotes(){
    return notes;
}
exports.getNotes=getNotes;
function getNote(id){
    return notes.find(note=>note.id===id);
}
exports.getNote=getNote;
