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
        'data': {} };
      }
      if((typeof objData) === 'number') {
        acc[location]['data'][timeFrame] = Math.round(objData * 1000) / 1000;
      } else {
        acc[location]['data'][timeFrame] = 0;
      }
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
      return this.data[searchName];
    } else {
      return undefined
    };
  }

  // function filterItems(input) {
  findAllMatches(input) {
    const newObj = Object.keys(this.data);
    // debugger
      if(!input) {
        console.log(newObj)
        return newObj;
      }
        return newObj.filter((loc) =>
          loc.toLowerCase().indexOf(input.toLowerCase()) > -1
  )};
};
