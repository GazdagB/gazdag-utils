export function breakCamelCase(str){
    let result = ''; 

    str.split('').forEach(letter => {
        if(letter >= "A" && letter <= "Z"){
            result += " "
        }

        result += letter; 
    })

    return result; 
}