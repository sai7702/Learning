class caesars{


get destinationDropdownList(){
    return ('//ul/li[text()="sai"]');
}
get ClickToOpenSearchBar(){
    return $("//div[@class='cet-booker__bar-content__destination']")
}

clickOnObject(){
    this.ClickToOpenSearchBar.click()
    browser.pause(10000)
}

selectDestination(destination){
    this.ClickToOpenSearchBar.click();
    browser.pause(3000)
    const add = this.destinationDropdownList.replace("sai", destination)
    $(add).click();
}
}
    
    
    
    module.exports = new caesars();
    