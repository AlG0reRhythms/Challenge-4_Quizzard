//Question bank

let questionBank = [
  {
    no: 1,
    question: "What is the benefit of the .addEventListener() method?",
    answer:
      "The .addEventListener() method is good for large code and it can be used to add multiple event handlers to a specific event.",
    options: [
      "the .addEventListener() method must be paired with a .removeEventListener() method.",
      "The .addEventListener() method is only useful for large code.",
      "The .addEventListener() method can use anonymous functions.",
      "The .addEventListener() method is good for large code and it can be used to add multiple event handlers to a specific event.",
    ],
  },
  {
    no: 2,
    question: "What is an event on the web?",
    answer:
      "Events are user interactions and browser manipulations on the document object model.",
    options: [
      "Events are interactions between the client device and a server.",
      "Parties that people can go to on the internet",
      "Yes, the click and mousedown events fire the same way.",
      "Events are user interactions and browser manipulations on the document object model.",
    ],
  },
  {
    no: 3,
    question:
      "Which Javascript method can return the first element that matches a specified selector?",
    answer: ".querySelector()",
    options: [
      ".querySelectorAll()",
      ".getElementByClass()",
      ".querySelector()",
      ".getElementById()",
    ],
  },

  {
    no: 4,
    question: "Which of the following is true about DOM nodes",
    answer:
      "The DOM nodes of type Element allow acces to the same attributes available to HTML elements.",
    options: [
      "If an HTML anchor element has an href attribute, that will not be accessible through the DOM.",
      "The DOM nodes of type Text allow access to the same attributes available to HTML elements.",
      "The DOM nodes of type Element allow acces to the same attributes available to HTML elements.",
      "If an HTML element has a class attribute, that will not be accessible through the DOM.",
    ],
  },
  {
    no: 5,
    question: "Which of the following is NOT correct about DOM nodes",
    answer: "All the nodes of a DOM tree must be of the same type.",
    options: [
      "All the nodes of a DOM tree must be of the same type.",
      "The root node is the top-most node of the DOM tree.",
      "An HTML element can be represented by a DOM tree.",
      "The text of an HTML element can be represented by a DOM node.",
    ],
  },
  {
    no: 6,
    question:
      "Given 'const elem=document.body' what does the elem variable contain?",
    answer: "It contains the reference to the contents of the body element.",
    options: [
      "It contains the text 'document body'.",
      "It contains the location of the HTML document.",
      "It contains the reference to the contents of the body element.",
      "It contrains no value.",
    ],
  },
  {
    no: 7,
    question:
      "Which property can be used to set an anonymous function to run when the element is clicked?",
    answer: "element.onclick",
    options: [
      "element.onclick",
      "element.innerHTML",
      "element.removeChild",
      "element.style",
    ],
  },
  {
    no: 8,
    question:
      "How would you set the inner HTML of the following <p> element using Javascript <p id='paragraph'></p>",
    answer: "document.getElementById('paragraph').innerHTML = 'Hello World!';",
    options: [
      "(paragraph).innerHTML = 'Hello World!';",
      "document.getElementById('paragraph').style.display = 'Hello World!';",
      "document.getElementById('paragraph').innerHTML = 'Hello World!';",
      "document.getElementById('paragraph')= 'Hello World!';",
    ],
  },
  {
    no: 9,
    question:
      "How do you set the value of the CSS property background-color using Javascript?",
    answer: "element.style.backgroundColor = 'red'",
    options: [
      "element.style.color = 'red';",
      "There is no way to set the background-color CSS property of an element using Javascript.",
      "element.style.backgroundColor = 'red';",
      "element.style.backgroundColor = 'red';",
    ],
  },
  {
    no: 10,
    question: "What can NOT be done with the help of a DOM",
    answer: "Permanently change the content of the source HTML file.",
    options: [
      "Permanently change the content of the source HTML file.",
      "Delete a specific HTML element from a websites view.",
      "Add a specific HTML element to a websites view.",
      "Modify the content of a specific HTML element.",
    ],
  },
];
