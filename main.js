// touches: is an array-like object that contains all touch objects that occur in the document

// targetTouches: is an array-like object that contains all touch objects that occur in the target element

// changedTouches: is a touchList object contains one touch object for each touch point which contributed to the event

document.addEventListener("touchstart", (event) => {
  //   console.log(event);
  // console.log("touch start")
  [...event.targetTouches].forEach((touch) => {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    dot.style.top = `${touch.pageY}px`;
    dot.style.left = `${touch.pageX}px`;
    dot.id = touch.identifier;
    document.body.appendChild(dot);
  });
});

document.addEventListener("touchmove", (event) => {
  //   console.log("touch move");
  //   console.log(event.changedTouches);

  [...event.changedTouches].forEach((touch) => {
    const dot = document.getElementById(touch.identifier);
    dot.style.top = `${touch.pageY}px`;
    dot.style.left = `${touch.pageX}px`;
  });
});

document.addEventListener("touchend", (event) => {
  //   console.log("touch end");

  [...event.changedTouches].forEach((touch) => {
    const dot = document.getElementById(touch.identifier);
    dot.remove();
  });
});

const topHalf = document.getElementById("top-half");

topHalf.addEventListener("touchstart", (event) => {
  event.preventDefault(); // to remove default touch effects like pinch zoom, slide down refresh also click event

  if (event.targetTouches.length > 2) {
    console.log("Multiple touches");
  }
  console.log("Touches ", event.touches);
  console.log("Targets ", event.targetTouches);
  console.log("Changed ", event.changedTouches);
});

document.addEventListener("click", (event) => {
  console.log("clicked");
});

document.addEventListener("touchcancel", (event) => {
  console.log("touche canceled");
  [...event.changedTouches].forEach((touch) => {
    document.getElementById(touch.identifier).remove();
  });
});
