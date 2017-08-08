export default class MainController {
  /*@ngInject*/

  constructor(calculateService) {
    this.calculateService = calculateService;
    this.addValue = this.addValue.bind(this);

    this.calcButtons = [{
      row: [{buttonClass: 'md-raised md-warn', content: 'AC', func: this.clearAll.bind(this)}, {buttonClass: 'md-raised md-warn', content: 'CE', func: this.clearEntry.bind(this)},{}, {buttonClass: 'md-raised', content: '/', func: this.divide.bind(this)}]
    }, {
      row: [{buttonClass: 'md-raised', content: '7', func: this.addValue}, {buttonClass: 'md-raised', content: '8', func: this.addValue}, {buttonClass: 'md-raised', content: '9', func: this.addValue}, {buttonClass: 'md-raised', content: '*', func: this.multiply.bind(this)}]
    }, {
      row: [{buttonClass: 'md-raised', content: '4', func: this.addValue}, {buttonClass: 'md-raised', content: '5', func: this.addValue}, {buttonClass: 'md-raised', content: '6', func: this.addValue}, {buttonClass: 'md-raised', content: '-', func: this.minus.bind(this)}]
    }, {
      row: [{buttonClass: 'md-raised', content: '1', func: this.addValue}, {buttonClass: 'md-raised', content: '2', func: this.addValue}, {buttonClass: 'md-raised', content: '3', func: this.addValue}, {buttonClass: 'md-raised', content: '+',  func: this.plus.bind(this)}]
    }, {
      row: [{}, {buttonClass: 'md-raised', content: '0', func: this.addValue}, {}, {buttonClass: 'md-raised md-primary', content: '=', func: this.equal.bind(this)}]
    }];

    this.calculateValues = {
      displayValue : '',
      stack : '',
      result : '',
      operation : '',
      chain: '',
    };

  }

  addValue(value) {
    this.calculateService.addValue(this.calculateValues, value);
  }

  equal() {
    this.calculateService.equal(this.calculateValues);
  }

  clearAll() {
    this.calculateService.clearAll(this.calculateValues);
  }

  clearEntry() {
    this.calculateService.clearEntry(this.calculateValues);
  }

  plus() {
    this.calculateService.calculate(this.calculateValues, '+');
  }

  minus() {
    this.calculateService.calculate(this.calculateValues, '-');
  }

  multiply() {
    this.calculateService.calculate(this.calculateValues, '*');
  }

  divide() {
    this.calculateService.calculate(this.calculateValues, '/');
  }

}
