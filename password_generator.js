const lowercase = 'abcdefghijklmnopqrstuvwxyz';
const uppercase = lowercase.toUpperCase() ;
const numbers = '0123456789';
const symbols = '!@#$%^&*()_+/?<>,.{}[]|;、`';

// create an array according to selections
function generatePassword(includes) {
  let optionsArr = [];

  if (includes.lowercase === 'on') {
    optionsArr = optionsArr.concat(Array.from(lowercase))
  };

  if (includes.uppercase === 'on') {
    optionsArr = optionsArr.concat(Array.from(uppercase))
  };

  if (includes.numbers === 'on') {
    optionsArr = optionsArr.concat(Array.from(numbers))
  };

  if (includes.symbols === 'on') {
    optionsArr = optionsArr.concat(Array.from(symbols))
  };
  
// remove exclude characters
  if (includes.exclude) {
    optionsArr = optionsArr.filter((char) => {
      return !(includes.exclude).includes(char)   
    })
  }

  return getPasswords(optionsArr, includes);  
}

//generate pw according to length based on optionsArr
function getPasswords(optionsArr, includes) {
  if (optionsArr.length === 0 ) {
    return 'There is no valid result according to your selection.'
  };
  let password = '';
  const pwLength = includes.pwLength;
  for (let i=0; i<pwLength; i++) {
    const randomIndex = Math.floor(Math.random()*optionsArr.length);
    password += optionsArr[randomIndex];
  }
  // console.log(password);
  return password;
  
}

module.exports = generatePassword;

