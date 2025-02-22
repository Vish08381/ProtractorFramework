let homepage= function(){

    let firstNumber_input = element(by.model('first'));
    let secondNumber_input=element(by.model('second'));
    let goButton=element(by.css('[ng-click="doAddition()"]'));


    this.get=function(url){
        browser.get(url);
    };



    this.enterFirstNumber = function(firstNo){
        firstNumber_input.sendKeys(firstNo);
    };


    this.enterSecondNumber=function(secondNO){
        secondNumber_input.sendKeys(secondNO);
    };

    this.clickGo=function(){
        goButton.click(); 
    };

    this.verifyResult=function(result){
        let output = element(by.cssContainingText('.ng-binding',result));
        expect(output.getText()).toEqual(result);// to check/validate the result
    };



};

module.exports= new homepage();