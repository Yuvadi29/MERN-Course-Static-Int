# JavaScript: DOM, Event Handling, Overview of Nodejs and NodeJs Event Loop

## Event Handling
Event handling refers to the process of managing user interactions and other events in a web application. Events can be anything from a mouse click to a keypress, and handling these events properly is crucial for creating interactive applications.

#### Common Types of Events
##### Mouse Events: click, dblclick, mouseover, mouseout, mousemove

##### Keyboard Events: keydown, keyup, keypress

##### Form Events: submit, change, focus, blur

##### Window Events: load, resize, scroll, unload

#### Example:
```javascript
    <button onClick="alert('Button Clicked')">Click Here</button>
```

# DOM (Document Object Model)
The DOM is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content.

#### Key Concepts
**Document**: The entire HTML document.
**Element**: An individual component of the document (e.g., a div or p tag).
**Node**: The basic unit of the DOM. It can be an element, attribute, or text.
**Attributes**: Provide additional information about an element (e.g., class, id).

#### Manipulating DOM
=> By ID:
```javascript
    const element = document.getElementById('myElement');
```
=> By ClassName:
```javascript
   const elements = document.getElementsByClassName('myClass');
```
=> By TagName:
```javascript
    const elements = document.getElementsByTagName('div');
```
=> By CSS Selectors:
```javascript
    const element = document.querySelector('.myClass');
    const elements = document.querySelectorAll('.myClass');
```

### Modifying Elements
#### Changing Text Content:

```javascript
element.textContent = 'New Text';
```

#### Changing HTML Content:

```javascript
element.innerHTML = '<p>New HTML</p>';
```

#### Changing Styles:
```javascript
element.style.color = 'red';
```

# NodeJS
Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows developers to run JavaScript on the server side, making it possible to build scalable network applications. It's key features include:
1. Asynchronous and Event-Driven: Non-blocking I/O operations.
2. Single-Threaded: Uses a single thread to handle multiple clients via the event loop.
3. Cross-Platform: Runs on Windows, macOS, and Linux.