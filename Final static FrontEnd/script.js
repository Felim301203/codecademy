

document.getElementById('button').onclick = () => {
    document.getElementById('listbar').style.left = '0';
    
};

document.getElementById('back').onclick = () => {
    document.getElementById('listbar').style.left = '-50vw'

}


const data = [
{ 
    path : "image/Skills/html-5-logo-svgrepo-com.svg",
    name : "HTML",
    description : "HTML, or HyperText Markup Language, is the standard language used to create and design web pages. It consists of a series of elements that define the structure and content of a webpage. HTML elements are represented by tags, which are enclosed in angle brackets"
} , 
{ 
    path : "image/Skills/css-svgrepo-com.svg",
    name : "CSS",
    description: "CSS, or Cascading Style Sheets, is a style sheet language used to describe the presentation of a document written in HTML or XML. It controls the layout, appearance, and design of web pages, ensuring consistency across multiple pages and devices."
}, { 
    path : "image/Skills/Unofficial_JavaScript_logo_2.svg",
    name : "Javascript",
    description: "JavaScript is a versatile, high-level programming language primarily used for adding interactivity and dynamic behavior to websites. allowing developers to create features like form validation, animations, event handling, and more. "
}, {
    path: "image/Skills/node-js-svgrepo-com.svg",
    name : "Node.js",
    description:  "Node.js is an open-source, cross-platform JavaScript runtime environment that allows developers to run JavaScript code on the server-side. It is built on the V8 JavaScript runtime, which is the engine that powers Google Chrome."
}, {
    path: "image/Skills/mongodb-svgrepo-com.svg",
    name : "Mongodb",
    description: "MongoDB is a popular, open-source, NoSQL database that provides high performance, high availability, and easy scalability for managing and storing large volumes of structured and unstructured data. It falls under the category of a document-oriented database, meaning it stores data in flexible, JSON-like BSON (Binary JSON) format documents."
}, {
    path: "image/Skills/hapijs-ar21.svg",
    name: "Hapi.js",
    description: "Hapi.js, commonly referred to as Hapi, is an open-source framework for building applications and services in Node.js. It's a rich framework that provides a set of tools and utilities to simplify the development of server-side applications. Hapi is known for its focus on being a robust, flexible, and extensible framework."
}
]

data.forEach((skill) => {
    var dataContainer = document.createElement("div");
    dataContainer.classList.add("container");

    var image = document.createElement("img");
    image.src = skill.path;

    var description = document.createElement("div");
    description.classList.add("data");

    var skillName = document.createElement("h2");
    skillName.innerHTML = skill.name;

    var skillDescription = document.createElement("p");
    skillDescription.innerHTML = skill.description;

    description.appendChild(skillName);
    description.appendChild(skillDescription);

    dataContainer.appendChild(image);
    dataContainer.appendChild(description);

    document.getElementById("Skills").appendChild(dataContainer);
});