const getPastTime = (date) => {
  let now = new Date();
  console.log("🚀 ~ getPastTime ~ now:", now);
  let diff = now - date;

  let seconds = Math.floor(diff / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);
  let days = Math.floor(hours / 24);
  let month = Math.floor(days / 30);
  let year = Math.floor(month / 12);

  console.log("🚀 ~ getPastTime ~ seconds:", seconds);
  console.log("🚀 ~ getPastTime ~ minutes:", minutes);
  console.log("🚀 ~ getPastTime ~ hours:", hours);
  console.log("🚀 ~ getPastTime ~ days:", days);
  console.log("🚀 ~ getPastTime ~ month:", month);
  console.log("🚀 ~ getPastTime ~ year:", year);

  if (year > 0) {
    return year + " tahun yang lalu";
  } else if (month > 0) {
    return month + " bulan yang lalu";
  } else if (days > 0) {
    return days + " hari yang lalu";
  } else if (hours > 0) {
    return hours + " jam yang lalu";
  } else if (minutes > 0) {
    return minutes + " menit yang lalu";
  } else if (seconds > 0) {
    return seconds + " detik yang lalu";
  }
};
const current = new Date(2023, 2, 30, 16, 43, 48);
console.log(getPastTime(current));
