const reLabel = (labels, target, newString) => {
  for(let label of labels) {
    if (label.htmlFor === target) {
      label.innerHTML = newString;
    }
  }
};