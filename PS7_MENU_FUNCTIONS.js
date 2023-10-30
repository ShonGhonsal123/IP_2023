function calculateAverage(){
    var arr = []
    var sum = 0

    const len = parseInt(prompt("Enter the length of the array:"))
    for(var i=0; i<len; i++){
        arr[i] = parseInt();
        sum+=arr[i];
    }

    var avg = sum/len;
    console.log("Average of the marks is: "+avg);
}

function printFib(){
    var n  = parseInt(prompt("Enter the number of terms:"))
    var a = 0;
    var b = 1;      
    var c;

    for(var i=0; i<n; i++){
        c = a+b;
        a = b;
        b = c;
        console.log(c+" ");
    }
}

function checkPalindrome(){
    var str = prompt("Enter a string:")
    var len = str.length;
    var i=0;
    var flag = true;

    while(len>i){
        if(str[i] != str[len-i-1]){
            console.log("Not a palindrome");
            flag = false;
            break;
        }
        i++;
    }
    if(flag){
        console.log("Palindrome");
    }
}


var choice = parseInt(prompt("Enter your choice:"));

switch(choice){
    case 1:
        calculateAverage();
        break;
    case 2:
        printFib();
        break;
    case 3:
        checkPalindrome();
        break;
    default:
        console.log("Wrong choice");
        break;
