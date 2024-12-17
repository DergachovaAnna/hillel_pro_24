function check_probability_theory(total_amount){
    let even = 0;
    let odd = 0;
    let generated_whole_numbers = []

    for (let i = 0; i < total_amount; i++){
        let random_number = Math.random() * 901 + 100;
        let whole_number = Math.floor(random_number)
        generated_whole_numbers.push(whole_number)
        let is_even = whole_number % 2 === 0;

        if (is_even){
            even++;
        } else {
            odd++;
        }
    }

    let even_percentage = (even / total_amount *100).toFixed(2)
    let odd_percentage = (odd / total_amount * 100).toFixed(2)

    console.log(`General amount: ${total_amount}`);
    console.log(`Even: ${even}`);
    console.log(`Odd: ${odd}`);
    console.log(`Even: ${even_percentage} %, Odd: ${odd_percentage} %`);
    console.log(generated_whole_numbers)
}


check_probability_theory(5)