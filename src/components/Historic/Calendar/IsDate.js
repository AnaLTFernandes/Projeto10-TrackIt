import dayjs from "dayjs";

function isDate (date, history) {
    let habitsDone;

    const hasDate = history.find((obj) => {
      return (
        (dayjs(date).format("DD/MM/YYYY") === obj.day) &&
        (dayjs(Date()).format("DD/MM/YYYY") !== obj.day)
      );
    });

    if (hasDate) {
      habitsDone = hasDate.habits
        .filter(habit => !habit.done)
        .map(habit => habit.done);
    }

    return hasDate
      ? { isDate: true,
          done:(habitsDone.length > 0 ? "#EA5766" : "#8CC654"),
          day:hasDate
        }
      : { isDate: false };
}

export default isDate;