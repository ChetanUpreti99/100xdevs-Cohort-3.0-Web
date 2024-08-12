const fs = require("node:fs/promises");


function removeExtraSpace(content) {

    let modifyStr = content.split(" ").reduce((ini, str) => {
        if (str.length > 0) {
            ini += str + " "
        }
        return ini;
    }, "")
    return modifyStr;
}



function readFile(filePath) {
    fs.readFile(filePath, "utf-8")
        .then((result) => {
            const modifiedContent = removeExtraSpace(result);
            fs.writeFile(filePath, modifiedContent)
                .then(() => {
                    console.log(`write successfully!`);
                })
        }).catch((err) => {
            console.log(err)
        });
}

readFile("file.txt");