// ================= BODY STYLE =================
document.body.style.margin = "0";
document.body.style.fontFamily = "Arial";
document.body.style.background = "linear-gradient(#7face5ff)";
document.body.style.minHeight = "100vh";

// ================= HEADER =================
const header = document.createElement("header");
Object.assign(header.style, {
  backgroundColor: "#7face5ef",
  padding: "20px",
  color: "white",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
});

// Toggle Button
const toggleBtn = document.createElement("button");
toggleBtn.innerText = "☰";
Object.assign(toggleBtn.style, {
  fontSize: "26px",
  background: "transparent",
  border: "none",
  color: "white",
  cursor: "pointer"
});
header.appendChild(toggleBtn);

// Logo
const logo = document.createElement("h2");
logo.innerText = "Assignment";
logo.style.margin = "0";
header.appendChild(logo);

// ================= NAVBAR HORIZONTAL =================
const nav = document.createElement("nav");
const ul = document.createElement("ul");
Object.assign(ul.style, {
  listStyle: "none",
  display: "flex",
  gap: "30px",
  margin: "0",
  padding: "0"
});
nav.appendChild(ul);
header.appendChild(nav);
document.body.prepend(header);

// ================= SIDEBAR VERTICAL =================
const sideNav = document.createElement("div");
Object.assign(sideNav.style, {
  position: "fixed",
  top: "0",
  left: "-220px",
  width: "200px",
  height: "100%",
  backgroundColor: "#0f233e",
  paddingTop: "80px",
  transition: "0.3s",
  zIndex: "1000"
});

const sideUl = document.createElement("ul");
Object.assign(sideUl.style, {
  listStyle: "none",
  padding: "0",
  margin: "0",
  display: "flex",
  flexDirection: "column",
  gap: "25px",
  alignItems: "center"
});
sideNav.appendChild(sideUl);
document.body.appendChild(sideNav);

// Toggle Logic
let isOpen = false;
toggleBtn.onclick = () => {
  sideNav.style.left = isOpen ? "-220px" : "0";
  isOpen = !isOpen;
};

// ================= MAIN =================
const main = document.createElement("main");
Object.assign(main.style, {
  backgroundColor: "#4a607dff",
  color: "white",
  padding: "40px",
  textAlign: "center",
  minHeight: "300px",
  fontSize: "22px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  overflowY: "auto",
  maxHeight: "calc(100vh - 160px)" // account for header + footer
});
document.body.appendChild(main);

// ================= LINK CREATOR =================
function createLink(name, fn) {
  const li = document.createElement("li");
  li.innerText = name;
  li.style.cursor = "pointer";
  li.style.color = "white";
  li.onmouseover = () => li.style.color = "lightblue";
  li.onmouseout = () => li.style.color = "white";
  li.onclick = () => {
    fn();
    sideNav.style.left = "-220px";
    isOpen = false;
  };
  return li;
}

// ================= BACK BUTTON =================
function backButton() {
  const back = document.createElement("button");
  back.innerText = "Back";
  Object.assign(back.style, {
    padding: "10px 20px",
    marginBottom: "20px",
    background: "#0f233e",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    alignSelf: "flex-start"
  });
  back.onclick = () => showChapters();
  return back;
}

// ================= HOME PAGE =================
function loadHome() {
  main.innerHTML = "<h1>Home </h1>";

  const box = document.createElement("div");
  Object.assign(box.style, {
    border: "1px solid #333",
    padding: "15px",
    marginTop: "20px",
    width: "300px",
    backgroundColor: "#0f233e"
  });
  box.innerHTML = `
    <h3> fartuun</h3>
    <ol>
       <p> I am a web developer</p>
    </ol>
  `;
  main.appendChild(box);
}

// ================= ABOUT PAGE =================
function loadAbout() {
  main.innerHTML = `
    <button onclick=" loadHome()">Back</button>
    <h1>About Me</h1>
    <div style="display:flex;flex-direction:column;align-items:center;gap:20px;">
      <img src="f.jpg" alt="Profile" style="border-radius:50%;width:150px;height:150px;object-fit:cover;">
      <div style="text-align:center;">
        <p><strong>Name:</strong> Fartuun Ibrahim</p>
        <p><strong>ID:</strong> cs1501022</p>
        <p><strong>Phone:</strong> +252618224470</p>
        <p><strong>Email:</strong> tuunay12@example.com</p>
        <p><strong>University:</strong> Jazeera University</p>
        <p><strong>Class:</strong> CS 15A</p>
        <p><strong>Skills:</strong> AI</p>
     <p>crochet</p>
      </div>
      <div style="text-align:center;">
        <p><strong>References:</strong></p>
        <ul style="list-style:disc; text-align:left;">
          <li><a href="https://theflowercompany.in/" target="_blank" style="color:lightblue;">theflowercompany.in</a></li>
          <li><a href="https://www.flowerpowerdesign.com/" target="_blank" style="color:lightblue;">flowerpowerdesign</a></li>
        </ul>
      </div>
    </div>

  `;
  
}

// ================= CONTACT PAGE =================
function loadContact() {
  main.innerHTML = `
    <h1>Contact Us</h1>
    <form style="display:flex;flex-direction:column;gap:20px;width:300px;">
      <input type="text" placeholder="Your Name" style="padding:10px;border-radius:5px;">
      <input type="email" placeholder="Your Email" style="padding:10px;border-radius:5px;">
      <textarea placeholder="Your Message" style="padding:10px;border-radius:5px;height:100px;"></textarea>
      <button style="padding:10px;background:#0f233e;color:white;border:none;border-radius:5px;cursor:pointer;">
        Submit
      </button>
    </form>
        <button onclick=" loadHome()">Back</button>
  `;
}

// ================= SERVICE PAGE (Chapters) =================
function showChapters() {
  main.innerHTML = `
    <h2>Chapters</h2>
    <ul style="list-style:none; padding:0;">
      <li><button onclick="showService()">Chapter 7 - Objects & JSON</button></li>
      <li><button onclick="ch8()">Chapter 8 - The DOM</button></li>
      <li><button onclick="ch9()">Chapter 9 - Events & Validations</button></li>
    <button onclick=" loadHome()">Back</button>

    </ul>
  `;
}

// ================= CHAPTER 7 =================
function showService() {
  main.innerHTML = "";

  const container = document.createElement("div");
  container.style.cssText = `
    max-width:900px;
    margin:30px auto;
    padding:20px;
    background:#f4f6f8;
    border-radius:15px;
    box-shadow:0 8px 20px rgba(58, 180, 31, 0.15);
    font-family:Arial;
  `;
  main.appendChild(container);

  const mainTitle = document.createElement("h2");
  mainTitle.textContent = "Chapter 7: Objects & JSON (Interactive)";
  mainTitle.style.textAlign = "center";
  container.appendChild(mainTitle);

  function addExample(name, runFn) {
    const box = document.createElement("div");
    box.style.cssText = `
      background:#0f233e;
      padding:15px;
      margin:20px 0;
      border-radius:10px;
    
    `;

    const h3 = document.createElement("h3");
    h3.textContent = name;

    const btn = document.createElement("button");
    btn.textContent = "Run Example";
    btn.style.cssText = "padding:6px 12px; cursor:pointer;";

    const res = document.createElement("pre");
    res.style.cssText = `
      background:#0f233e;
      padding:10px;
      margin-top:10px;
      border-radius:6px;
      white-space:pre-line;
      font-family:monospace;
    `;

    btn.onclick = () => res.textContent = runFn();

    box.append(h3, btn, res);
    container.appendChild(box);
  }

  // ===== EXAMPLES =====
  addExample("Object Creation", () => {
    const user = { name:"Fartuun", age:20, city:"moqdisho" };
    return `Name: ${user.name}\nAge: ${user.age}\nCity: ${user.city}`;
  });

  addExample("Constructor Function", () => {
    function Student(n,a){ this.name=n; this.age=a; }
    const s = new Student("Ali",21);
    return `Student Name: ${s.name}\nAge: ${s.age}`;
  });

  addExample("Class Syntax", () => {
    class Car { constructor(b,y){ this.brand=b; this.year=y; } }
    const car = new Car("BMW",2022);
    return `Car Brand: ${car.brand}\nYear: ${car.year}`;
  });

  addExample("Modify Object", () => {
    let p = { name:"Omar", age:20 };
    p.age = 21;
    return `Name: ${p.name}\nUpdated Age: ${p.age}`;
  });

  addExample("Add Properties", () => {
    let p = { name:"Omar" };
    p.phone = "0618224470";
    p.country = "Somalia";
    return `Name: ${p.name}\nPhone: ${p.phone}\nCountry: ${p.country}`;
  });

  addExample("Object Method", () => {
    const person = {
      name: "Fartuun",
      greet() { return `Hello, my name is ${this.name}`; }
    };
    return person.greet();
  });

  addExample("for...in Loop", () => {
    const emp = { name:"fartuun", age:18, salary:15 };
    let output = "";
    for (let key in emp) output += `${key}: ${emp[key]}\n`;
    return output.trim();
  });

  addExample("Object.entries()", () => {
    const user = { name:"Omar", age:21 };
    return Object.entries(user).map(([k,v])=>`${k}: ${v}`).join("\n");
  });

  addExample("Object.keys()", () => {
    const user = { name:"Omar", age:21, country:"Somalia" };
    return Object.keys(user).join("\n");
  });

  addExample("Object.values()", () => {
    const user = { name:"Omar", age:21, country:"Somalia" };
    return Object.values(user).join("\n");
  });

  addExample("JSON Creation", () => {
    const data = { name:"Fartuun", room:"402" };
    return `Name: ${data.name}\nRoom: ${data.room}`;
  });

  addExample("JSON.parse()", () => {
    const text = '{"name":"farah","major":"Computer"}';
    const obj = JSON.parse(text);
    return `Name: ${obj.name}\nMajor: ${obj.major}`;
  });

  addExample("JSON.stringify()", () => {
    const obj = { name:"ahmed", age:20 };
    return JSON.stringify(obj);
  });

  container.appendChild(backButton());
}

// ================= CHAPTER 8 =================
function ch8() {
  main.innerHTML = "";
  main.appendChild(backButton());

  const headerH1 = document.createElement("h1");
  headerH1.innerText = "Hello World";
  headerH1.style.background = "green";
  headerH1.style.color = "white";
  headerH1.style.padding = "15px";
  headerH1.style.textAlign = "center";
  main.appendChild(headerH1);

  for (let i = 1; i <= 3; i++) {
    const box = document.createElement("div");
    box.className = "box";
    box.innerText = "Box " + i;
    Object.assign(box.style, {
      border: "1px dashed black",
      padding: "10px",
      margin: "5px 0",
      backgroundColor: "#f0f0f0"
    });
    main.appendChild(box);
  }

  for (let i = 1; i <= 2; i++) {
    const p = document.createElement("p");
    p.id = "paragraph" + i;
    p.innerText = "This is paragraph " + i;
    p.style.fontStyle = "italic";
    p.style.margin = "10px 0";
    main.appendChild(p);
  }

  const link = document.createElement("a");
  link.href = "https://www.w3schools.com/";
  link.innerText = "https://www.w3schools.com/";
  link.target = "_blank";
  link.style.display = "block";
  link.style.margin = "10px 0";
  link.style.color = "blue";
  link.style.textDecoration = "none";
  main.appendChild(link);

  const newPara = document.createElement("p");
  newPara.innerText = "This paragraph was created dynamically via JS.";
  main.appendChild(newPara);

  const oldPara = document.getElementById("paragraph1");
  const replacementPara = document.createElement("p");
  replacementPara.innerText = "This paragraph replaced the old one!";
  replacementPara.style.fontStyle = "italic";
  replacementPara.style.margin = "10px 0";
  if (oldPara) main.replaceChild(replacementPara, oldPara);

  const span1 = document.createElement("span");
  span1.innerText = "First span, ";
  main.appendChild(span1);

  const span2 = document.createElement("span");
  span2.innerText = "Second span";
  main.appendChild(span2);

  const newSpan = document.createElement("span");
  newSpan.innerText = "New span inserted before second, ";
  if (span2.parentNode) span2.parentNode.insertBefore(newSpan, span2);

  const firstBox = document.querySelector(".box");
  if (firstBox) firstBox.style.backgroundColor = "#c8e6c9";

  const firstParagraph = document.querySelector("p");
  if (firstParagraph) firstParagraph.style.color = "green";
}

// ================= CHAPTER 9 =================
function ch9() {
  main.innerHTML = "";
  main.appendChild(backButton());

  const btn = document.createElement("button");
  btn.textContent = "Click Me";
  btn.onclick = () => alert("Button clicked!");
  main.appendChild(btn);

  const dbl = document.createElement("div");
  dbl.textContent = "Double click me";
  dbl.style.cursor = "pointer";
  dbl.style.marginTop = "10px";
  dbl.ondblclick = () => dbl.style.color = "red";
  main.appendChild(dbl);

  const box = document.createElement("div");
  box.textContent = "Hover me";
  Object.assign(box.style, {
    padding: "5px",
    marginTop: "10px",
    background: "#ccc",
    width: "120px",
    textAlign: "center",
    cursor: "pointer"
  });
  box.onmouseover = () => box.style.background = "orange";
  box.onmouseout  = () => box.style.background = "#ccc";
  main.appendChild(box);

  const keyInput = document.createElement("input");
  keyInput.placeholder = "Type here";
  keyInput.style.display = "block";
  keyInput.style.marginTop = "10px";
  keyInput.onkeyup = e => console.log(e.key);
  main.appendChild(keyInput);

  const focusInput = document.createElement("input");
  focusInput.placeholder = "Focus test";
  focusInput.style.display = "block";
  focusInput.style.marginTop = "10px";
  focusInput.onfocus = () => focusInput.style.border = "2px solid green";
  focusInput.onblur  = () => focusInput.style.border = "2px solid red";
  main.appendChild(focusInput);

  const text = document.createElement("input");
  text.placeholder = "Write something";
  text.style.display = "block";
  text.style.marginTop = "10px";
  text.oninput = () => console.log(text.value);
  text.onchange = () => alert("Value changed");
  main.appendChild(text);

  const form = document.createElement("form");
  form.style.marginTop = "10px";
  const fInput = document.createElement("input");
  const submit = document.createElement("button");
  submit.textContent = "Submit";
  form.append(fInput, submit);
  form.onsubmit = e => {
    e.preventDefault();
    alert(fInput.value);
  };
  main.appendChild(form);

  window.onresize = () => console.log("Resized");
  window.onscroll = () => console.log("Scrolling");

  const list = document.createElement("ul");
  list.style.marginTop = "10px";
  for (let i = 1; i <= 3; i++) {
    const li = document.createElement("li");
    li.textContent = "Item " + i;
    list.appendChild(li);
  }
  list.onclick = e => {
    if (e.target.tagName === "LI") alert(e.target.textContent);
  };
  main.appendChild(list);
}

// ================= ADD LINKS =================
["Home","Service","About","Contact"].forEach(name => {
  const fn = {Home:loadHome, Service:showChapters, About:loadAbout, Contact:loadContact}[name];
  ul.appendChild(createLink(name, fn));
  sideUl.appendChild(createLink(name, fn));
});

// Default page
loadHome();
// ================= FOOTER =================
const footer = document.createElement("footer");
footer.innerText = "Footer © 2025";
Object.assign(footer.style, {
  backgroundColor: "#4a607dff",
  color: "white",
  padding: "20px",
  textAlign: "center",
  marginTop: "20px",
  fontSize: "18px"
});
document.body.appendChild(footer);

