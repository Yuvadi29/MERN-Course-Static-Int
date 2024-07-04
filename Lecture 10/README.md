# JavaScript: File Handling

File handling in JavaScript can be done using different techniques depending on the environment in which JavaScript is running. In a web browser, file handling is typically done using the File API, while in a Node.js environment, the `fs` (File System) module is used.

## File Handling in the Browser

The File API provides the ability to interact with files directly from web applications. It allows users to select files, read their contents, and upload them to a server.

### Reading Files

#### Using the FileReader API

The `FileReader` object allows web applications to asynchronously read the contents of files (or raw data buffers) stored on the user's computer.

#### Example

```javascript
document
  .getElementById("fileInput")
  .addEventListener("change", function (event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
      console.log(e.target.result);
    };

    reader.readAsText(file);
  });
```

### Uploading Files

#### Using FormData and XMLHttpRequest

Files can be uploaded to a server using FormData and XMLHttpRequest.

#### Example

```javascript
document
  .getElementById("fileInput")
  .addEventListener("change", function (event) {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("file", file);

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "/upload", true);

    xhr.onload = function () {
      if (xhr.status === 200) {
        console.log("File uploaded successfully");
      } else {
        console.error("File upload failed");
      }
    };

    xhr.send(formData);
  });
```

## File Handling in Node.js

Node.js provides a built-in module called fs (File System) to interact with the file system. It allows you to perform various file operations, such as reading, writing, and deleting files.

### Reading Files

Using fs.readFile
The fs.readFile method reads the entire contents of a file.

#### Example

```javascript
const fs = require("fs");

fs.readFile("example.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
```

### Writing Files

#### Using fs.writeFile

The fs.writeFile method writes data to a file, replacing the file if it already exists.

#### Example

```javascript
const fs = require("fs");

const data = "Hello, world!";
fs.writeFile("example.txt", data, "utf8", (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("File written successfully");
});
```

### Appending to Files

#### Using fs.appendFile

The fs.appendFile method appends data to a file. If the file does not exist, it is created.

#### Example

```javascript
const fs = require("fs");

const data = "Hello, world!";
fs.appendFile("example.txt", data, "utf8", (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("Data appended successfully");
});
```

### Deleting Files

#### Using fs.unlink

The fs.unlink method deletes a file.

#### Example

```javascript
const fs = require("fs");

fs.unlink("example.txt", (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("File deleted successfully");
});
```
