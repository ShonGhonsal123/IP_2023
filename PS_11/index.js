const http = require('http')
const fs = require('fs')
const express = require('express')

http.createServer((req, res)=>{
    res.write('Hello World')
    res.end("Hello")
}).listen(5000);

const filePath = 'test.txt'
const newFilePath = 'test2.txt'

function createFile(){
    fs.writeFile(filePath, 'Hello World', (err)=>{
        if(err){
            console.log(err)
        }else{
            console.log('File created')
        }
    })
}
function accessFile(){
    fs.access(filePath, (err)=>{
        if(err){
            console.log(err)
        }else{
            console.log('File exists')
        }
    })
}
function openFile(){
    fs.open(filePath, 'r', (err, fd)=>{
        if(err){
            console.log(err)
        }else{
            console.log('File opened')
        }
    })
}
function appendToFile(){
    fs.appendFile(filePath, 'Hello appended', (err)=>{
        if(err){
            console.log(err)
        }else{
            console.log('Data appended successfully!')
        }
    })
}
function readFile(){
    fs.readFile(filePath, 'utf8', (err, data) => {
        if(err){
            console.log(err)
        }else{
            console.log(data)
        }
    })
}
function deleteFile(){
    fs.unlink(filePath, (err)=>{
        if(err){
            console.log(err)
        }else{
            console.log('File deleted')
        }
    })
}
function renameFile(){
    fs.rename(filePath, newFilePath, (err)=>{
        if(err){
            console.log(err)
        }else{
            console.log('File renamed')
        }
    })
}
function copyFile(){
    fs.copyFile(newFilePath, 'copy.txt', (err)=>{
        if(err){
            console.log(err)
        }else{
            console.log('File copied')
        }
    })
}


copyFile()