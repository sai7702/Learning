class internetPage{

    get Header(){
        return('h3')
    }


    getLinkElement(index){
        return $(`ul li:nth-child(${index}) a`)
    }

    clickOnLink(index){
        this.getLinkElement(index).waitForDisplayed();
        this.getLinkElement(index).click();
    }

    getCheckBox(index){
        return $(`from#checkboxes input:nth-child(${index})`);
    }

    clickOnCheckBox(index){
        this.getCheckBox(index).waitForDisplayed();
        this.getCheckBox(index).click();
    }

}
module.exports = new internetPage();