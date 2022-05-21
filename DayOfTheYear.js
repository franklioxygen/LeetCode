/**
 * 1154. Day of the Year
 * @param {string} date
 * @return {number}
 */
 var dayOfYear = function(date) {
    let [year, month, day] = date.split("-");
    return ((Date.parse(month+"/"+day+"/"+year)-Date.parse("01/01/"+year))/(24*3600000)+1);
};