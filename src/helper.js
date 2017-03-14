export default class DistrictRepository {
  constructor(data) {
    this.data = this.reduceData(data);
  }

  reduceData(data) {
    return data.reduce((acc, currentValue) => {
      const objData = currentValue.Data;
      const location = currentValue.Location;
      const timeFrame = currentValue.TimeFrame;


      if (!acc[location]) {
        acc[location] = { 'location': location,
        'data': {}};
      }
      acc[location]['data'][timeFrame] = Math.round(objData*1000) / 1000;
      return acc;
    },{})
  }



  findByName(name) {

    // console.log(this.data)
    let myArray = Object.keys(this.data);

    // console.log(this.data)
    if(name) {
      let searchName = myArray.filter((element, index) => {
        if(element.toLowerCase() ===  name.toLowerCase()) {
          return myArray[index]
        }
      });
      return this.data[searchName[0]];

    } else {
      return undefined
    };

  }

}
