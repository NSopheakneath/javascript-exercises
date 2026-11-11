function hasSpecialChars(str) {
  const regex = /[^A-Za-z0-9]/;
  return regex.test(str);
}

const palindromes = function (str) {
    if (hasSpecialChars(str)===true){
        str=str.replace(/[^A-Za-z0-9]/g, "");
    }
    let reversed=str.toLowerCase().split("").reverse().join("");
    if (reversed ===str.toLowerCase()){
        return true;
    }else{
        return false;
    }

};

// Do not edit below this line
module.exports = palindromes;
