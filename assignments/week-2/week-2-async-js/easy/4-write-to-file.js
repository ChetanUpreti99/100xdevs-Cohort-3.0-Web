const fs = require("node:fs/promises");

function onWriteFile() {
    console.log("file write successfully.");

}

function onWriteFileError(err) {
    console.log(err.message);
}

function onReadFile(fileContent) {
    fs.writeFile("output.txt", fileContent)
        .then(onWriteFile)
        .catch(onWriteFileError)

    /**
     * Asynchronously append data to a file, creating the file if it does not yet exist. 
     * data can be a string or a <Buffer>.
     */

    /* fs.appendFile("output.txt", fileContent)
        .then(onWriteFile)
        .catch(onWriteFileError) */
}

function onReadFileError(err) {
    console.log(err.message);
}

function readFile(filePath) {
    fs.readFile(filePath, "utf-8")
        .then(onReadFile)
        .catch(onReadFileError);
}


readFile("file.txt");

