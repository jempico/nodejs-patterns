const {
  readdir,
  readFile,
  writeFile,
} = require("fs");

const {join, resolve} = require("path");

const inbox = join(__dirname, "inbox");
const outbox = join(__dirname, "outbox");

const reverseText = str =>
  str
  .split("")
  .reverse()
  .join("");


//Proposal #1 to solve callback hell: estructuring callbacks.

const readDirectory = (dirpath, readCallback) => {
  readdir(dirpath, (error, files) => {
    if (error) return readCallback("Error: Folder inaccessible")
    readCallback(null, files);
  })
} 

const copyData = (file, copyCallback) => {
  readFile(join(inbox, file), "utf8", (error, data) => {
    if (error) return copyCallback("Error: File error");
    copyCallback(null, data);
  })
} 

const transferData = (data, newfile) => {
  writeFile(join(outbox, newfile), reverseText(data), error => {
    if (error) return console.log("Error: File could not be saved!"); 
    console.log(`${newfile} was successfully saved in the outbox!`); 
  })
}


readDirectory(inbox, (err, files) => { 
  if (err) console.log(err)
    files.forEach((file) => { 
      copyData(file, (err, data) => { 
        if (err) console.log(err)
          transferData(data, file)
      }) 
    }) 
})





