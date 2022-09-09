const date = new Date();

if (date.getHours() > 12) {
    var pm = date.getHours();
    pm = pm - 12;
    var current_date = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear().toString().substring(2)} ${pm}:${date.getMinutes()} PM`;
} else {
    var current_date = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear().toString().substring(2)} ${date.getHours()}:${date.getMinutes()} AM`;
}
document.getElementById("date-time").innerHTML = current_date;

const footerDate = new Date();
document.getElementById("current-year").innerHTML = footerDate.getFullYear();