let text = "What a Wonderful and Joyful Happiness Time!! to have a task to EAt an Apple";

let re = /\b[^Aa\s]{6,}\b/g;

console.log(text.match(re));