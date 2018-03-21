/* eslint-disable no-param-reassign */

const reLabelInputElmt = (labels, inputElmt, newString) => {
  labels.forEach(label => {
    if(label.htmlFor === inputElmt) {
      label.innerHTML = newString;
    }
  });
};

module.exports = reLabelInputElmt;
