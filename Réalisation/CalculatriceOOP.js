// Métier
class CalculatriceOOP {

    // Private attributes
    #_num1;
    #_num2;
    #_solution;
    #_operation;

    // Setters and getters
    get num1() {
        return this._num1  
    }
    set num1(value){
        this._num1 = value;
    }
    get num2() {
        return this._num2 
    }
    set num2(value){
        this._num2 = value;
    }
    get num2() {
        return this._num2 
    }
    set num2(value){
        this._num2 = value;
    }
    get operation() {
        return this._operation
    }
    set operation(value){
          this._operation = value;
    }

    get solution() {
        return this._solution
    }
    set solution(value){
          this._solution = value;
    }

    Calculer(){
        this._solution = undefined;
        switch (this._operation) {
            case '+':
                this._solution = this._num1 + this._num2;
                break;
            case '-':
                this. _solution = this._num1 - this._num2;
                    break;
            case '*':
                this. _solution = this._num1 * this._num2;
                    break;
            case '/':
                this. _solution = this._num1 / this._num2;
                    break;
            default:
                break;
        }
        return this._solution;
    }

    Init(){
        this._num1 = undefined;
        this._num2 = undefined;
        this._operation = undefined;
    }

  }