function setCounter(name, value) {
  let target = document.getElementsByClassName(name);
  target[name].value = value;
  console.log(target);
  if (target[name].value < 0) {
    target[name].style.color = "red";
  } else {
    target[name].style.color = "";
  }
}

function getValueById (name) {
  return document.getElementById(name).value;
}

function updateValue () {
  const txtLength = this.value.length ;
  setCounter('counter', 140 - txtLength);
};

function runCharCounter () {
  console.log("the document is ready to be altered")
  const input = document.getElementById('tweet-text');
  input.addEventListener('input', updateValue);
}



