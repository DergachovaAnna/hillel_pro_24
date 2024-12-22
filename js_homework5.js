const services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн",

    total_price() {
        let total = 0;
        for (let key in this) {
            if (typeof this[key] === "string" && this[key].includes("грн")) {
                total += parseInt(this[key]);
            }
        }
        return total;
    },

    min_price() {
        let prices = [];
        for (let key in this) {
            if (typeof this[key] === "string" && this[key].includes("грн")) {
                prices.push(parseInt(this[key]));
            }
        }
        return Math.min(...prices);
    },

    max_price() {
        let prices = [];
        for (let key in this) {
            if (typeof this[key] === "string" && this[key].includes("грн")) {
                prices.push(parseInt(this[key]));
            }
        }
        return Math.max(...prices);
    }
};

services['Розбити скло'] = "200 грн";
services['Розбити стакан'] = "2 грн";

console.log(services.total_price());
console.log(services.min_price());
console.log(services.max_price())
