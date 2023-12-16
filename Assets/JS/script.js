
// for each loops to save the loscal storage information stored in the time blocks

  const saveButtons = document.querySelectorAll('.saveBtn');

  saveButtons.forEach(button => {
    button.addEventListener('click', function(){
      const timeBlockId = this.closest('.time-block').id;
      const userInput = this.previousElementSibling.value;
      localStorage.setItem(timeBlockId, userInput);

      
  })
})
  
// retrieving any saved data from local storage and placing it into its respective text area if available
const timeBlocks = document.querySelectorAll('.time-block');
timeBlocks.forEach(timeBlock => {
  const savedValue = localStorage.getItem(timeBlock.id)
  if(savedValue){
    timeBlock.querySelector('textarea').value = savedValue
  }
})
  

  function changeTimeBlockColor(){
    let currentHour = dayjs().hour();
    let timeBlocks = document.getElementsByClassName('time-block');

    for (let i = 0; i < timeBlocks.length; i++) {
      let block = timeBlocks[i]

    let hour = parseInt(block.id.split('-')[1]);
      
    if (currentHour < hour) {
      block.classList.remove('past', 'present');
      block.classList.add('future');
    } else if (currentHour === hour) {
      block.classList.remove('past', 'future');
      block.classList.add('present');
    } else {
      block.classList.remove('present', 'future');
      block.classList.add('past');
    }
     }
    }
  

  changeTimeBlockColor();

  setInterval(changeTimeBlockColor, 60000); 


function displayTime(){
  let currentTimeEl = document.getElementById('currentDay')
  let time = dayjs();
  let localTime = time.format('MMMM DD, YYYY: hh:mm:ss A');

  currentTimeEl.textContent = localTime
}
displayTime();

setInterval(displayTime, 1000)

