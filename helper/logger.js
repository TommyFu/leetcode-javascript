function print(method, args, expect){
  var output = document.getElementsByClassName("output")[0];
  output.innerHTML += '>> ' + method.name + '(';
  if(args && args.length > 0){
      try{
          var argsStr = JSON.stringify(args);
          output.innerHTML += argsStr.substring(1, argsStr.length - 1);
      }catch(ex){
          output.innerHTML += '{Printing args in console}';
          console.log('circle references, args is:');
          console.log(args);
      }
  }
  output.innerHTML += ')';
  if(expect !== undefined){
      output.innerHTML += ', expect: ' + expect;
  }
  output.innerHTML += '\n';
  var res = method.apply(this, args);
  try{
      output.innerHTML += '<< ' + JSON.stringify(res) + '\n';
  }catch(ex){
      output.innerHTML += '<< {Printing result in console} \n';
      console.log('circle references, result is:');
      console.log(res);
  }
} 