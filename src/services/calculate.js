export default class CalculateService {

  calculate(obj, operation) {
    obj.chain += operation;
    if (obj.operation) {
      obj.stack = calculate(obj.stack, obj.operation,  obj.displayValue);
      obj.operation = operation;
    } else {
      obj.operation = operation;
      obj.stack = obj.displayValue;
    }
    obj.displayValue = '';
    obj.stack = parseFloat(obj.stack);
  }

  addValue(obj, value) {
    obj.displayValue += value;
    obj.chain += value;
  }

  equal(obj) {
    if (!obj.operation) {
      return;
    }

    this.calculate(obj, '');
    obj.displayValue = obj.stack;
    obj.operation = '';
  }

  clearAll(obj) {
    for (const key in obj) {
      if(obj.hasOwnProperty(key)) {
        obj[key] = '';
      }
    }
  }

  clearEntry(obj) {
    const len = obj.displayValue.length;
    obj.chain = obj.chain.slice(0, -len);
    obj.displayValue = '';
  }

}

function calculate(a, operator, b) {
  a = parseFloat(a);
  b = parseFloat(b);

  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '/':
      return a / b;
    case '*':
      return a * b;
  }

}
