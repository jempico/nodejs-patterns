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
  
  
//Proposal #3 to solve callback hell: with async await

  function readDirectory(dirpath) {
    return new Promise((resolve, reject) => {
      readdir(dirpath, (error, files) => {
         if (error) {
           reject("Error: Folder inaccessible")
        } else { 
          resolve(files);
        }
      })
    })
  } 
  
  function copyData(file) {
    return new Promise((resolve, reject) => {
   
        readFile(join(inbox, file), "utf8", (error, data) => {
          if (error) { reject("Error: File error");
          } else { 
            resolve(data);
          }
        })
    })
  } 
  
  function transferData(data, newfile) {
    return new Promise((resolve, reject) => {
    
    writeFile(join(outbox, newfile), reverseText(data), error => {
      if (error) { reject("Error: File could not be saved!"); 
      } else { 
        resolve(`${newfile} was successfully saved in the outbox!`); 

      } 
  })
})
}


async function reverseFiles(x) {
    try {
        let files = await readDirectory(x);

        files.forEach(async (file) => {
            const copiedFiles = await copyData(file)
            const transferedFiles = await transferData(copiedFiles, file)
            console.log(transferedFiles);
        })  
    } catch (err) {
        console.log(err);
    }   
} 

reverseFiles(inbox);
