
let asci = "zxcvbnm!@#$%^&*(QWERT\"YUIOP)\\_+ASDFG-=HJKL1234'ZXCVBNM567890<>?:{asdfghjkl},./;[]|qwertyuiopዝሽችቭብንማስድፍግህጅክል፤ቅወርትዩኢኦፕ፥"


function changeToString(arr){
  let str = "";
  for(let i = 0; i < arr.length; i++){
    str += arr[i];
  }
  return str;
}

function changeToArray(str){
  let arr = [];
  for(let i = 0; i < str.length; i++){
    arr.push(str[i]);
  }
  return arr;
}



function encryptText() {
  var message = document.getElementById("inputField").value;

  let encryptedMessage = "";
  var msg = document.querySelector('.msg');
  msg.style.display = "none";
  
  // Define the substitution rule
  let substitutionRuleE = {

    //capital letter
    'A': 'ኀ', 'B': 'ጰ', 'C': 'ሀ', 'D': 'ጠ', 'E': 'ጸ', 'F': 'ሸ', 'G': 'በ', 'H': 'ዐ',
    'I': 'አ', 'J': 'ለ', 'K': 'የ', 'L': 'ሠ', 'M': 'ረ', 'N': 'ሰ', 'O': 'ቀ', 'P': 'ከ',
    'Q': 'ዠ', 'R': 'ጀ', 'S': 'መ', 'T': 'ነ', 'U': 'ወ', 'V': 'ዘ', 'W': 'ገ', 'X': 'ፀ',
    'Y': 'ሐ', 'Z': 'ተ',

    //small letter
    'a': '+', 'b': '[', 'c': ',', 'd': '\\', 'e': '@', 'f': '%', 'g': '^', 'h': '"',
    'i': '\'', 'j': ':', 'k': '/', 'l': '_', 'm': '}', 'n': '|', 'o': '(', 'p': '&',
    'q': '$', 'r': '#', 's': ')', 't': '=', 'u': '{', 'v': '!', 'w': '-', 'x': '>',
    'y': ']', 'z': '<', ' ': '?',

    //Numbers
    '0': 'ዝ','1': 'ቅ','2': 'ህ','3': 'ም','4': 'ች','5': 'ል','6': 'ቶ','7': 'ፕ',
    '8': 'ቭ','9': 'ኦ',

    //Special Character
    '!': 'ቂ','@': 'ኢ','#': 'ዚ','$': 'ሺ','%': 'ቺ','^': 'ቪ','&': '2','*': 'ኒ',
    '(': 'ሚ',')': 'ሲ','_': 'ሢ','+': 'ዲ','{': 'ፊ',':': 'ጊ','"': '1','<': 'ሒ',
    '>': 'ጂ','?': 'ኪ',',':'ሊ','.': 'ቲ','/': 'ዪ',']': 'ኡ','[': 'ዓ','}': 'ሡ',
    '|': 'ይ','\\': '0','\'': 'ቩ',';': 'ኑ','-':'ፐ','=':'ና'

  };

  // Encrypt the message
  for (let i = 0; i < message.length; i++) {
    let char = message[i];
    let encryptedChar = substitutionRuleE[char] || char;
    encryptedMessage += encryptedChar;
  }

  function hashGenerator(Text){
    let left = Math.ceil(Text.length / 2).toString();
    let right = (Text.length - left).toString();
    let index;
    let hash = [];
  
    let hashLength = Math.floor(40 * Text.length/10 + 30);
    for (let i = 0; i < hashLength; i++){
      index = Math.floor(Math.random() * asci.length);
      hash.push(asci[index]);
    }

    let count = 4;
    for(let i = 0; i < Text.length; i++){
    hash[count] = Text[i];
    count+=4;
    }
    return hash;
    
  }
  // Set the encrypted message as the output value
  document.getElementById("outputField").textContent = changeToString(hashGenerator(encryptedMessage));
}

function decryptText() {
  let encryptedM = document.getElementById("inputField").value;
  let decryptedMessage = "";
  var msg = document.querySelector('.msg');
  
  msg.style.display = "none";
  
  // Define the substitution rule for decryption
  let substitutionRuleD = {
    //capital letter
    'ኀ': 'A', 'ጰ': 'B', 'ሀ': 'C', 'ጠ': 'D', 'ጸ': 'E', 'ሸ': 'F', 'በ': 'G', 'ዐ': 'H',
    'አ': 'I', 'ለ': 'J', 'የ': 'K', 'ሠ': 'L', 'ረ': 'M', 'ሰ': 'N', 'ቀ': 'O', 'ከ': 'P',
    'ዠ': 'Q', 'ጀ': 'R', 'መ': 'S', 'ነ': 'T', 'ወ': 'U', 'ዘ': 'V', 'ገ': 'W', 'ፀ': 'X',
    'ሐ': 'Y', 'ተ': 'Z',

    //small letter
    '+': 'a', '[': 'b', ',': 'c', '\\': 'd', '@': 'e', '%': 'f', '^': 'g', '"': 'h',
    '\'': 'i', ':': 'j', '/': 'k', '_': 'l', '}': 'm', '|': 'n', '(': 'o', '&': 'p',
    '$': 'q', '#': 'r', ')': 's', '=': 't', '{': 'u', '!': 'v', '-': 'w', '>': 'x',
    ']': 'y', '<': 'z', '?': ' ',

    //number
    'ዝ': '0','ቅ': '1','ህ': '2','ም': '3','ች': '4','ል': '5','ቶ': '6','ፕ': '7',
    'ቭ': '8','ኦ': '9',
 
    //special character
    'ቂ': '!','ኢ': '@','ዚ': '#','ሺ': '$','ቺ': '%','ቪ': '^','2': '&','ኒ': '*',
    'ሚ': '(','ሲ': ')','ሢ': '_','ዲ': '+','ፊ': '{','ጊ': ':','1': '"','ሒ': '<',
    'ጂ': '>','ኪ': '?','ሊ': ',','ቲ': '.','ዪ': '/','ኡ': ']','ዓ': '[','ሡ': '}',
    'ይ': '|','0': '\\','ቩ': '\'','ኑ': ';','ፐ':'-','ና':'='

  };
  // Decrypt the message
  function filterHash(text){
    filterLength = Math.floor((text.length -30) / 4);
    let filterMessage = [];
    let find = 4;
    for(let i = 0; i < filterLength; i++){
      filterMessage[i] = text[find];
      find+=4;
    }
    return changeToString(filterMessage);
    
  }
let getMessage = filterHash(encryptedM);
  for (let i = 0; i < getMessage.length; i++) {
    let char = getMessage[i];
    let decryptedChar = substitutionRuleD[char] || char;
    decryptedMessage += decryptedChar;
  }

  // Set the decrypted message as the output value
  document.getElementById("outputField").textContent = decryptedMessage;
}


  function set() {
    var msg = document.querySelector('.msg');
    var consoleDiv = document.getElementById('console');
    
    msg.style.background = "limegreen";
    msg.innerHTML = "COMPLETED";
    msg.style.top = "60%";
    msg.style.boxShadow = "0 0 30px limegreen";
    consoleDiv.style.display = "none";
    
  }
  function delayedSet() {
    var msg = document.querySelector('.msg');
    msg.style.display = "block" 
    setTimeout(set, 2000);
    // Delay of 2000 milliseconds (2 seconds) before executing the set() function
  }
  function delayedDecryptText() {
    var msg = document.querySelector('.msg');
    msg.style.display = "block" 
    msg.innerHTML = "DECRYPTING";
    msg.style.background = "red";
    msg.style.boxShadow = "0 0 30px red";
    msg.style.top = "80%";
    setTimeout(decryptText, 3000); // Delay of 2000 milliseconds (2 seconds) before executing the set() function
  }
  function delayedEncryptText() {
    var msg = document.querySelector('.msg');
    msg.style.display = "block" 
    msg.innerHTML = "ENCRYPTING";
    msg.style.background = "red";
    msg.style.boxShadow = "0 0 30px red";
    msg.style.top = "80%";
    setTimeout(encryptText, 3000); // Delay of 2000 milliseconds (2 seconds) before executing the set() function
  }


