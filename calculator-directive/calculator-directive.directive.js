function CalculatorDirective(){
  '$ngInject'
  return {
    restrict: 'A',
    link: (scope, element, attr) => {
      const msg = attr.confirmClick || "Are you Sure?" ;
      let clickAction = attr.confirmedClick;
      element.bind('click', (event) => {
        if (window.confirm(msg)){
          scope.$eval(clickAction)
        }
      });
    }
  }
}

export default CalculatorDirective;