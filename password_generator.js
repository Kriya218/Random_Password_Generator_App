const lowercase = 'abcdefghijklmnopqrstuvwxyz';
const uppercase = lowercase.toUpperCase() ;
const numbers = '0123456789';
const symbols = '!@#$%^&*()_+/?<>,.{}[]|;、`';

// get an array according to conditions
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

  if (includes.exclude) {
    optionsArr = optionsArr.filter((char) => {
      return !(includes.exclude).includes(char)   // 下方簡化版
    })
  }
  
  // if (includes.exclude) {                       若排除字元存在
  //   optionsArr = optionsArr.filter((char) => {  過濾陣列所有元素 
  //     if ((includes.exclude).includes(char)) {  若要排除的字串裡包含該元素
  //       return false                            返回 false (不符條件，從陣列剔除)
  //     };
  //     return true;                              否則返回 true (符合條件，加入到陣列)
  //   })
  // }

  return getPasswords(optionsArr, includes);  // 將此 return getPasswords中產生的 password 才會一起被導出
}

//generate pw according to length
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

