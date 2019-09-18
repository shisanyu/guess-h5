

//截取字符串
let substr = (str, num) => {
  if (!str) {
      return;
  }
  var text = '';
  if (str.length > 0) {
      if (str.length <= num) {
          text = str;
      } else {
          text = str.substring(0, num) + '...';
      }
      return text;
  } else {
      return str;
  }
}
//截取银行卡字符串,***表示隐藏
let getBankStr = (str) => {
  if (!str) {
      return;
  }
  var text = '';
  if (str.length > 0) {
      text =  "**** **** **** " + str.substr(-4);
      return text;
  } else {
      return str;
  }
}
//截取手机号字符串,中间用***表示隐藏
let getMobileStr = (str) => {
  if (!str) {
      return;
  }
  var text = '';
  if (str.length > 0) {
      text =  str.substr(0,3)+"****" + str.substr(-4);
      return text;
  } else {
      return str;
  }
}

export { substr,getBankStr }