export const data = [
  { year: 1980, efficiency: 24.3, sales: 8949000 },
  { year: 1985, efficiency: 27.6, sales: 10979000 },
  { year: 1990, efficiency: 28, sales: 9303000 },
  { year: 1991, efficiency: 28.4, sales: 8185000 },
  { year: 1992, efficiency: 27.9, sales: 8213000 },
  { year: 1993, efficiency: 28.4, sales: 8518000 },
  { year: 1994, efficiency: 28.3, sales: 8991000 },
  { year: 1995, efficiency: 28.6, sales: 8620000 },
  { year: 1996, efficiency: 28.5, sales: 8479000 },
  { year: 1997, efficiency: 28.7, sales: 8217000 },
  { year: 1998, efficiency: 28.8, sales: 8085000 },
  { year: 1999, efficiency: 28.3, sales: 8638000 },
  { year: 2000, efficiency: 28.5, sales: 8778000 },
  { year: 2001, efficiency: 28.8, sales: 8352000 },
  { year: 2002, efficiency: 29, sales: 8042000 },
  { year: 2003, efficiency: 29.5, sales: 7556000 },
  { year: 2004, efficiency: 29.5, sales: 7483000 },
  { year: 2005, efficiency: 30.3, sales: 7660000 },
  { year: 2006, efficiency: 30.1, sales: 7762000 },
  { year: 2007, efficiency: 31.2, sales: 7562000 },
  { year: 2008, efficiency: 31.5, sales: 6769000 },
  { year: 2009, efficiency: 32.9, sales: 5402000 },
  { year: 2010, efficiency: 33.9, sales: 5636000 },
  { year: 2011, efficiency: 33.1, sales: 6093000 },
  { year: 2012, efficiency: 35.3, sales: 7245000 },
  { year: 2013, efficiency: 36.4, sales: 7586000 },
  { year: 2014, efficiency: 36.5, sales: 7708000 },
  { year: 2015, efficiency: 37.2, sales: 7517000 },
  { year: 2016, efficiency: 37.7, sales: 6873000 },
  { year: 2017, efficiency: 39.4, sales: 6081000 },
]

export function generateMockData() {
  const startDate = new Date('2023-01-01');
  const endDate = new Date('2023-12-31');
  const days = (endDate - startDate) / (1000 * 60 * 60 * 24);
  const data = [];

  let currentDate = startDate;
  let previousClose = 100; // Initial stock price

  for (let i = 0; i < days; i++) {
    const date = new Date(currentDate);
    const priceChange = (Math.random() - 0.5) * 10; // Simulated daily price change

    // Ensure the stock price doesn't go negative
    const close = Math.max(previousClose + priceChange, 1);

    data.push({ date: date, close: close });
    currentDate.setDate(currentDate.getDate() + 1);
    previousClose = close;
  }

  return data;
}


export function generateRandomData(count) {
  const data = [];

  for (let i = 0; i < count; i++) {
    const name = `Category ${i + 1}`;
    const value = Math.floor(Math.random() * 1000); // Generate a random value

    data.push({ name, value });
  }

  return data;
}

export const data1 = [
  {
    "subGroup": "Afghanistan",
    "group": "Asia",
    "y": 43.828,
    "size": 31889923,
    "x": 974.5803384
  },
  {
    "subGroup": "Albania",
    "group": "Europe",
    "y": 76.423,
    "size": 3600523,
    "x": 5937.029526
  },
  {
    "subGroup": "Algeria",
    "group": "Africa",
    "y": 72.301,
    "size": 33333216,
    "x": 6223.367465
  },
  {
    "subGroup": "Angola",
    "group": "Africa",
    "y": 42.731,
    "size": 12420476,
    "x": 4797.231267
  },
  {
    "subGroup": "Argentina",
    "group": "Americas",
    "y": 75.32,
    "size": 40301927,
    "x": 12779.37964
  },
  {
    "subGroup": "Australia",
    "group": "Oceania",
    "y": 81.235,
    "size": 20434176,
    "x": 34435.36744
  },
  {
    "subGroup": "Austria",
    "group": "Europe",
    "y": 79.829,
    "size": 8199783,
    "x": 36126.4927
  },
  {
    "subGroup": "Bahrain",
    "group": "Asia",
    "y": 75.635,
    "size": 708573,
    "x": 29796.04834
  },
  {
    "subGroup": "Bangladesh",
    "group": "Asia",
    "y": 64.062,
    "size": 150448339,
    "x": 1391.253792
  },
  {
    "subGroup": "Belgium",
    "group": "Europe",
    "y": 79.441,
    "size": 10392226,
    "x": 33692.60508
  },
  {
    "subGroup": "Benin",
    "group": "Africa",
    "y": 56.728,
    "size": 8078314,
    "x": 1441.284873
  },
  {
    "subGroup": "Bolivia",
    "group": "Americas",
    "y": 65.554,
    "size": 9119152,
    "x": 3822.137084
  },
  {
    "subGroup": "Bosnia and Herzegovina",
    "group": "Europe",
    "y": 74.852,
    "size": 4552198,
    "x": 7446.298803
  },
  {
    "subGroup": "Botswana",
    "group": "Africa",
    "y": 50.728,
    "size": 1639131,
    "x": 12569.85177
  },
  {
    "subGroup": "Brazil",
    "group": "Americas",
    "y": 72.39,
    "size": 190010647,
    "x": 9065.800825
  },
  {
    "subGroup": "Bulgaria",
    "group": "Europe",
    "y": 73.005,
    "size": 7322858,
    "x": 10680.79282
  },
  {
    "subGroup": "Burkina Faso",
    "group": "Africa",
    "y": 52.295,
    "size": 14326203,
    "x": 1217.032994
  },
  {
    "subGroup": "Burundi",
    "group": "Africa",
    "y": 49.58,
    "size": 8390505,
    "x": 430.0706916
  },
  {
    "subGroup": "Cambodia",
    "group": "Asia",
    "y": 59.723,
    "size": 14131858,
    "x": 1713.778686
  },
  {
    "subGroup": "Cameroon",
    "group": "Africa",
    "y": 50.43,
    "size": 17696293,
    "x": 2042.09524
  },
  {
    "subGroup": "Canada",
    "group": "Americas",
    "y": 80.653,
    "size": 33390141,
    "x": 36319.23501
  },
  {
    "subGroup": "Central African Republic",
    "group": "Africa",
    "y": 44.741,
    "size": 4369038,
    "x": 706.016537
  },
  {
    "subGroup": "Chad",
    "group": "Africa",
    "y": 50.651,
    "size": 10238807,
    "x": 1704.063724
  },
  {
    "subGroup": "Chile",
    "group": "Americas",
    "y": 78.553,
    "size": 16284741,
    "x": 13171.63885
  },
  {
    "subGroup": "China",
    "group": "Asia",
    "y": 72.961,
    "size": 1318683096,
    "x": 4959.114854
  },
  {
    "subGroup": "Colombia",
    "group": "Americas",
    "y": 72.889,
    "size": 44227550,
    "x": 7006.580419
  },
  {
    "subGroup": "Comoros",
    "group": "Africa",
    "y": 65.152,
    "size": 710960,
    "x": 986.1478792
  },
  {
    "subGroup": "Congo, Dem. Rep.",
    "group": "Africa",
    "y": 46.462,
    "size": 64606759,
    "x": 277.5518587
  },
  {
    "subGroup": "Congo, Rep.",
    "group": "Africa",
    "y": 55.322,
    "size": 3800610,
    "x": 3632.557798
  },
  {
    "subGroup": "Costa Rica",
    "group": "Americas",
    "y": 78.782,
    "size": 4133884,
    "x": 9645.06142
  },
  {
    "subGroup": "Cote d'Ivoire",
    "group": "Africa",
    "y": 48.328,
    "size": 18013409,
    "x": 1544.750112
  },
  {
    "subGroup": "Croatia",
    "group": "Europe",
    "y": 75.748,
    "size": 4493312,
    "x": 14619.22272
  },
  {
    "subGroup": "Uruguay",
    "group": "Americas",
    "y": 76.384,
    "size": 3447496,
    "x": 10611.46299
  },
  {
    "subGroup": "Venezuela",
    "group": "Americas",
    "y": 73.747,
    "size": 26084662,
    "x": 11415.80569
  },
  {
    "subGroup": "Vietnam",
    "group": "Asia",
    "y": 74.249,
    "size": 85262356,
    "x": 2441.576404
  },
  {
    "subGroup": "West Bank and Gaza",
    "group": "Asia",
    "y": 73.422,
    "size": 4018332,
    "x": 3025.349798
  },
  {
    "subGroup": "Yemen, Rep.",
    "group": "Asia",
    "y": 62.698,
    "size": 22211743,
    "x": 2280.769906
  },
  {
    "subGroup": "Zambia",
    "group": "Africa",
    "y": 42.384,
    "size": 11746035,
    "x": 1271.211593
  },
  {
    "subGroup": "Zimbabwe",
    "group": "Africa",
    "y": 43.487,
    "size": 12311143,
    "x": 469.7092981
  }
]
