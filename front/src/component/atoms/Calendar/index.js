import "./Calendar.css";
import moment from "moment";

import { getTimeTable } from "../../../utils/util";

function Calendar() {
  const weekdays = ["Даваа", "Мягмар", "Лхагва", "Пүрэв", "Баасан"];
  const times = getTimeTable();
  console.log(times);
  // return (
  //   <div className="table-wrapper">
  //     <table className="calendar-week-list">
  //       <div className="tbody">
  //         <div className="week" id="weeks">
  //           <div className="weeky">
  //             <div className="special">08:45 - 09:35</div>
  //           </div>
  //           <div className="day">Даваа</div>
  //           <div className="day">Мягмар</div>
  //           <div className="day">Лхагва</div>
  //           <div className="day">Пүрэв</div>
  //           <div className="day">Баасан</div>
  //         </div>

  //         <div className="week">
  //           <div className="weeky">
  //             <div className="diffrent">08:45 - 09:35</div>
  //           </div>
  //           <div className="td">1</div>
  //           <div className="td">1</div>
  //           <div className="td">1</div>
  //           <div className="td">1</div>
  //           <div className="td">1</div>
  //         </div>
  //         <div className="week">
  //           <div className="weeky">
  //             <div className="diffrent">08:45 - 09:35</div>
  //           </div>
  //           <div className="td">2</div>
  //           <div className="td">2</div>
  //           <div className="td">2</div>
  //           <div className="td">2</div>
  //           <div className="td">2</div>
  //         </div>
  //         <div className="week">
  //           <div className="weeky">
  //             <div className="diffrent">08:45 - 09:35</div>
  //           </div>
  //           <div className="td">3</div>
  //           <div className="td">3</div>
  //           <div className="td">3</div>
  //           <div className="td">3</div>
  //           <div className="td">3</div>
  //         </div>
  //         <div className="week">
  //           <div className="weeky">
  //             <div className="diffrent">08:45 - 09:35</div>
  //           </div>
  //           <div className="td" id="lesson">
  //             <div className="line">a</div>
  //             <div className="schedule-inner-content">
  //               <div className="classname">
  //                 <div>5a анги</div>
  //               </div>
  //               <div>
  //                 <div className="lessonname">Монгол хэл</div>
  //                 <div className="timename">08:45-09:35</div>
  //               </div>
  //             </div>
  //           </div>
  //           <div className="td" id="lesson">
  //             <div className="line">a</div>
  //             <div className="schedule-inner-content">
  //               <div className="classname">
  //                 <div>_a анги</div>
  //               </div>
  //               <div>
  //                 <div className="lessonname">Математик</div>
  //                 <div className="timename">08:45-09:35</div>
  //               </div>
  //             </div>
  //           </div>
  //           <div className="td">4</div>
  //           <div className="td" id="lesson">
  //             4
  //           </div>
  //           <div className="td">4</div>
  //         </div>
  //         <div className="week">
  //           <div className="weeky">
  //             <div className="diffrent">08:45 - 09:35</div>
  //           </div>
  //           <div className="td">5</div>
  //           <div className="td">5</div>
  //           <div className="td">5</div>
  //           <div className="td">5</div>
  //           <div className="td">5</div>
  //         </div>
  //         <div className="week">
  //           <div className="weeky">
  //             <div className="diffrent">08:45 - 09:35</div>
  //           </div>
  //           <div className="td">6</div>
  //           <div className="td">6</div>
  //           <div className="td">6</div>
  //           <div className="td">6</div>
  //           <div className="td">6</div>
  //         </div>
  //         <div className="week">
  //           <div className="weeky">
  //             <div className="diffrent">08:45 - 09:35</div>
  //           </div>
  //           <div className="td">7</div>
  //           <div className="td">7</div>
  //           <div className="td">7</div>
  //           <div className="td">7</div>
  //           <div className="td">7</div>
  //         </div>
  //         <div className="week">
  //           <div className="weeky">
  //             <div className="diffrent">08:45 - 09:35</div>
  //           </div>
  //           <div className="td">8</div>
  //           <div className="td">8</div>
  //           <div className="td">8</div>
  //           <div className="td">8</div>
  //           <div className="td">8</div>
  //         </div>
  //         <div className="week">
  //           <div className="weeky">
  //             <div className="diffrent">08:45 - 09:35</div>
  //           </div>
  //           <div className="td">9</div>
  //           <div className="td">9</div>
  //           <div className="td">9</div>
  //           <div className="td">9</div>
  //           <div className="td">9</div>
  //         </div>
  //         <div className="week">
  //           <div className="weeky">
  //             <div className="diffrent">08:45 - 09:35</div>
  //           </div>
  //           <div className="td">10</div>
  //           <div className="td">10</div>
  //           <div className="td">10</div>
  //           <div className="td">10</div>
  //           <div className="td">10</div>
  //         </div>
  //         <div className="week">
  //           <div className="weeky">
  //             <div className="diffrent">08:45 - 09:35</div>
  //           </div>
  //           <div className="td">11</div>
  //           <div className="td">11</div>
  //           <div className="td">11</div>
  //           <div className="td">11</div>
  //           <div className="td">11</div>
  //         </div>
  //         <div className="week">
  //           <div className="weeky">
  //             <div className="diffrent">08:45 - 09:35</div>
  //           </div>
  //           <div className="td">12</div>
  //           <div className="td">12</div>
  //           <div className="td">12</div>
  //           <div className="td">12</div>
  //           <div className="td">12</div>
  //         </div>
  //         <div className="week">
  //           <div className="weeky">
  //             <div className="diffrent">08:45 - 09:35</div>
  //           </div>
  //           <div className="td">13</div>
  //           <div className="td">13</div>
  //           <div className="td">13</div>
  //           <div className="td">13</div>
  //           <div className="td">13</div>
  //         </div>
  //       </div>
  //     </table>
  //   </div>
  // );
  return (
    <div className="calendar-wrapper">
      {weekdays.map((week, weekIndex) => (
        <div className="calendar-column" key={weekIndex}>
          <div className="calendar-header center border">{week}</div>
          {times.map((time, timeIndex) => (
            <div className="calendar-cell-wrapper border" key={timeIndex}>
              <div className={`calendar-cell-header ${weekIndex !== 0 ? "mobile" : ""}`}>
                {time}
              </div>
              <div className="calendar-cell-item"></div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Calendar;
