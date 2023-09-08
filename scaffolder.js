const fs = require('node:fs');

// Scaffold folder
const scaffoldFolder = './frontend-scaffold';

// HTML
const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./css/style.css">
    <title>Document</title>
</head>
<body>
    <h1>Welcome</h1>
    <script src="./js/script.js"></script>
</body>
</html>`;
const htmlFilePath = `${scaffoldFolder}/index.html`;

// Script
const scriptContent = 'alert("Welcome\");';
const scriptFolderName = `${scaffoldFolder}/js`;
const scriptName = `${scriptFolderName}/script.js`;

// Style
const styleContent = `
h1 {
    text-align: center;
}`
const styleFolderName = `${scaffoldFolder}/css`;
const styleName = `${styleFolderName}/style.css`;

// Images
const imageFolder = `${scaffoldFolder}/images`;

function createFolders() {
    // folderName = `${scaffoldFolder}/${foldername}`
    try {
        if (!fs.existsSync(scaffoldFolder)) {
            fs.mkdirSync(scaffoldFolder);
        }
        if (!fs.existsSync(imageFolder)) {
            fs.mkdirSync(imageFolder);
        }
        if (!fs.existsSync(scriptFolderName)) {
            fs.mkdirSync(scriptFolderName);
        }
        if (!fs.existsSync(styleFolderName)) {
            fs.mkdirSync(styleFolderName);
        }
    } catch (err) {
        console.error(err);
    }
}

function createFiles() {
    try {
        if (!fs.existsSync(htmlFilePath)) {
            fs.writeFileSync(htmlFilePath, htmlContent);
        }
        if (!fs.existsSync(styleName)) {
            fs.writeFileSync(styleName, styleContent);
        }
        if (!fs.existsSync(scriptName)) {
            fs.writeFileSync(scriptName, scriptContent);
        }
    } catch (err) {
        console.error(err);
    }
}

// This function creates 
function generateScaffold() {
    createFolders();
    createFiles();
    console.log("Frontend scaffold created successfully!")
}

generateScaffold()