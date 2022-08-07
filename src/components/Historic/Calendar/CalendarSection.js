import styled from "styled-components";

import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import dayFormater from "./DayFormater";
import ViewDay from "./ViewDay";


export default function CalendarSection ({ history }) {
  const [today, setToday] = useState(new Date());
  const [viewDay, setViewDay] = useState({visible:false});

  return (
    <Container>

      <Calendar
        calendarType="US"
        onChange={setToday}
        value={today}
        formatDay={(locale, date) => dayFormater(date, history)}
        onClickDay={(value) => setViewDay({visible:true, day:value})}
      />

      {viewDay.visible
        ? <ViewDay date={viewDay.day} history={history} setViewDay={setViewDay} />
        : ''
      }

    </Container>
  );
}

const Container = styled.div`
  div {
    width: 100%;
    max-width: 500px;
    border: none;
    border-radius: 10px;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
  }

  .react-calendar__month-view__days__day--neighboringMonth {
    opacity: 0.9;
  }
`;