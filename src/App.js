import React from 'react'
import data from './data.json'
import jeremyImage from './images/image-jeremy.png'
import ellipsis from './images/icon-ellipsis.svg'

function App() {

  const [state,setState] = React.useState('weekly')

  React.useEffect(()=>{
    let title = document.querySelectorAll('.title')
    let hour = document.querySelectorAll('.hour')
    let perviousHour = document.querySelectorAll('.pervious-hour')

    for (let i = 0; i < title.length; i++) {
      title[i].textContent = data[i].title
      if(state === 'daily'){
        hour[i].textContent = data[i].timeframes.daily.current + 'hrs'
        perviousHour[i].textContent = "yesterday - " + data[i].timeframes.daily.previous + 'hrs'
      }
      if(state === 'weekly'){
        hour[i].textContent = data[i].timeframes.weekly.current + 'hrs'
        perviousHour[i].textContent = "last week - " + data[i].timeframes.weekly.previous + 'hrs'

      }
      if(state === 'monthly'){
        hour[i].textContent = data[i].timeframes.monthly.current + 'hrs'
        perviousHour[i].textContent = "last month - " + data[i].timeframes.monthly.previous + 'hrs'

      }
      
    }
  },[state])



  
  function switchActive(e){
    let daily = document.querySelector('.daily')
    let weekly = document.querySelector('.weekly')
    let monthly = document.querySelector('.monthly')

    daily.classList.remove('active')
    weekly.classList.remove('active')
    monthly.classList.remove('active')
    
    if(!e.target.classList.contains('active')){
      e.target.classList.add('active')
    }
    setState(e.target.dataset.state)
  }

  return (
    <div className="App">
      <div className="container">
        <div className="user">
          <div className="man">
            <img src={jeremyImage} alt="jeremy.png"/>
            <div className="text">
              <p className="user-title">Report for</p>
              <p className="name">Jeremy Robson</p>
            </div>
          </div>
          <div className="nav">
            <p onClick={switchActive} className="daily" data-state="daily">Daily</p>
            <p onClick={switchActive} className="weekly active" data-state="weekly">Weekly</p>
            <p onClick={switchActive} className="monthly" data-state="monthly">Monthly</p>
          </div>
        </div>
        <div className="work card">
          <div className="mainCard">
            <p className="title"></p>
            <p className="ellipsis"><img src={ellipsis} alt=""/></p>
            <p className="hour">32hrs</p>
            <p className="pervious-hour">Last Week - 36hrs</p>
          </div>
        </div>
        <div className="play card">
          <div className="mainCard">
            <p className="title">Play</p>
            <p className="ellipsis"><img src={ellipsis} alt=""/></p>
            <p className="hour">10hrs</p>
            <p className="pervious-hour">Last Week - 8hrs</p>
          </div>
        </div>
        <div className="study card">
          <div className="mainCard">
            <p className="title">Study</p>
            <p className="ellipsis"><img src={ellipsis} alt=""/></p>
            <p className="hour">4hrs</p>
            <p className="pervious-hour">Last Week - 7hrs</p>
          </div>
        </div>
        <div className="exercise card">
          <div className="mainCard">
            <p className="title">Exercise</p>
            <p className="ellipsis"><img src={ellipsis} alt=""/></p>
            <p className="hour">4hrs</p>
            <p className="pervious-hour">Last Week - 5hrs</p>
          </div>
        </div>
        <div className="social card">
          <div className="mainCard">
            <p className="title">Social</p>
            <p className="ellipsis"><img src={ellipsis} alt=""/></p>
            <p className="hour">5hrs</p>
            <p className="pervious-hour">Last Week - 10hrs</p>
          </div>
        </div>
        <div className="selfCare card">
          <div className="mainCard">
            <p className="title">Self Care</p>
            <p className="ellipsis"><img src={ellipsis} alt=""/></p>
            <p className="hour">2hrs</p>
            <p className="pervious-hour">Last Week - 2hrs</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
