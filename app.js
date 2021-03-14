const {
    readdir,
    readFile,
    writeFile,
    fstat
  } = require("fs");
  
  const {
    join, resolve
  } = require("path");
const { rootCertificates } = require("tls");
  
  const inbox = join(__dirname, "inbox");
  const outbox = join(__dirname, "outbox");
  let newfiles = [];   
  const reverseText = str =>
    str
    .split("")
    .reverse()
    .join("");


const readDirectory = new Promise ((resolve, reject) => {
    readdir(inbox, (error, files) => {
        if (error) {
            reject(error);
            console.log("Error: Folder inaccessible")
        } else { 
            resolve(files);
        }
  })
})

 const reverseFiles = (filesArr) => {
    filesArr.forEach(file => {
        readFile(join(inbox, file), "utf8", (error, data) => {
          if (error) {
              return console.log("Error: File error");            
          } else {
            writeFile(join(outbox, file), reverseText(data), error => {
                if (error) { 
                    return console.log("Error: File could not be saved!");
                } else { 
                    console.log(`${file} was successfully saved in the outbox!`);
                }
        });
        }});
      });
    }

    readDirectory.then(res => reverseFiles(res))
        .catch(err => {console.log(err)});