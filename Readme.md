const { error } = require("node:console");
const fs = require("node:fs");

// fy - file system

// create file 
// fs.appendFile(path, data[, options], callback)
// fs.appendFile('hello.txt','Hello, World!',(err)=>{
//     if(err) throw err;
//     console.log('File created successfully!');
// })

// fs.writeFile(path, data[, options], callback)
// fs.writeFile('hello.txt','Hello, World!',(err)=>{
//     if(err) throw err;
//     console.log('File created successfully!');
// })

// issue : when you change the content of the file, it will overwrite the existing content. if you want to add new content to the existing content, you can use appendFile() method.

// ============================================

// create a folder 
// fs.mkdir(path[, options], callback)
// fs.mkdir("Pages",(err)=>{
//     if(err) throw err;
//     console.log('Folder created successfully!');
// })

// create a nested folder
// fs.mkdir(path[, options], callback)
// fs.mkdir("Css/Home/Style",{recursive:true},(err)=>{
//     if(err) throw err;
//     console.log('Nested Folder created successfully!');
// })

// ============================================

// read file
// fs.readFile(path[, options],fnc(e, data) callback)
// fs.readFile('hello.txt', 'utf8',(e, data)=>{
//     if(e) throw error;
//     console.log(data)
// })

// read folder
// fs.readdir(path[, options], fnc(e, files) {}, callback)
// fs.readdir('Css/Home',(e, files)=>{
//     if(e) throw error;
//     console.log(files)
// })
// as response yu get a array of filder ANS FILE NAME 

// ============================================

// copy file
// fs.copyFile(src, dest[, mode], callback, 'path with file name', 'path with new file name', callback)
// fs.copyFile('hello.txt','Css/Home/Style/copy.txt',(e)=>{
//     if(e) throw error;
//     console.log('File copied successfully!');
// })
// ============================================

// rename file
// fs.rename(oldPath(exiting),file name with Path, callback fnc)
// fs.rename("hello.txt","name.txt",(e)=>{
//     if(e) throw error;
//     console.log('File renamed successfully!');
// })

// ============================================

// nest file rename
// fs.rename("Css/Home/Style/copy.txt","Css/Home/Style/newcopy.txt",(e)=>{
//     if(e) throw error;
//     console.log('File renamed successfully!');
// })



// rename folder
// fs.rename("Css/Home/Style","Css/Home/Componets",(e)=>{  
//     if(e) throw error;
//     console.log('Folder renamed successfully!');
// })

// delete file
// fs.remove(path, callback)
// fs.rm('name.txt',(e)=>{
//     if(e) throw error;
//     console.log('File deleted successfully!');
// })

// delete folder
// fs.rm(path, { recursive: true }, callback)
// fs.rmdir('Css',{recursive:true, force:true},(e)=>{
//     if(e) throw error;
//     console.log('Folder deleted successfully!');
// })