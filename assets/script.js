
$(function () {
  //Add a listener for click events on the save button. 
  $('.saveBtn').on('click', (event) => {
    event.preventDefault();

    //SETTING THE KEY AND VALUE
    //Setting the Key
    let key = $(event.currentTarget).parent().attr('id');
    console.log(`The key is ${key}.`)
    //This logs the 'textArea' id: '9Time' -> string

    //Setting the Value
    let value = $(event.currentTarget).prev().val();
    console.log(`This value is ${value}.`)
    //This logs the data the user passes into the textArea: 'asd' -> string

    //Setting the local storage
    localStorage.setItem(key, value);
    console.log(`Local Storage after assigning the key and value: ${JSON.stringify(localStorage)}`)
  })

  //Checks to see if any values are saved in local storage, OUTSIDE the event listener...
  for (let i = 9; i <= 17; i++) {
    $(`#${i}`).val(localStorage.getItem(`${i}Time`));
  }
 
  //Loops through the time-blocks, checks the current time, and updates the blocks accordingly
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
  //Displays the current time
  const $dateLocation = $('#currentDay')
  $dateLocation.text(dayjs().$d)
});
