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
  
  
//Proposal #2 to solve callback hell: with promises.

const readDirectory = (dirpath) => {
  return new Promise((resolve, reject) => {
    readdir(dirpath, (error, files) => {
      if (error) reject("Error: Folder inaccessible")
      resolve(files);
    })
  })
} 
  
const copyData = (file) => {
  return new Promise((resolve, reject) => {
    readFile(join(inbox, file), "utf8", (error, data) => {
      if (error) reject("Error: File error");
      resolve(data);
    })
  })
} 
  
const transferData = (data, newfile) => {
  return new Promise((resolve, reject) => {
    writeFile(join(outbox, newfile), reverseText(data), error => {
      if (error) reject("Error: File could not be saved!"); 
      resolve(`${newfile} was successfully saved in the outbox!`); 
    })
  })
}

  
readDirectory(inbox)
  .then((files) => files.forEach((file) => copyData(file)
    .then((data) => transferData(data, file)
      .then((res) => console.log(res)
      ))))
  .catch((err) => console.log(err));