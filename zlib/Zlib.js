const fs = require('fs')
const zlib = require('zlib')
// const fileContent = fs.readFileSync('demy.txt','utf-8')


                    //***********compress the file*************//



// zlib.gzip(fileContent,(err,CompressedData)=>{
     //    if(err){
//           coole.log(err);
//           return;
//      }
          
//      fs.writeFileSync('sample.txt.gz',CompressedData)
//      console.log("file created succesfully")
// })
          
                    

               //***********compress the file*************//



// const fs = require('fs')
// const zlib = require('zlib')

const compressedData = fs.readFileSync('sample.txt.gz')

// zlib.gunzip(compressedData, (err, decompressedData) => {
//   if (err) {
//     console.log(err)
//     return
//   }

//   fs.writeFileSync('sample-decompressed.txt', decompressedData.toString())
//   console.log("file decompressed successfully")
// })



//📌 1. Compress a File using Streams + zlib


// const fs = require('fs');
// const zlib = require('zlib');


// const readStream = fs.createReadStream('input.txt');
// const writeStream = fs.createWriteStream('input.txt.gz');
// const gzip = zlib.createGzip();

// readStream
//   .pipe(gzip)
//   .pipe(writeStream)
//   .on('finish', () => {
//     console.log('File compressed successfully!');
//   });



// 🔁 2. Decompress a File using Streams + zlib


const fs = require('fs');
const zlib = require('zlib');


const readStream = fs.createReadStream('input.txt.gz');
const writeStream = fs.createWriteStream('output.txt');
const gunzip = zlib.createGunzip();

readStream
  .pipe(gunzip)
  .pipe(writeStream)
  .on('finish', () => {
    console.log('File decompressed successfully!');
  });





