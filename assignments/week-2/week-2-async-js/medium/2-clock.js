function formatDate(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    hours = hours < 10 ? `0${hours}` : hours;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;

    const dateIn24HoursFormat = `${hours}:${minutes}:${seconds}`;

    let hours12 = date.getHours();
    let meridiem = "AM";
    if (hours12 >= 12) {
        meridiem = "PM";
    }
    hours12 = hours12 % 12;
    hours12 = hours12 ? hours12 : 12;

    const dateIn12HoursFormat = `${hours12 < 10 ? "0" + hours12 : hours12}:${minutes}:${seconds}  ${meridiem}`;
    return {
        dateIn24HoursFormat,
        dateIn12HoursFormat
    }
}


function displayDate() {
    const now = new Date();
    const { dateIn24HoursFormat, dateIn12HoursFormat } = formatDate(now);
    console.log(`Date In 24 Hours Formate`, dateIn24HoursFormat);
    console.log(`Date In 12 HoursFormate`, dateIn12HoursFormat);
}

setInterval(displayDate, 1000);