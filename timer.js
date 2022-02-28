
function addMins(oldDate, mins) {
  return new Date(oldDate.getTime() + mins*1000*60); 
}

function millisToMinutesAndSeconds(millis) {
  var minutes = Math.floor(millis / 60000);
  var seconds = ((millis % 60000) / 1000).toFixed(0);
  return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}

function callBack() {
  console.log('time has ended');
}

function renderTime(start, end) {
  let timeleft = end - start;
  console.log(millisToMinutesAndSeconds(timeleft));
  
  let timeInterval = setInterval(() => {
    timeleft -= 1000;
    console.log(millisToMinutesAndSeconds(timeleft));
    if(timeleft <= 0) {
      clearInterval(timeInterval);
      callBack();
    }
  }, 1000);
}


function timer(minutes){
  let now = new Date();
  console.log('start time', now);
  let endTime = addMins(now, minutes);
  console.log('endTime', endTime);
  renderTime(now.getTime(), endTime);
}


timer(3); 
