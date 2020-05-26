class spiceJet{

    get LoginSignup(){
        return $('#Login')
    }
    get SpiceClubMem(){
        return $('=SpiceClub Members')
    }
    get memLogin(){
        return $('=Member Login')
    }
    get searchfield(){
        return $("#target")
    }
    get resultEntered(){
        return $("#result")
    }
    getElementText(){
        this.resultEntered.waitForDisplayed()
        return this.resultEntered.getText()
    }
    enterSearch(text){
        this.searchfield.waitForDisplayed()
        this.searchfield.setValue(text)

    }
    moveToElement(element){
        element.waitForDisplayed()
        element.moveTo()
    }
    clickElement(element){
        element.waitForDisplayed()
        element.clck()
    }




}
module.exports = new spiceJet();