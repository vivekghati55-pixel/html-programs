let btns = document.querySelectorAll(".btn");
let inputBox = document.querySelector("#input-box");

let str = "";


const btnHandler = (inputValue) => {


    if (inputValue == "AC") {
        str = "";
        inputBox.value = str;
    }
    else if (inputValue == "DEL")// "3+5+9"
    {
        str = str + ""
        str = str.substring(0, str.length - 1)
        inputBox.value = str;
    }
    else if (inputValue == "=") {
        str = eval(str);
        inputBox.value = str;
    }
    else {
        if (str.length > 0) {

            if ("+/%*-.".includes(str[str.length - 1]) && "+/%*-.".includes(inputValue)) {
                let newstr = ""
                for (let i = 0; i < str.length; i++) {
                    if (i == str.length - 1) {
                        newstr = newstr + inputValue;
                    }
                    else {
                        newstr = newstr + str[i];
                    }
                }
                str = newstr;
                inputBox.value = str;
            }
            else {
                str = str + inputValue;
                inputBox.value = str;
            }
        } else {
            str = str + inputValue;
            inputBox.value = str;
        }
    }


}

btns.forEach((btn) => {
    btn.addEventListener("click", (evt) => {
        let inputValue = evt.target.innerText;
        btnHandler(inputValue);
    })
})

document.onkeydown = (evt) => {
    console.log(evt.key)
    if (evt.key >= '0' && evt.key <= '9') {
        btnHandler(evt.key)
    }
    else if (evt.key == '+' || evt.key == '-' || evt.key == '*' || evt.key == '/' || evt.key == '%' || evt.key == '.') {
        btnHandler(evt.key);
    }
    else if (evt.key == 'Enter') {
        btnHandler("=");
    }
    else if (evt.key == "Backspace") {
        btnHandler("DEL")
    }
    else if (evt.key == "Escape") {
        btnHandler("AC")
    }
}
