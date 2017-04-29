var myObjectArray = [
{
  'DateOfBirth' : '06/11/1978',
  'Phone' : '770-786',
  'Email' : 'pbishop@hotmail.com' ,
  'Ethnicity' : 'Declined' ,
  'Race' : 'OtherRace'
},
{'DateOfBirth' : '06/11/1978',
  'Phone' : '770-786',
  'Email' : 'pbishop@hotmail.com' ,
  'Ethnicity' : 'Declined' ,
  'Race' : 'Hi'
 }]

for (var i = 0; i < myObjectArray.length; i++) {
    var raceName = myObjectArray[i].Race;
    console.log(raceName);
}