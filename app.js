const {
    readdir,
    readFile,
    writeFile,
  } = require("fs");
 
const {util} = require("util");

const {join, resolve} = require("path");

const inbox = join(__dirname, "inbox");
const outbox = join(__dirname, "outbox");
  
const reverseText = str =>
    str
    .split("")
    .reverse()
    .join("");


function readDirectory(dirpath, readCallback) {
  readdir(inbox, (error, files) => {
    if (error) {
        return console.log("Error: Folder inaccessible")
    } else { 
        readCallback(files);
    }
})
} 

function copyData(files, copyCallback) {
  files.forEach(file => {
    readFile(join(inbox, file), "utf8", (error, data) => {
      if (error) { return console.log("Error: File error");
      } else { 
      console.log(`current copied content for ${file}: ${data}`)
      copyCallback(data, file);
      }
    })
  })
} 

function transferData(data, newfile) {
    writeFile(join(outbox, newfile), reverseText(data), error => {
      if (error) { return console.log("Error: File could not be saved!"); 
      } else { 
      console.log(`${newfile} was successfully saved in the outbox!`); 
      } 
  })
}


readDirectory(inbox, (files) => {
  copyData(files, (data, newfile) => {
    transferData(data, newfile)
  })
})
