const content = [
  [
    "React is extremely popular",
    "It makes building complex, interactive UIs a breeze",
    "It's powerful & flexible",
    "It has a very active and versatile ecosystem"
  ],
  [
    "Components, JSX & Props",
    "State",
    "Hooks (e.g., useEffect())",
    "Dynamic rendering"
  ],
  [
    "Official web page (react.dev)",
    "Next.js (Fullstack framework)",
    "React Native (build native mobile apps with React)"
  ],
  [
    "Official web page (react.dev), a new page",
    "Next.js (Fullstack framework)",
    "React Native (build native mobile apps with React)"
  ]
];

const btnWhyReact = document.getElementById("btn-why-react");
const btnCoreFeature = document.getElementById("btn-core-features");
const btnResources = document.getElementById("btn-resources");
const btnNewPage = document.getElementById("btn-new-page");
const tabContent = document.getElementById("tab-content");

function displayContent(items) {
  let listContent = "";
  for (const item of items) {
    listContent += `<li>${item}</li>`;
  }
  const list = document.createElement("ul");
  tabContent.innerHTML = ""; // clear existing content
  list.innerHTML = listContent; // insert new content
  tabContent.append(list);
}

function highlightButton(btn) {
  // Clear all existing styling / highlights
  btnWhyReact.className = "";
  btnCoreFeature.className = "";
  btnResources.className = "";
  btnNewPage.className = "";
  btn.className = "active"; // set new style / highlight
}

function handleClick(event) {
  const btnId = event.target.id;
  console.log(event.target)
  highlightButton(event.target);
  if (btnId === "btn-why-react") {
    displayContent(content[0]);
  } else if (btnId === "btn-core-features") {
    displayContent(content[1]);
  } else if(btnId === "btn-resources") {
    displayContent(content[2]);
  } else {
    displayContent(content[3]);
  }
}

displayContent(content[0]); // initially show this content

btnWhyReact.addEventListener("click", handleClick);
btnCoreFeature.addEventListener("click", handleClick);
btnResources.addEventListener("click", handleClick);
btnNewPage.addEventListener("click", handleClick);