import {debounce} from 'lodash'
import {getResult} from "./getResult";

export const DebouncedInput = ({setList}) => {
  const onChange = (e) => {
    if (!e.target.value){
      setList([''])
      return
    }
    getResult(e.target.value, setList)
  }

  const debouncedOnChange = debounce(onChange, 500);

  return <input id={'debounce-search-inp-el'} onChange={debouncedOnChange} />
}