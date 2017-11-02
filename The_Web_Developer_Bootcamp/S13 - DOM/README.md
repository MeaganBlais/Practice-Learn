## DOM - Document Object Model

- the interface between Javascript and HTML+CSS
- Javascript turns each HTML tag into an object we can manipulate
- Everything is stored in the *document* object use `console.dir(document)` to view

## What are examples where JS is used to manipulate the DOM? 
- games
- scrolling effects
- dropdown menus
- form validations
- interactivity
- animations

## SELECT an element then MANIPULATE

Select: 
`var h1 = document.querySelector("h1);`
returns an object and stores it in the h1 variable

Manipulate:
`h1.style.color = "pink";`

Other Select Methods: 
- document.getElementById()
- document.getElementsByClassName()
- document.getElementsByTagName()
- document.querySelectorAll()
