
$(function () {

  // TODO: Add a listener for click events on the save button. 
  $('.saveBtn').on('click', (event) => {
    //This code should use the id in the containing time-block as a key to save the user input in local storage.
    console.log("save-button click event check")
    event.preventDefault();
    let key = $(event.currentTarget).closest('div').attr('id') // --> This will be the key

    let value = $('.description').val(); // --> the value (this is what the user writes in the textarea) 

    console.log(key);
    // console.log(typeof(key));
    console.log(value);

    localStorage.setItem(key, value);

    //trying to populate the textarea with the notes saved in local storage when browser refreshes
    $noteValue = $('.description').val();
    $noteValueLocalStorage = localStorage.getItem(key);

    console.log(`The local storage is: ${JSON.stringify(localStorage)}`);
    console.log(`The $noteValue is: ${$noteValue}`);
    console.log(`the $noteValueLocalStorage is: ${$noteValueLocalStorage}`)
    
  })

  
  // HINT: What does `this` reference in the click listener function? 
  
  // How can DOM traversal be used to get the "hour-x" id of the time-block containing the button that was clicked? 
  
  // How might the id be useful when saving the description in local storage?
  
  // TODO: Add code to apply the past, present, or future class to each time block by comparing the id to the current hour. 

  currentHour = dayjs().$H;

  for (let i = 9; i <= 17; i++) {
    if (i === currentHour) {
      $(`#${i}`).addClass('present')
    } else if ( i > currentHour) {
      $(`#${i}`).addClass('future')
    } else {
      $(`#${i}`).addClass('past')
    }
  }
 

  //How can Day.js be used to get the current hour in 24-hour time?

  // TODO: Add code to get any user input that was saved in localStorage and set the values of the corresponding textarea elements. 
  
  // HINT: How can the id attribute of each time-block be used to do this?

  // TODO: Add code to display the current date in the header of the page.
  // console.log(dayjs()); //This works

  //Location to put todays date
  const $dateLocation = $('#currentDay')
  
  $dateLocation.text(dayjs().$d)
});
