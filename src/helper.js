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

  // findAllMatches(arr, input) {
  //   const filteredArray = arr.filter((obj) => {
  //     const matchDist = Object.keys(obj)[0];
      // return input.toLowerCase().indexOf(matchDist.toLowerCase()) > -1
  //   })
  // return filteredArray;
  // };
  findAllMatches(arr, input) {
    const filteredArray = arr.filter((obj) => {
      const matchDist = Object.keys(obj)[0];
      const text = input.toLowerCase();
      if(matchDist.toLowerCase().includes(text)) {
        return obj
      };
    })
    return filteredArray
  };
}
