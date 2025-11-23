//you have to write a node.js program to clear clutter inside of a directory and organize the contentes of that directory into different folders.

//for example, these files becomes:

// 1. name.jpg
// 2. name.png
// 3. this.pdf
// 4. deep.zip
// 5. this.zip
// 6. cat.jpg
// 7. deep.pdf

//this:
// jpg/travel1.jpg, jpg/travel2.jpg
// png/name.png
// pdf/this.pdf, pdf/deep.pdf
// zip/deep.zip, zip/this.zip

const fs = require("fs");
const path = require("path");

// Only organize these extensions
const allowedExtensions = ["jpg", "png", "pdf", "zip"]; // Add/remove as needed

// Target directory (current folder)
const targetDirectory = __dirname;

function organizeFiles(directoryPath) {
  fs.readdir(directoryPath, (err, files) => {
    files.forEach((file) => {
      const fullPath = path.join(directoryPath, file);

      fs.stat(fullPath, (err, stats) => {
        if (err) {
          console.error(`Error reading file stats for ${file}:`, err.message);
          return;
        }

        if (stats.isFile()) {
          const ext = path.extname(file).slice(1).toLowerCase();

          // Only move allowed extensions
          if (!allowedExtensions.includes(ext)) return;

          const folderPath = path.join(directoryPath, ext);

          // Create folder if it doesn't exist
          if (!fs.existsSync(folderPath)) {
            fs.mkdirSync(folderPath);
          }

          const destPath = path.join(folderPath, file);

          fs.rename(fullPath, destPath, (err) => {
            if (err) {
              console.error(`Error moving ${file}:`, err.message);
            } else {
              console.log(`Moved ${file} → ${ext}/`);
            }
          });
        }
      });
    });
  });
}

// Run the function
organizeFiles(targetDirectory);
