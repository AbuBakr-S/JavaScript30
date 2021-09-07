const secondHand = document.querySelector('.second-hand')
const minuteHand = document.querySelector('.minute-hand')
const hourHand = document.querySelector('.hour-hand')
// ! address 60 secs bug
//const hand = document.querySelector('.hand')

const setTime = () => {
  const now = new Date()
  const seconds = now.getSeconds()
  //? convert deg to seconds and reset 90deg offset from start to position at 00:00:00
  const secondsDegrees = 360 / 60 * seconds + 90
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`

  const minutes = now.getMinutes()
  const minutesDegrees = 360 / 60 * minutes + 90
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`

  const hours = now.getHours()
  const hoursDegrees = 360 / 12 * hours + 90
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`

  // ! address 60 secs bug
  // if (secondsDegrees >= 444) {
  //   hand.style.transition = ''
  // } else {
  //   hand.style.transition = 'all 0.05s'
  // }
  
  // console.log(secondsDegrees)
}

setInterval(setTime, 1000)