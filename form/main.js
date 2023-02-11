let $ = (param) => {
    return document.querySelector(param);
};

let form = $("form");

let requireCheck = (elements) => {
    elements.forEach((eleman) => {
        var elvalue = eleman.value.trim();
        if (elvalue == '') {
            eleman.classList.add('is-invalid');
            eleman.nextElementSibling.innerText = eleman.id + ` zorunlu`;
        } else {
            eleman.classList.remove('is-invalid');
            eleman.classList.add('is-valid');
            eleman.nextElementSibling.innerText = "";
        }

    });

};

let minMaxCMD = (element, min, max) => {
    let elvalue = element.value.trim();
    if (elvalue.length < min && elvalue.length > max) {
        element.nextElementSibling.innerText = `en az ${min} en çok ${max} karakter olmalıdır`;
    } else {
    }
};
form.addEventListener("submit", (event) => {

    event.preventDefault();

    let username = $("#username");
    let email = $("#email");
    let phone = $("#phone");
    let password = $("#password");
    let password2 = $("#password2");

    let forms = [username, email, phone, password, password2];
    requireCheck(forms);
    minMaxCMD(username, 3, 10);
    minMaxCMD(phone, 9, 15);
});


