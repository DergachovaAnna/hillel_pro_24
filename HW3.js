function my_function(number, power){
    let result = 1;

    if (power === 0){
        return result;
    } else if (power>0){
        for (let counter = 0; counter < power; counter++){
            result *=number
        }
    }
    return result;

}


console.log(my_function(-3,3))
