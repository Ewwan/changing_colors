"use strict";

{
    const init = () => {
      changeBackgroundColorFor(buttonElements);
    };
    // const changeBackgroundColorFor2 = buttonArray => buttonArray.forEach((button, index) => {
    //   button.on("click", () => colorButton(index))
    // })
    const changeBackgroundColorFor = (elem) => elem.on("click", (e) => {
      console.log(e.target)
      elem.forEach((b, i) => colorButton(e.target))}); 
    const colorButton = button => $('body').style.backgroundColor = colorLabelFor(button);
    const colorLabelFor = button => button.classList;

    const buttonElements = $$('div.buttons > button');

    init();
}