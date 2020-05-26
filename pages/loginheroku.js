class loginPage{
    
    get userName(){
        return $('#username')
    }
    get passWord(){
        return $('#password')
    }
    get loginBtn(){
        return $('button')
    }
    enterUsername(text){
        this.passWord.waitForDisplayed()
        this.userName.setValue(text);
    }
    enterpassWord(text){
        this.passWord.waitForDisplayed()
        this.passWord.setValue(text);
    }
    clickonLogin(){
        this.loginBtn.waitForDisplayed()
        this.loginBtn.click();
    }






}
module.exports = new loginPage