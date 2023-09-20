# Lesson 3.4: DOM Manipulation, Part 1

Welcome to the reference guide for Lesson 3.4! Here you'll find key points and code snippets to help you recall and further understand the concepts we covered. Use this as a tool to review and reinforce your learning.

---

## Overview

The Document Object Model (DOM) allows us to interact with and modify the structure, style, and content of websites using JavaScript. In this lesson, we learned about two properties: `.innerHTML` and `.src`.


## `.innerHTML` Property

- **Definition**: The `.innerHTML` property allows you to get or change the content of an HTML element.
  
- **Usage**:
  ```javascript
  element.innerHTML = "New content here!";
  ```

- **Example**:
  If you have an HTML paragraph:
  ```html
  <p id="demo">Hello, World!</p>
  ```

  Using JavaScript, you can change its content:
  ```javascript
  document.getElementById("demo").innerHTML = "I'm different!";
  ```

## `.src` Property

- **Definition**: The `.src` property allows you to get or set the source URL of an `<img>` element.

- **Usage**:
  ```javascript
  imageElement.src = "newImageURL.jpg";
  ```

- **Example**:
  Given an HTML image element:
  ```html
  <img id="pic" src="oldImageURL.jpg">
  ```

  Using JavaScript, you can change its source URL:
  ```javascript
  document.getElementById("pic").src = "newImageURL.jpg";
  ```


## Manipulating the DOM with Events

To make your changes more dynamic, you can attach events.

- **Example**:
  ```javascript
  let button = document.querySelector("button");
  let header = document.querySelector("h1");
  
  button.addEventListener("click", function() {
      header.innerHTML = "This is important!";
  });
  ```

## Event Types

There are many types of events you can listen for, including:
- "click"
- "mouseover"
- "mouseout"
- "keydown"
- "keypress"

Usage:
```javascript
element.addEventListener("eventtype", function() { 
  // actions to be executed 
});
```

Happy coding!