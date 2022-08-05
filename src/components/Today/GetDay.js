import dayjs from "dayjs";

export default function GetDay() {
    const weekdays = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
    const day = weekdays[(dayjs().day())];
    const date = `${day}, ${dayjs().locale('pt-br').format('DD/MM')}`;

    return date;
}