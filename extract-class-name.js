function extractClassName(sessionTitle) {
  // Add you solution here
  const words = sessionTitle.split(" ");
  let className = [];
  // console.log(words);
  for (let i = 0; i < words.length - 2; i++) {
    const year = Number(words[i + 1]);
    // console.log(year);
    const monthName = words[i + 2].toLowerCase();
    // console.log(monthName);
    const monthsMap = {
      januar: "01",
      februar: "02",
      märz: "03",
      maerz: "03",
      april: "04",
      mai: "05",
      juni: "06",
      juli: "07",
      august: "08",
      september: "09",
      oktober: "10",
      november: "11",
      dezember: "12",
    };
    const monthNumber = monthsMap[monthName];
    //console.log(monthNumber);

    if (monthNumber && !isNaN(year) && words[i + 1].length <= 4) {
      className.push(year, monthNumber);
    }
  }
  if (className.length === 2) {
    return className.join("-");
  } else {
    return null;
  }
}
