class caesars{

get selDropDown(){
    return $("//div[@class='cet-booker__bar-content__destination']")
}
get seldest(){
    return $("li[data-value='clv']")
}
get specficDate(){
    return $("//span[contains(text(),'Specific dates')]")
}
get flexiableDates(){
    return $("//span[contains(text(),'Flexible dates')]")
} 
get fromDate(){ 
    return $("div[aria-label='Fri May 08 2020']")
}
get toDate(){ 
    return $("div[aria-label='Sat May 09 2020']")
}
get bookNow(){
    return $("//div[@class='link-button link-button--primary lg-button']//a[contains(text(),'Book Now')]")
}
get initialDestination(){
    return this.seldest.getText()
}
get validationElement(){
    return $("//h4[@class='Text__h4-sc-9p1wwr-19 gTZDbh']")
}
get finalDestination(){
    return this.validationElement.getText()
}
get MatchPreference(){
    return $("//div[contains(text(),'match your preferences.')]")
}

// get textForFromdate(){
//     return this.fromDate.filter(element => {
//         console.log(element.getValue())
//     })
// } 

selectDropdown(){
    this.selDropDown.waitForDisplayed(10000)
    this.selDropDown.click()
}
selectdestination(){
    this.selDropDown.click()
    this.seldest.isDisplayed()
    this.seldest.click()
}
selectspecfic(){
    this.specficDate.click()
}
selectFlexiable(){
    this.flexiableDates.click()
}
selectfromDate(){
    this.fromDate.click()
    console.log(this.fromDate.getText())
} 
selectToDate(){
    this.toDate.click()
    console.log(this.toDate.getText())
}
clickBook(){
    this.bookNow.click()
}

}


module.exports = new caesars();
