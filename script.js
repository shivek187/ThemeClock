const hourEl = document.querySelector('.hour')
const minuteEl = document.querySelector('.minute')
const secondEl = document.querySelector('.second')
const timeEl = document.querySelector('.time')
const dateEl = document.querySelector('.date')
const toggle = document.querySelector('.toggle')

const days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const months=['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

toggle.addEventListener('click' , (e) =>{
     const html=document.querySelector('html')
     if(html.classList.contains('dark'))
     {
          html.classList.remove('dark')
          e.target.innerHTML = 'Dark Mode'
     } else {
          html.classList.add('dark')
          e.target.innerHTML = 'Light Mode'
     }
})

function setTime(){
     const time=new Date();
     const month = time.getMonth()
     const day = time.getDay()
     const date = time.getDate()
     const hours = time.getHours()
     const hfc = hours%12;
     const mins = time.getMinutes()
     const secs = time.getSeconds()
     const ampm = hours>=12 ? 'PM' : 'AM'

     hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hfc,0,11,0,360)}deg)`
     minuteEl.style.transform = `translate(-50%,-100%) rotate(${scale(mins,0,59,0,360)}deg)`
     secondEl.style.transform = `translate(-50%,-100%) rotate(${scale(secs,0,59,0,360)}deg)`

     timeEl.innerHTML=`${hfc}:${mins>9?mins:`0${mins}`} ${ampm}`
     dateEl.innerHTML=`${days[day]}, ${months[month]} <span class="circle">${date}</span>`
}

function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}
// took the help for this Formula from stackOverFlow

setTime()

setInterval(setTime,1000)
