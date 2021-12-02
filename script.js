
// Date & Time display in the header
setInterval(function () {
    $('#currentDay').html(moment().format('dddd MMMM Do YYYY, h:mm:ss a'))
}, 1000);

// Javascript & JQuery to create the time blocks within container element, add styling, 
const containerEl = $(".container")
const currentHour = parseInt(moment().format("HH"))

const times = ["5AM", "6AM", "7AM", "8AM","9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM", "6PM"]
let timeCheck = "";

times.forEach((value, index) => {
    const newRow = $("<div>").attr("class", "row")

    const newP = $("<p>").attr("class", "col-1 hour").text(value)
    const newText = $("<textarea>").attr("placeholder", "Insert Task Here").val(localStorage.getItem(value))
    if(index + 5 < currentHour){
        newText.attr("class", "col-10 past")
    }else if(index + 5 == currentHour){
        newText.attr("class", "col-10 present")
    }else {
        newText.attr("class", "col-10 future")
    }
    newText.focus(changeBackGround)
    newText.focusout(changeBackGroundBack)
    const newBtn = $("<button>").attr("class", "col-1 btn saveBtn far fa-save").text(" save")
    newBtn.on("click", textSave)

    newRow.append(newP)
    newRow.append(newText)
    newRow.append(newBtn)

    containerEl.append(newRow)
});

// function to save user's Tasks into local storage
function textSave() {
    let value = $(this).prev().val()
    let key = $(this).prev().prev().text()

    localStorage.setItem(key, value)
}

// Change background color of the block based on time 
function changeBackGroundBack() {
    $(this).attr("class", "col-10 " + timeCheck)
}


function changeBackGround() {
    timeCheck = $(this).attr("class").split(" ")[1]
    $(this).attr("class", "col-10")
}
