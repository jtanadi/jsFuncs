const scrollToHeightIndex = (height, index, cssTransition) => {
	/* (num, num, string)

	Using CSS's translate property, move the body to a target height 
	based on height * index. index works like page numbers if height = 1 "page"

	If cssTransition isn't specified, "none" is used
	*/
	document.body.style.transform = `translate(0, -${height * index}px)`;
	document.body.style.transition = cssTransition || "none";
}