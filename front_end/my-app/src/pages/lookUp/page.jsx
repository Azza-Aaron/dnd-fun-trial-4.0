import {GeneralLayout} from "../../layouts/main";
import {SearchApiInput} from "./searchInput";
import {SearchHeader} from "./header";

export const Lookup = () => {
  return(
    <>
      <GeneralLayout r1M={<SearchHeader />} r2M={<SearchApiInput />} />
    </>
  )
}