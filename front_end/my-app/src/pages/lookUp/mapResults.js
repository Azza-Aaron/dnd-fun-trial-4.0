import {processJson} from "./processJson";



export const resultList = (result, setList) => {
  console.log('result before mapping = ', result)
  const data = result.data.data
  const processed = processJson(data)
  setList(processed)
}


