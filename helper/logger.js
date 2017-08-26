function print(method, args, expect){
  var output = document.getElementsByClassName("output")[0];
  output.value += '>> ' + method.name + '(';
  if(args && args.length > 0){
    try{
      var argsStr = JSON.stringify(args);
      output.value += argsStr.substring(1, argsStr.length - 1);
    }catch(ex){
      output.value += '{Printing args in console}';
      console.log('circle references, args is:');
      console.log(args);
    }
  }
  output.value += ')';
  if(expect !== undefined){
    output.value += ', expect: ' + expect;
  }
  output.value += '\n';
  var res = method.apply(this, args);
  try{
    output.value += '<< ' + JSON.stringify(res) + '\n';
  }catch(ex){
    output.value += '<< {Printing result in console} \n';
    console.log('circle references, result is:');
    console.log(res);
  }
} 