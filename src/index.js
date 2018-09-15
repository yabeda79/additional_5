module.exports = function check(str, bracketsConfig) {
  var nO = 0;
  var o = [], c = [], cnt = 0, buf = [], co = 0;
  var stri = str.split("");


  for(var i = 0; i < bracketsConfig.length; i++) {

      o.push(bracketsConfig[i][0]);
      c.push(bracketsConfig[i][1]);

      if(bracketsConfig[i][0] == bracketsConfig[i][1]){
          buf.push(bracketsConfig[i][0]);
      }
  }

  for (var i = 0; i < stri.length; i++) {
      if(buf.indexOf(stri[i]) != -1){
          co++;
          if((co + 2) % 2 != 0 && stri[i-1] != stri[i]){
              if(stri[i] == stri[i+1]){
                  i++;
                  co++;
                  continue;
              }

              var k = i + 1;
              while(stri[k] != stri[i]){
                  k++;
              }
              if((k - i) % 2 == 0){
                  if((k - i) != 0) {
                      return false;
                  }
              }
          }
      }
      else {
          if(buf.indexOf(stri[i+1]) == -1 && c.indexOf(stri[i+1]) >= 0 && o.indexOf(stri[i]) >= 0 && o.indexOf(stri[i]) != c.indexOf(stri[i+1])){
              return false;
          }

          o.indexOf(stri[i]) >= 0 ? cnt += 1 : cnt -= 1;

          if (cnt === -1) {
              return false;
          }
      }
  }
  if((co + 2) % 2 != 0) {
      return false;
  }

  return cnt == 0 ? true : false;
}
