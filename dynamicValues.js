var allUSAArrays = [['Classifieds', 'Attorneys','Doctors','Matrimonials', 'Professionals','Advertisements'], ['United States'], ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Islands', 'Virginia', 'Washington', 'Washington DC', 'West Virginia', 'Wisconsin', 'Wyoming']]
var allIndiaArrays = [['Classifieds', 'Attorneys','Doctors','Matrimonials', 'Professionals','Advertisements'], ['India'], ['Andhra Pradesh', 'Telangana', 'Maharashtra', 'Karnataka', 'Tamil Nadu', 'Gujarat', 'Kerala', 'West Bengal', 'New Delhi', 'Hyderabad']]
var allUKArrays = [['Classifieds', 'Attorneys','Doctors','Matrimonials', 'Professionals','Advertisements'], ['United Kingdom'], ['Central London', 'Paris', 'Manchester', 'London', 'Liverpool', 'Birmingham', 'Cambridge', 'Global UK']]
var allCanadaArrays = [['Classifieds', 'Attorneys','Doctors','Matrimonials', 'Professionals','Advertisements'], ['Canada'], ['Ontario', 'British Columbia', 'Quebec', 'Alberta', 'Toronto', 'Montreal', 'Mississauga', 'Global Canada']]
var allAustraliaArrays = [['Classifieds', 'Attorneys','Doctors','Matrimonials', 'Professionals','Advertisements'], ['Australia'], ['Sydney', 'Perth', 'Melbourne', 'Victoria', 'Global Australia']]
var allPakistanArrays = [['Classifieds', 'Attorneys','Doctors','Matrimonials', 'Professionals','Advertisements'], ['Pakistan']]
var allChinaArrays = [['Classifieds', 'Attorneys','Doctors','Matrimonials', 'Professionals','Advertisements'], ['China']]
var allIrelandArrays = [['Classifieds', 'Attorneys','Doctors','Matrimonials', 'Professionals','Advertisements'], ['Ireland']]
var allDubaiArrays = [['Classifieds', 'Attorneys','Doctors','Matrimonials', 'Professionals','Advertisements'], ['Dubai']]
var allQatarArrays = [['Classifieds', 'Attorneys','Doctors','Matrimonials', 'Professionals','Advertisements'], ['Qatar']]
var allKuwaitArrays = [['Classifieds', 'Attorneys','Doctors','Matrimonials', 'Professionals','Advertisements'], ['Kuwait']]
var allSaudiArrays = [['Classifieds', 'Attorneys','Doctors','Matrimonials', 'Professionals','Advertisements'], ['Saudi']]
var allBahrainArrays = [['Classifieds', 'Attorneys','Doctors','Matrimonials', 'Professionals','Advertisements'], ['Bahrain']]
var allTurkeyArrays = [['Classifieds', 'Attorneys','Doctors','Matrimonials', 'Professionals','Advertisements'], ['Turkey']]
var allMalaysiaArrays = [['Classifieds', 'Attorneys','Doctors','Matrimonials', 'Professionals','Advertisements'], ['Malaysia']]

var allGermanyArrays = [['Classifieds', 'Attorneys','Doctors','Matrimonials', 'Professionals','Advertisements'], ['Germany']]
var allOmanArrays = [['Classifieds', 'Attorneys','Doctors','Matrimonials', 'Professionals','Advertisements'], ['Oman']]
var allPhilippinesArrays = [['Classifieds', 'Attorneys','Doctors','Matrimonials', 'Professionals','Advertisements'], ['Philippines']]
var allSingaporeArrays = [['Classifieds', 'Attorneys','Doctors','Matrimonials', 'Professionals','Advertisements'], ['Singapore']]
var allIndonesiaArrays = [['Classifieds', 'Attorneys','Doctors','Matrimonials', 'Professionals','Advertisements'], ['Indonesia']]
var allBangladeshArrays = [['Classifieds', 'Attorneys','Doctors','Matrimonials', 'Professionals','Advertisements'], ['Bangladesh'],['Dhaka','Chittagong']]
var allEgyptArrays = [['Classifieds', 'Attorneys','Doctors','Matrimonials', 'Professionals','Advertisements'], ['Egypt']]

function allPossibleCasesGUID(arr) {
  var GUIDKey = "GUID";
  if (arr.length == 1) {
    return arr[0];
  } else {
    var GUID = [];

    var allCasesOfRest = allPossibleCasesGUID(arr.slice(1));  // recur with the rest of array
    for (var i = 0; i < allCasesOfRest.length; i++) {
      for (var j = 0; j < arr[0].length; j++) {
        GUID.push(arr[0][j].replace(/[\. ,:-]+/g, "") + '_' + allCasesOfRest[i].replace(/[\. ,:-]+/g, ""));
      }
    }
    return GUID;
  }
}

function allPossibleCasesNames(arr) {
  var nameKey = "name";
  if (arr.length == 1) {
    return arr[0];
  } else {
    var names = [];

    var allCasesOfRest = allPossibleCasesNames(arr.slice(1));  // recur with the rest of array
    for (var i = 0; i < allCasesOfRest.length; i++) {
      for (var j = 0; j < arr[0].length; j++) {
        names.push(allCasesOfRest[i] + ' ' + arr[0][j]);
      }
    }
    return names;
  }
}

function getPostmanData(allUSAArrays){
    var result = allPossibleCasesGUID(allUSAArrays);
    var result1 = allPossibleCasesNames(allUSAArrays);

    var GUIDObj;
    var GUIDArr = [];

    for(var k=0;k<result.length;k++){
    GUIDObj = {GUID:result[k],name:result1[k]};
    GUIDArr.push(GUIDObj);
    }
    return GUIDArr;
}


copy(getPostmanData(allUSAArrays));

copy(getPostmanData(allIndiaArrays));
copy(getPostmanData(allUKArrays));
copy(getPostmanData(allCanadaArrays));
copy(getPostmanData(allAustraliaArrays));
copy(getPostmanData(allPakistanArrays));
copy(getPostmanData(allChinaArrays));
copy(getPostmanData(allIrelandArrays));
copy(getPostmanData(allDubaiArrays));
copy(getPostmanData(allQatarArrays));

copy(getPostmanData(allKuwaitArrays));
copy(getPostmanData(allSaudiArrays));
copy(getPostmanData(allBahrainArrays));
copy(getPostmanData(allTurkeyArrays));
copy(getPostmanData(allMalaysiaArrays));

copy(getPostmanData(allGermanyArrays));
copy(getPostmanData(allOmanArrays));
copy(getPostmanData(allPhilippinesArrays));

copy(getPostmanData(allSingaporeArrays));
copy(getPostmanData(allIndonesiaArrays));
copy(getPostmanData(allBangladeshArrays));
copy(getPostmanData(allEgyptArrays));

