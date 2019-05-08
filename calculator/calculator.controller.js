class CalcCtrl {

  constructor(){
    '$ngInject'
     this.a = 0
     this.b = 0
     this.operator = ''
     this.result = ''
  }

calculate = () => {
    const a = this.a
    const b = this.b
    switch(this.operator){
      case "*":
         this.result = `${a*b}`
         break;
      case "+":
          this.result = `${a+b}`
          break;
      case "-":
          this.result = `${a-b}`
          break;
      case "/":
          this.result = `${a/b}`
          break;
      default : 
          this.result = "Operator Invalid!!"    
          break;
    }
  };
}

export default CalcCtrl;