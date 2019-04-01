"use strict";

{
    const init = () => {
        startBackground();
        $$('input').on("change", e => $('body').style.backgroundColor = `rgb(${red()}, ${green()}, ${blue()})`);
    }

    const startBackground = () => $('body').style.backgroundColor = `rgb(${red()}, ${green()}, ${blue()})`;

    const red = () => $('#red').value;
    const green = () => $('#green').value;
    const blue = () => $('#blue').value;

    init();
}