// let text = "What a Wonderful and Joyful Happiness Time!! to have a task to EAt an Apple";
//
// let re = /\b[^Aa\s]{6,}\b/g;
//
// console.log(text.match(re));

//////////////////////////////////////////////

let arr = [
    {
        userName: "Test",
        lastName: "Test",
        email: "test.test@gmail.com"
    },
    {
        userName: "Dmitro",
        lastName: "Porohov",
        email: "dmitro.porohov@yahoo.com"
    },
    {
        userName: "test",
        lastName: "test",
        email: "test@yahoo.com"
    },
    {
        userName: "test2",
        lastName: "test2",
        email: "test.test.test@yahoo.com"
    },
    {
        userName: "test3",
        lastName: "test3",
        email: "test test@yahoo.com"
    },
    {
        userName: "Andrii",
        lastName: "",
        email: "andrii@mail.ru"
    },
];


let email_regex = /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)?@(gmail\.com|yahoo\.com)$/;

let trusted_array = [];

for (let i = 0; i < arr.length; i++) {
    if (email_regex.test(arr[i].email)) {
        trusted_array.push(arr[i]);
    }
}

console.log(trusted_array);