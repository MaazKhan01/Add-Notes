//console.log('hello world TO CHECK FILE IS RUNNING ')
showNotes();
let addBtn = document.getElementById('addBtn');

addBtn.addEventListener('click', function (e) {

    let addTxt = document.getElementById('addTxt');
    if (addTxt.value == "" || addTxt.value == " " || addTxt.value == null ) {
        alert('Add Note!!!');
        return false;
    }else {
        let notes = localStorage.getItem('notes');
        if (notes == null) {
            notesObj = [];
        } else {
            notesObj = JSON.parse(notes)
        }
        notesObj.push(addTxt.value);
        localStorage.setItem('notes', JSON.stringify(notesObj));
        addTxt.value = "";
        //  console.log(notesObj)
        showNotes();
    }
})
function showNotes() {
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes)
    }
    let html = "";
    notesObj.forEach((element, index) => {
        html += `
    <div id="notes" class=" noteCards row container-fluid">
        <div class="my-2 mx-2" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">Your Notes ${index + 1}</h5>
                <p class="card-text">${element} </p>
                <button id="${index}" onclick="dltBtn(this.id)" class="btn btn-primary">Delete Note</button>
            </div>

        </div>
    </div>
    `
    });
    let notesElems = document.getElementById('notes');
    if (notesObj.length != 0) {
        notesElems.innerHTML = html;
    } else {
        notesElems.innerText = `No Note(s) has been added yet !`
    }
}
function dltBtn(index) {
    //console.log('check', index)
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes)
    }
    notesObj.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    showNotes();

}

let search = document.getElementById('searchTxt')

search.addEventListener('input',function () {
    // console.log('helllooo');
     let searchVal = search.value.toLowerCase();
  //   console.log('fgdtf',searchVal)
     let noteCards = document.getElementsByClassName("noteCards");
     Array.from(noteCards).forEach(function (element) {
         let cardTxt = element.getElementsByTagName('p')[0].innerText;
 //       console.log(cardTxt)
        if (cardTxt.includes(searchVal)) {
            element.style.display = 'block'
        }else{
            element.style.display = 'none'
        }
    //    console.log(cardTxt)
     })
})



