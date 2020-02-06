function SuperMath() {
    // this.check = function (obj) {

    // }
}
Function.prototype.check = function(obj){
  this.prototype.input = function(obj){
    obj.x = prompt("Enter X");
        obj.y = prompt("Enter Y");
        obj.znak = prompt("Enter Znak");
        if(obj.znak == '/' || obj.znak == '*' || obj.znak == '-' ||  obj.znak == '+' || obj.znak == '%'){
          result = eval(obj.x + obj.znak + obj.y)
          alert(result);
        } else{
          alert('Wrong znak');
          obj.znak = prompt("Enter Znak");
          }
  }
    pass = prompt(obj.x + ' ' + obj.znak + ' ' +  obj.y + ' ' + '?' + ' ' + 'yes / no');
      if(pass == 'yes') {
        result = eval(obj.x + obj.znak + obj.y)
        alert(result);
      }
      else if(pass == 'no'){
        this.prototype.input(obj);
         }
      } 

var obj = {
  x: 10,
  y: 5,
  znak: '+',
};
SuperMath.check(obj);