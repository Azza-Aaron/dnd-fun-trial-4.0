import {searchApiWithText} from "../../api/externalResources/searchApiViaQuery";
import {resultList} from "./mapResults";


export const getResult = async (value, setList) => {
  let result = await searchApiWithText(value)
  if( result.goodResponse ){
    resultList(result, setList)
    return
  }
  //try amend
  console.log(value)
  let removedSpaces = value.replaceAll(' ', "/")
  result = await searchApiWithText(removedSpaces)
  if( result.goodResponse ){
    resultList(result, setList)
    return
  }
  //amend once more
  let split = removedSpaces.split('')
  split = split.reverse()
  let newVar = []
  let once = false
  for (let i = 0; i < split.length; i++) {
    if(!once && split[i] === "/"){
      newVar.push('-')
      once = true
    } else {
      newVar.push(split[i])
    }
  }
  newVar.reverse()
  let finalValue = newVar.join("")
  result = await searchApiWithText(finalValue)
  if( result.goodResponse ){
    resultList(result, setList)
    return
  }
  setList(['Please try a different search'])
}