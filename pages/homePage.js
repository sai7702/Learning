class homePage{

   
    get pageHeader() {return $('h1')} // $is used for single element 
    get subHeader() {return $('p.sub-text')}
    get supportLink() {return $("//span[text()= 'Support']")}

    }


module.exports = new homePage();




