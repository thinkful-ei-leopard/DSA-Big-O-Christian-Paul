//12.1 counting sheep
function countSheep(num) {
    for (let i =0; i <= num; --num) {
        if (num === 0) {
            console.log('All sheep jumped over the fence')
        }
        else {
            console.log(`${num}: Another sheep jumps over the fence`)
        }
    }
}
countSheep(3)

//12.2 power calculator

function powerCalculator(int, exp) {
  if (exp < 0 ) {
    return 'exponent should be >= 0';
  }

  let result = 1;
  for (let i = 0; i < exp; i++) {
    result *= int;
  }
  return result;
}

//12.3 reverse string
function reverseString(str) {
    let newString = ' ';
    for (let i = str.length -1; i >= 0; i--) {
        newString += str[i];
    }
    return newString
}
console.log(reverseString('hello'))


//12.4 nth triangular number

function triangular(n) {
  if (n === 0) {
    return 0;
  }
  let result = n;
  for (let i = 0; i < n; i++) {
    result += i;
  }
  return result
}

//12.5 string splitter
function stringSplitter(str, splitter) {
    const arr = [];
    while (str.includes(splitter)) {
        const i = str.indexOf(splitter);
        arr.push(str.slice(0, i))
        str = str.slice(i + 1)
    }
    return arr;
}
console.log(stringSplitter('Give/Me/Death/', '/'))

//12.6 fibonacci 
function fibonacci(num) {
    let result = [];
    for (let i = 1; i <= num; i++) {
        if (i === 1) {
            result.push(0);
        }
        else if (i === 2) {
            result.push(1);
        }
        else{
            result.push(result[i - 2] + result[i - 3])
        }
    }
    return result
}
console.log(fibonacci(7))



//12.7 factorial

function factorial(n) {
  if (n === 1 || n === 0) {
      return 1;
  }

  let result = 1;
  for (let i = 1; i <= n; i++) {
      result *= i
  }
  return result;
};



// TOWER OF HANOI

// A => C
// A => B
// C => B
// A => C
// B => A
// B => C
// A => C


function TOH(n,s,temp,d) {
  if (n === 1) {
    print(s,d)
    return;
  }

 TOH(n-1,s,d,temp)
 print(s, d)
 TOH(n-1,temp,s, d)

}

function print(a,b) {
  console.log(`moving ${a} to ${b}`)
}

TOH(3, 'A', 'B', 'C')
