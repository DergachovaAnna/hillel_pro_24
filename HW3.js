function my_function(number, power){
    let result = 1;
    let positive_result = 1;

    if (power === 0){
        return result;
    } else if (power>0){
        for (let counter = 0; counter < power; counter++){
            result *=number
        }
    } else {
        for (let counter = 0; counter < -power; counter++){
            positive_result *= number
        }
        result = 1 / positive_result;
    }
    return result;

}


console.log(my_function(3,-3))
