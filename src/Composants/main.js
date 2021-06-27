import React, {useState, useEffect} from 'react';
import moment from 'moment';
import "./Calendar.css";
import buildCalendar from './build';
import dayStyles,{ beforeToday } from './styles';
import Headercalendrier from './header';


function Calendar() {
    const dates_no=[28,3,5,17,19,20,8]
    const [calendar, setCalendar] = useState([]);
    const [value, setValue] = useState(moment());
    const [open, setopen] = useState(false)
    useEffect(()=>{
        setCalendar(buildCalendar(value));
    }, [value]);



const check_date=(val)=>
{

  dates_no.forEach((v)=>{

      if(v===val.date())
      {
          {
              alert('date non dispo')

          }
      }

  })


   }






    return (
        <div className="background_per">
            <div className="calendar_per">
                <div className="calendar" >

                    <Headercalendrier value={value} setValue={setValue} />

                    <div className="body">{
                        calendar.map((week) => (
                            <div>
                                {week.map((day) =>
                                    (<div className="day" onClick={()=> !beforeToday(day) && setValue(day)} >
                                            {console.log(value.format().slice(0,10))}
                                            <div  className={dayStyles(day, value)} onClick={check_date(value)}>
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