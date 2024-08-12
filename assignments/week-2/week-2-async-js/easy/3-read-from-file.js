const fs = require("node:fs/promises");

function readFile(filePath) {
	fs.readFile(filePath, "utf-8")
		.then((fileContent) => {
			console.log("fileContent", fileContent);
		})
		.catch((err) => {
			console.log("err", err);
		})
	/**
	 * Run on main thread and hold main thread for long time.
	 */

	/* for (let index = 0; index < 1000000; index++) {
		console.log(index);
	} */
	console.log("END of function");
}


readFile("file.txt");

