const removeTransition = (e) => {
  // look for css transform transition and remove styling 
  if (e.propertyName !== 'transform') return
  e.target.classList.remove('playing')
}

// match pressed key to audio
const playSound = (e) => {
  const audio = document.querySelector(`audio[data-key="${e.code}"]`)
  const key = document.querySelector(`div[data-key="${e.code}"]`)

  if (!audio) return  // stop the function if other keys are pressed

  key.classList.add('playing')
  audio.currentTime = 0  // rewind to the start
  audio.play()
}

const keys = Array.from(document.querySelectorAll('.key'))
// listen for end of css transition
keys.forEach(key => key.addEventListener('transitionend', removeTransition))

window.addEventListener('keydown', playSound)