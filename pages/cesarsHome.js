class Homepage {
    get headerNav(){
        return $("ul.cet-navigation")}
    get headerlist(){
        return this.headerNav.$$("li")}
    get listText(){
        return this.headerlist.filter(textfromlist => {
        console.log(textfromlist.getText());});
     }
    
    anyElement(index){
        return this.headerNav.$(`li:nth-child(${index}`)
    }
    
    get signin(){
        return $("//a[@title='Sign In']");
        this.signin.waitForDisplayed();
    }

    clickonMyreservation(){
        if(this.signin.isDisplayed() === true)
        {
            this.signin.click();
        }
    }

    get textAmesstoOurcust(){
        return $("//div[@class='glide__slide glide__slide--active']//h1[contains(text(),'A MESSAGE TO')]")}
    get destdd(){
        return $("div[class='cet-booker__bar-content__destination']")}
    get seldest(){
        return $("li[data-value='plv']")} 
    get fromDate(){ 
        return $("div[aria-label='Wed Jul 08 2020']")}
    get toDate(){ 
        return $("div[aria-label='Sat Jul 11 2020']")}
    get booknows() {
        return $("div[class='link-button link-button--primary lg-button']") }
    get seeRate(){
        return $("/html[1]/body[1]/div[1]/main[1]/div[2]/div[1]/div[4]/div[1]/div[1]/div[1]/div[2]/section[1]/div[1]/div[5]/article[1]/div[1]/div[1]/div[1]/div[2]/div[2]/button[1]")
    }
                            
    get clickbutt(){return $("button[data-label='ContinueToBookButton']")}
}

module.exports = new Homepage();

