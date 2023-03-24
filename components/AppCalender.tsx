"use client"
import { da } from 'date-fns/locale'

export const AppCalender = () => {
   
    const today = new Date();
    const dayOfWeek = today.getDay();
    const dates = [...Array(7)].map((_, i) => {
      const date = new Date(today);
      date.setDate(today.getDate() - dayOfWeek + i);
      return date.toLocaleString('default', { day: 'numeric', month: 'short' });
    });
    const formattedDates = dates.map(date => {
      const [dayOfMonth, month] = date.split(' ');
      return [month, dayOfMonth];
    });


    const content = (
        <section style={{display:"flex", gap: 20}}>
            {formattedDates.map((date) => (
                <div>
                    <div style={{fontSize: 30}}>{date[0]}</div><div>{date[1]}</div>
                </div>
            ))}
          
        </section>
    )
 

  return content
}
