describe('demo task1 tests', function(){

    it('addition test', function(){

     browser.get('https://www.jetblue.com/'); 
 
     element(by.css(".main-nav-link[routerlink='/signin']")).click();
     
     
     browser.driver.manage().window().setSize(1280, 680);
     element(by.css('form>div:nth-of-type(1)>input')).click().sendKeys('vishwanathkoujageri@gmail.com');
     element(by.css('form>div:nth-of-type(2)>input')).clear().sendKeys('vishwanath');
     element(by.css('form>div:nth-of-type(3)>button')).click();

     browser.driver.manage().window().setSize(1280, 680);
     element(by.css('jb-radio[name="tripType"]:nth-of-type(2)>label>div:nth-of-type(1)')).click();
     element(by.css('jb-radio[name="tripType"]:nth-of-type(2)>input[name="jb-radio-group-label-id-0"]')).click();

     

     
     

     

// element(by.css('jb-radio[name="tripType"]:nth-of-type(2)>label>div:nth-of-type(1)')).click();
// element(by.css('jb-radio[name="tripType"]:nth-of-type(2)>input[name="jb-radio-group-label-id-0"]')).click();
// element(by.css('jb-city-pair-selector>div:nth-of-type(1)>jb-city-selector:nth-of-type(1)>div:nth-of-type(1)>div:nth-of-type(1)>div:nth-of-type(1)>input')).click();
// element(by.css('jb-city-selector:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(1)>div:nth-of-type(1)>input')).click();
// element(by.css('input[name="departure-date_32szq05k4name"]')).click();
// element(by.css('td[aria-label="Mar 13 2020 clickable"]>div>span')).click();
// element(by.css('div:nth-of-type(355)>div>button')).click();
// element(by.css('html')).click();
          
      browser.sleep(2000);

    });   
});