

var nameInput = document.getElementById('siteName')
var urlInput = document.getElementById('siteURL')


var bookMarkList = [];

if(localStorage.getItem('websites') === null){
    bookMarkList = [];
}
else{

    bookMarkList = JSON.parse(localStorage.getItem('websites'));
    showData();

}

function createSite() {

        var site = {
            name: nameInput.value,
            url: urlInput.value
        };
    
        bookMarkList.push(site);
        console.log(bookMarkList);
    
        var x = JSON.stringify(bookMarkList);
        console.log(x);
        localStorage.setItem('websites' , JSON.stringify(bookMarkList))
    
        showData();
    
        clear();
}

function clear() {
    nameInput.value = ' ';
    urlInput.value = ' ';
}

function showData() {
    var divs = " ";

    for (var i = 0; i < bookMarkList.length; i++) {

        divs += `<div class="bookmarkList mx-3 py-5 my-4 d-flex " id='bookmarkList'>

        <h5 class="mb-0 px-4 textTitle  ">${bookMarkList[i].name}</h5>

        <a href="${bookMarkList[i].url}" class="btn btn-primary mx-2 text-center" onclick='visitSite(${i});' target="_blank" >visit</a>

        <button class="btn btn-danger  text-center" onclick ='deleteSite(${i});' >Delete</button>

    </div>`

    }

    document.getElementById("data").innerHTML = divs;
}


function deleteSite(index){

    bookMarkList.splice(index , 1 );

    console.log(bookMarkList)

    localStorage.setItem('websites' , JSON.stringify(bookMarkList));

    showData();

}


function visitSite(index){


}