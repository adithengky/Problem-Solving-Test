function isBracketsBalanced(value)
{
    let arr = [];

    for(let i = 0; i < value.length; i++) {
        let bracket = value[i];
        if (bracket === '{' || bracket == '(' || bracket == '[') {
            arr.push(bracket);
            continue;
        }

        if (arr.length == 0) {
            return false;
        }

        let check;

        switch (bracket){
            case '}':
                check = arr.pop();
                if (check == '(' || check == '[')
                    return false;
                break;
      
            case ')':
                check = arr.pop();
                if (check == '{' || check == '[')
                    return false;
                break;
      
            case ']':
                check = arr.pop();
                if (check == '(' || check == '{')
                    return false;
                break;
        }
        
        
    }
  
    return (arr.length == 0);
}
  
let str = "{(([])[])[]}";

let bracketBalance = isBracketsBalanced(str);
  
if (bracketBalance) {
    console.log("YES");
} else {
    console.log("NO");
}