import styled from "styled-components";
import dayjs from "dayjs";

import isDate from "./IsDate";

export default function dayFormater (date, history) {
    const day = dayjs(date).format("DD");

    const response = isDate(date, history);

    if (response.isDate) {

      return <Habit color={response.done}>{day}</Habit>;
    } else {

      return day;
    }
}


const Habit = styled.div`
  color: var(--white);

  && {
    background-color: ${(props) => (props.color)};
    border-radius: 50%;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;