window.addEventListener("keydown", showInfo);

function showInfo(e) {
  const info = document.querySelector(".info");
  info.innerHTML =" ";

  const keyInfo = {
    "e.key": e.key === " " ? "Space" : e.key,
    "e.code": e.code,
    "e.keyCode": e.keyCode,
  };

  for (key in keyInfo) {
    const div = createDiv("info__card");
    const small = document.createElement("small");
    const smallValue = document.createTextNode(key);
    small.appendChild(smallValue);
    const p = document.createElement("p");
    const pValue = document.createTextNode(keyInfo[key]);
    p.appendChild(pValue);

    div.appendChild(small);
    div.appendChild(p);
    info.appendChild(div);
  }
}

function createDiv(classes) {
  const div = document.createElement("div");
  div.className = classes;
  return div;
}
