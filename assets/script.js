
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
  const $dateLocation = $('#currentDay');
  // console.log(dayjs().day()); --> This gives the current day (4)

  //Get the day of the week
  let dayOfTheWeek;
  switch(dayjs().day()) {
    case 0:
      dayOfTheWeek = 'Sunday';
      break;
    case 1:
      dayOfTheWeek = 'Monday';
      break;
    case 2:
      dayOfTheWeek = 'Tuesday';
      break;
    case 3:
      dayOfTheWeek = 'Wednesday';
      break;
    case 4:
      dayOfTheWeek = 'Thursday';
      break;
    case 5:
      dayOfTheWeek = 'Friday';
      break;
    case 6:
      dayOfTheWeek = 'Saturday';
      break;
    default:
      "This didn't work"
  }

  //Get the month
  console.log(dayjs().month())
  let currentMonth;
  switch(dayjs().month()) {
    case 0:
      currentMonth = 'January';
      break;
    case 1:
      currentMonth = 'February';
      break;
    case 2:
      currentMonth = 'March';
      break;
    case 3:
      currentMonth = 'April';
      break;
    case 4:
      currentMonth = 'May';
      break;
    case 5:
      currentMonth = 'June';
      break;
    case 6:
      currentMonth = 'July';
      break;
    case 7:
      currentMonth = 'August';
      break;
    case 8:
      currentMonth = 'September';
      break;
    case 9:
      currentMonth = 'October';
      break;
    case 10:
      currentMonth = 'November';
      break;
    case 11:
      currentMonth = 'December';
      break;
    default:
      "This didn't work"
  }

  //The days hour
  // let todaysHour;
  // switch(dayjs().hour()) {
  //   case 0 || 13:
  //     todaysHour = ""
  // }

  //The response object for dayjs()
  console.log(dayjs())

  //Testing

  //The final solution I am building to
  $dateLocation.text(`Today is ${dayOfTheWeek}, ${currentMonth} ${dayjs().$D}`)
});
