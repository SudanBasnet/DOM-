// const elm = document.getElementsByid"info");
// const elm = document.getElementsByClassName("info");
// const elm = document.getElementsByTagName("div");
// const elm = document.querySelector(".first");
// const elm = document.querySelector(".info");
// const elm = document.querySelector("#first");
// const elm = document.querySelectorAll(".info >div p");
// const value = elm.innerText;
// const value = elm.innerHTML;
// console.log(value);

// document.write("added more content"); //adds to end of the document //below script

// const elm = document.querySelector(".message");
// const val = elm.innerText;
// elm.innerText = "just got text updated";
// elm.innerHTML = "<h1>just got text updated</h1>";
// console.log(val);

// elm.appendChild(textNode);
// const elm = document.querySelector("body");
// const textNode = document.createTextNode("hi this is dynamic content");
// console.log(elm);

// const paraElm = document.createElement("p");
// paraElm.innerText = "Hi this is dynamic content";

// elm.appendChild(paraElm);
// const e1 = document.querySelector(".display");
// elm.insertBefore(paraElm, document.querySelector(".display"));

// elm.removeChild(document.querySelector(`[href="google.com"]`));
// elm.replaceChild(paraElm, document.querySelector(`[href="google.com"]`));

//changing CSS properties

// const googleelm = document.querySelector(`[href="google.com"]`);

// googleelm.style.fontSize = "2rem";
// googleelm.style.color = "red";
// googleelm.style.textDecoration = "None";

// const attbr = googleelm.getAttribute("style");
// console.log(attbr);
// document
//   .querySelector(".display")
//   .setAttribute(
//     "style",
//     "font-size: 2rem; color: red; text-decoration: underline;",
//   );

// document.querySelector("a").removeAttribute("href");

//changing HTML class names

const elm = document.querySelector(".message");
// elm.className = "someclass";
// elm.classList.add("success");
// elm.classList.remove("message");
// elm.classList.toggle("success");
console.log(elm.classList); //gives actual name of all class
