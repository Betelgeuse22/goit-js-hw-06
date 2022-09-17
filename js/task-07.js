const fontSizeControlEl = document.querySelector("#font-size-control");

const textEl = document.querySelector("#text");

fontSizeControlEl.addEventListener("input", onChangeSize);

function onChangeSize(event) {
  if (
    event.currentTarget.value <= fontSizeControlEl.attributes.max.value ||
    event.currentTarget.value >= fontSizeControlEl.attributes.min.value
  )
    textEl.style.fontSize = `${event.currentTarget.value}px`;
}
