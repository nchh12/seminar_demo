class MyService {
    myVar = 1;
    
    constructor() {
      
    }
   
    myMethod() {
      return this.myVar++;
    }
  }
  export default new MyService();