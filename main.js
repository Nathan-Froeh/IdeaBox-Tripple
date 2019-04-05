

var ideaStorageArr = JSON.parse(localStorage.getItem('idea')) || [];
var ideaTitle = document.querySelector("#ideabox-title-input");
var ideaBody = document.querySelector("#ideabox-body-input");
var saveButton = document.querySelector('#ideabox-save-button')
var ideaSearchBox = document.querySelector('#ideabox-search-input');
var ideaSearchButton;
var starredButton = document.querySelector('#starredButton');
var qualityInput = document.querySelector('#new-quality-input');
var addQualityButton = document.querySelector('#addQualityButton');
var storageBox = document.querySelector('#storage-box');
var starButton = document.querySelector('.star');
var qualityUpButton = document.querySelector('.upvote-deact');
var qualityDownButton = document.querySelector('.downvote-deact');
var deleteButton = document.querySelector('.delete');

var storageBoxParent = document.querySelector('#storage-box');

window.addEventListener('load', isStorageEmpty);
ideaTitle.addEventListener('keyup', checkInputFields);
ideaBody.addEventListener('keyup', checkInputFields);
saveButton.addEventListener('click', saveToIdea);


//find way to get input from the insertAdjacentHTML
//document.querySelector does not seem to be the right selector
//look at the event bubbling class we had, this I think is the same thing

storageBoxParent.addEventListener('click', function(event) {
  if (event.target.className === 'star') {
    console.log(event.target.parentNode.parentNode.id)
    console.log('yes')
  }
});


starButton.addEventListener('click', star);
function star(e){
event.preventDefault();
console.log('star')
}
qualityUpButton.addEventListener('click', up)
function up(e){
	event.preventDefault();
	console.log('up')
}
qualityDownButton.addEventListener('click', down)
function down(e){
	event.preventDefault();
	console.log('down')
}

deleteButton.addEventListener('click', deleteBtn);
function deleteBtn(e){
	event.preventDefault();
	console.log('delete')
}


/*****************Aside Menu*************/





/****************Idea Box*****************/


function checkInputFields() {
	if (ideaTitle.value && ideaBody.value !== '') {
        saveButton.disabled = false;
        saveButton.classList.add('enable');
	} else {
        saveButton.disabled = true;
        saveButton.classList.remove('enable');
	}
}

function runIdea(title, body) {
	var title = ideaTitle.value;
	var body = ideaBody.value;
}


function saveToIdea(e){
event.preventDefault();
var id = Date.now();
var title = ideaTitle.value;
var body = ideaBody.value;
var idea = new Idea(title,body,id);
ideaStorageArr.push(idea);
idea.saveToStorage(ideaStorageArr);
genCard(idea);
console.log(id)
}

  function isStorageEmpty(){
  	console.log(ideaStorageArr)
  	if(ideaStorageArr != []){
  		retrieveIdea()
  	}
  }





    // 	var ideaObj;
    // function objCreate() { 
    // 	event.preventDefault();   
    //     ideaObj = {
    //     title: ideaTitle.value,
    //     body: ideaBody.value
    //     }
    //     ideaStorageArr.push(ideaObj);
    //     genCard(ideaObj)
    //     objSave(ideaStorageArr);
    // }

    // function objSave(ideaStorageArr) {
    //     localStorage.setItem('idea', JSON.stringify(ideaStorageArr));
    // }
        //console.log(localStorage.getItem('idea'));
        //console.log(ideaStorageArr);


    // function retrieveIdea() {
    // 	//console.log(ideaStorageArr);
    //     ideaStorageArr.forEach(function(idea){
    //     	genCard(idea);
    //     });
    // }

    


/****************Storage Box**********/

function genCard(idea) {
	//console.log(idea);
	var ideaCard = `
		<article class = 'idea-card' id='${idea.id}'>
            <div class = 'idea-card-top'>
                <input type = 'image' src = 'Images/star.svg' class = 'star' alt = 'star-button'>
                <input type = 'image' src = 'Images/delete.svg' class = 'delete'>
            </div>
            <article>
                <h4 class = 'idea-card-title'>${idea.title}</h4>
                <p class = 'idea-card-text'>${idea.body}${idea.id}</p>
            </article>
            <div class = 'idea-card-bottom'>
                <input type = 'image' src = 'Images/upvote.svg' class = 'upvote-deact'>
                <p class = 'quality'>Quality:</p>
                <input type = 'image' src = 'Images/downvote.svg' class = 'downvote-deact'>
            </div>
        </article>
          `
  storageBox.insertAdjacentHTML('afterBegin', ideaCard);
};




