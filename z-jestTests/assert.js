function assert(condition, message) {
  /* (condition[, str]) -> Error
  Returns Error object if condition is false
  If no message is provided, default "Assertion failed" will be used.
  */
  
  if(!condition) {
    throw new Error(message || "Assertion failed");
  }
}