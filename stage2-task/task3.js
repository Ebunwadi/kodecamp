const fs = require('fs');
const path = require('path');

// const sourceDir = "../source-directory"; // Assuming this is a relative path
// const destinationDir = "../destination-directory"; 

// // Resolve the source and destination paths to absolute paths
// const resolvedSourceDir = path.resolve(__dirname, sourceDir);
// const resolvedDestinationDir = path.resolve(__dirname, destinationDir);

// function copyFile(sourcePath, destinationPath) {
//   const readStream = fs.createReadStream(sourcePath);
//   const writeStream = fs.createWriteStream(destinationPath);
//   readStream.pipe(writeStream);
// }

// function copyDirectories(source, destination) {
//   if (fs.existsSync(source)) { 
//     const sourceStats = fs.statSync(source);

//     if (sourceStats.isDirectory()) {
//       fs.mkdirSync(destination, { recursive: true });

//       const files = fs.readdirSync(source);
//       files.forEach(file => {
//         const sourcePath = path.join(source, file);
//         const destinationPath = path.join(destination, file);
//         copyDirectories(sourcePath, destinationPath);
//       });
//     } else if (sourceStats.isFile()) {
//       copyFile(source, destination);
//     }
//   }
// }


// function performCopy() {
//   try {
//     console.log('Starting copy.....');
//     copyDirectories(resolvedSourceDir, resolvedDestinationDir);
//     console.log('Copy completed');
//   } catch (error) {
//     console.log('Error during copy', error);
//   }
// }

// performCopy();


// function copyRecursive(sourceDir, destinationDir) {
//   try {
//     function copyDirectory(source, destination) {
//       fs.readdirSync(source).forEach((item) => {
//         const sourcePath = path.join(source, item);
//         const destinationPath = path.join(destination, item);

//         if (fs.lstatSync(sourcePath).isDirectory()) {
//           fs.mkdirSync(destinationPath, { recursive: true });
//           copyDirectory(sourcePath, destinationPath);
//         } else {
//           const sourceStream = fs.createReadStream(sourcePath);
//           const destinationStream = fs.createWriteStream(destinationPath);

//           sourceStream.on('error', (err) => {
//             console.error(`Error reading from ${sourcePath}: ${err.message}`);
//           });

//           destinationStream.on('error', (err) => {
//             console.error(`Error writing to ${destinationPath}: ${err.message}`);
//           });

//           sourceStream.pipe(destinationStream);
//         }
//       });
//     }

//     fs.mkdirSync(destinationDir, { recursive: true });
//     copyDirectory(sourceDir, destinationDir);
//     console.log('Copy completed successfully.');
//   } catch (err) {
//     console.error(`An error occurred: ${err.message}`);
//   }
// }

// const sourceDirectory = '/sourceDirectory';
// const destinationDirectory = '/destinationDirectory.txt';

// copyRecursive(sourceDirectory, destinationDirectory);


// const path = require('path');
// const fs = require('fs');
// const { Readable, Writable } = require('stream');

function copyRecursive(sourceDir, destinationDir) {
  try {
    function copyDirectory(source, destination) {
      fs.readdirSync(source).forEach((item) => {
        const sourcePath = path.join(source, item);
        const destinationPath = path.join(destination, item);

        if (fs.lstatSync(sourcePath).isDirectory()) {
          fs.mkdirSync(destinationPath, { recursive: true });
          copyDirectory(sourcePath, destinationPath);
        } else {
          const sourceStream = fs.createReadStream(sourcePath);
          const destinationStream = fs.createWriteStream(destinationPath);

          sourceStream.on('error', (err) => {
            console.error(`Error reading from ${sourcePath}: ${err.message}`);
          });

          destinationStream.on('error', (err) => {
            console.error(`Error writing to ${destinationPath}: ${err.message}`);
          });

          sourceStream.pipe(destinationStream);
        }
      });
    }

    fs.mkdirSync(destinationDir, { recursive: true });
    copyDirectory(sourceDir, destinationDir);
    console.log('Copy completed successfully.');
  } catch (err) {
    console.error(err);
  }
}

const sourceDirectory = './sourceDirectory'; // Replace with your source directory
const destinationDirectory = './destination'; // Replace with your destination director
copyRecursive(sourceDirectory, destinationDirectory);




