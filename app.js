let dropdown = document.querySelector("#Select");
let textarea = document.querySelector("textarea");
let p = document.querySelector("p");
let btn = document.querySelector("button");

let reverseReduce = (sen) => {
  let senArray = [...sen];
  let answer = senArray.reduce((acc, char) => {
    return char + acc;
  });
  return answer;
};

let reverseWords = (sen) => {
  let splittedString = sen.split(" ");
  let answer = splittedString
    .map((eachWord) => {
      return eachWord.split("").reverse().join("");
    })
    .join(" ");
  return answer;
};

let reverseSentence = (sen) => {
  return sen.split(" ").reverse().join(" ");
};

let clickFunction = (e) => {
  e.preventDefault();
  if (dropdown.value === "Reverse words and the sentence") {
    p.textContent = reverseReduce(textarea.value);
  } else if (dropdown.value === "Reverse words but not the sentence") {
    p.textContent = reverseWords(textarea.value);
  } else if (dropdown.value === "Reverse sentence but not the words") {
    p.textContent = reverseSentence(textarea.value);
  }
};

// clickFunction(event);

btn.addEventListener("click", (e) => {
  clickFunction(e);
});
