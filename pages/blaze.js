class blazePage{


    get mainHeader(){
        return $('h2.home_title')
    }

    get productLink(){
        return $('ul.list-nav-links li:nth-child(1) a')
    }
    clickonProductLink(){
        if( this.productLink.isDisplayed() === true)
        this.productLink.click()
}




    get parent(){
        return $('ul.list-nav-links');
    }

    get childElements() {
        return this.parent.$$('li');
    }

    get getTextForLi() {
        return this.childElements.filter(element => {
            console.log(element.getText())
        })
    }

    get useCase(){
        return $$('div#main_b_footer_second_block>ul>li')


    }

    get useCaseElements(){
        return this.useCase.filter(element => {
            console.log(element.getText());
        })
    }


    specficElement(index){
        return this.parent.$(`li:nth-child(${index})`)
    }

    getspecficElementList(index){
        console.log(this.specficElement(index).getText())
    }


    }

    module.exports = new blazePage();