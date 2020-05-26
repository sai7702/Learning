const importDate = require("../utils/date")
class caesarsPageObject {

 get selDd() { return $("//div[@class='cet-booker__bar-content__destination']") }
 get pickAPlace() { return ('//ul/li[contains(text(), "DestinationName")]')}
 get fromDate() { return ('//div[@aria-label="fd"]') }
 get toDate() { return ('//div[@aria-label = "td"]') }
 get bookNow() { return $("//div[@class= 'link-button link-button--primary lg-button']") }
 get destText() { return $("//div[contains(@class, 'BookingSearchSummary')]/h4") }
 get seeRates() { return $("(//button[@data-label='SeeRatesButton'])[1]") }
 get contToBook() { return $("(//button[@data-label='ContinueToBookButton'])") }
 get flexiableDates() {return ("//span[contains(text(),'typeDates')]")}
 get specficMonth(){ return ("//a[@title='**']")}
 get selectRoom (){return $('//button[contains(text(),"Select a room" )]')}
 get matchPref(){ return $('//*[contains(text(), " match your preferences.")]')}
 
 
 SelectDestination() {
 this.selDd.click()
 browser.pause(3000) 
 this.selDd.click()
 browser.pause(3000) 

 }
 
 selectByViText(text){
     const destinationText = this.pickAPlace.replace("DestinationName", text);
     $(destinationText).click();
     browser.pause(5000);
 }

 selecttypeDates(sai){
    const date = this.flexiableDates.replace("typeDates", sai);
    $(date).click();
    browser.pause(5000);
}

selectMonth(month){
    const flexiMonth = this.specficMonth.replace("**", month);
    $(flexiMonth).click();
    browser.pause(5000);
}

 selectByViFromTextDate(frmdate){
     const fromDateText = this.fromDate.replace("fd", frmdate);
     $(fromDateText).click();
     browser.pause(5000);
 }
 selectByViToTextDate(TDateText){
     const toDateText = this.toDate.replace("td", TDateText);
     $(toDateText).click();
     browser.pause(5000);
 }
 
 selectTravelDates(fromDate, toDate){
    const frmdate = importDate.toAndFromDates(fromDate);
    console.log(frmdate)
    const todate = importDate.toAndFromDates(toDate)
    this.selectByViFromTextDate(frmdate)
    this.selectByViToTextDate(todate)

}

 
booknowClick() {
    this.bookNow.click();
}
SelectRoomClick() {
    this.selectRoom.click();
}

matchPreference() {
    this.matchPref.waitForDisplayed(4000)
    this.matchPref.getText()
}
 
//  ddAssertionText() {
//  // console.log("dsjhfsjbfehjvbdhbvbvbfnsjdknsmnd" + this.pickAPlace.getText());
//  let cde = this.pickAPlace.getText();
//  return cde;
//  }
 
//  fromAndToDate() {
//  this.fromDate.waitForDisplayed(10000)
//  this.fromDate.click();
//  this.toDate.click();
//  }
 
//  destAssertionText() {
//  this.destText.waitForDisplayed(100000)
//  //browser.pause(9000)
//  this.seeRates.waitForExist({ timeout: 20000 });
//  //console.log(this.destText.getText());
//  return this.destText.getText();
 
 
//  }
//  seeRatesClick() {
//  // this.seeRates.isLoaded();
//  this.seeRates.click();
//  }
//  ContToBookClick() {
//  this.contToBook.click()
//  }
//  // dropdownlistTest(index){
//  // return this.dropdownlist.getValue();
//  // return this.dropdownlist.selectByIndex(cccc)
 
//  // }
}
module.exports = new caesarsPageObject();