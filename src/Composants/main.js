import React, {useState, useEffect} from 'react';
import moment from 'moment';
import "./styles_css/Calendar.css";
import buildCalendar from './build';
import dayStyles,{ beforeToday } from './styles';
import Headercalendrier from './header';
import Navbar2 from "./navbar_2";

function Calendar() {
 const dates_no=['28','3','5','17','19','8'];
  const [calendar, setCalendar] = useState([]);
    const [value, setValue] = useState(moment());
   // const [open, setopen] = useState(false)
    useEffect(()=>{
        setCalendar(buildCalendar(value));
    }, [value]);



    const check_date=()=>{
        let element= document.querySelector('.selected')
        const found = dates_no.find(v=>v===element.textContent)
        if(found !==undefined)
        {
            alert('date indisponible ! merci de choisir autre date')
        }
    
        }


    return (
        
        <div>
                      <Navbar2/>
            <div className="calendar_per">
                <div className="calendar" >

                    <Headercalendrier value={value} setValue={setValue} />

                    <div className="body">{
                        calendar.map((week) => (
                            <div>
                                {week.map((day) =>
                                    (<div className="day" onClick={()=> !beforeToday(day) && setValue(day)} >
                                            
                                            <div  className={dayStyles(day, value)} onClick={check_date}>
                                                {
                                                day.format("D").toString()
                                            }
                                            </div>
                                        </div>


                                    ))

                                }
                            </div>

                        ))}</div>
                </div>
            </div>

        </div>
    );
}
export default Calendar;