
export const timeout = ( delay ) => {
  setTimeout(() => {
  }, delay);

}

export const callFunctionTimeOut = ( func, delay ) => {
  setTimeout(() => {
    func()
  }, delay);

}