

export const processJson = (data) => {
  const simpleStringsList = [];
  const objectsList = [];
  const arrayList = [];
  const partData = (data) => {
    for ( const [key, value ] of Object.entries(data)) {
      if(Array.isArray(value)){
        if(typeof value[0] === 'object'){
          objectsList.push({header: key})
          partData(value)
          continue
        }
        arrayList.push({name: key, body: value.toString()});
        continue
      }
      if(!Array.isArray(value) && typeof value === 'object'){
        partObjects(value, key);
        continue
      }
      if(value){
        if(typeof value === 'string' || !isNaN(value)){
          simpleStringsList.push({name: key, body:value.toString()});
        }
      }

    }
  }

  const partObjects = (data, title) => {
    const iterateObjects = (data) => {
      for (const [key, value] of Object.entries(data)){
        if(typeof value === 'object'){
          objectsList.push({header: key})
          iterateObjects(value);
          continue
        }
        if(Array.isArray(value)){
          objectsList.push({name: key, body: value.toString()});
          continue
        }
        if(typeof value === "string" || !isNaN(value)){
          objectsList.push({name: key, body: value.toString()});
        }
      }
    }
    objectsList.push({header: title});
    iterateObjects(data)
  }

  partData(data);
  //console.log('Deconstructed objects list = ', objectsList)
  //console.log('Deconstructed arrays list = ', arrayList)
  //console.log('simple string list = ', simpleStringsList)
  //console.log('pushed list ', simpleStringsList.concat(objectsList, arrayList))
  return simpleStringsList.concat(objectsList, arrayList)
}
