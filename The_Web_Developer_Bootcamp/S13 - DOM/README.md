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

Some other Select Methods: 
- document.getElementById()
- document.getElementsByClassName()
- document.getElementsByTagName()
- document.querySelectorAll()

Manipulate:
- change an element's style `h1.style.color = "pink";`
- add/remove a class `p.classList.remove("big");` OR `p.classList.remove("big");` OR `p.classList.toggle("big");`
- change the content of a tag 
  - text content
    - `var tag = document.querySelector("p");`
    - `tag.textContent // "Corgi mixes are very adorable!"`
    - `tag.textContent = "Corgi mixes are super duper adorable!";`
  - html content
    - `var ul = document.querySelector("ul");`
    - `tag.innerHTML // "Corgi mixes are <strong>very</strong> adorable!"`
    - `tag.innerHTML = "Corgi mixes are <strong>super duper</strong> adorable!"`
- change attributes(src, href, ...)
  - image
    - `var img = document.querySelector("img")`
    - `img.setAttribute("src", "http://www.gstatic.com/webp/gallery/4.jpg")`
  - link
    - `var link = document.querySelector("a");`
    - `link.getAttribute("href"); // "www.google.ca"`
    - `link.setAttribute("href", "http://www.dogs.com");`
