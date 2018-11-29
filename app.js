// blur event - when you enter sth in a form and take the focus out of the form field
document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('zip').addEventListener('blur', validateZip);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('phone').addEventListener('blur', validatePhone);

function validateName(){
    const name = document.getElementById('name');
    const re = /^[a-zA-Z]{2,10}$/;

    if (!re.test(name.value)) {
        name.classList.add('is-invalid');
    } else {
        name.classList.remove('is-invalid');
    }
}

function validateZip(){
    const zip = document.getElementById('zip');
    const re = /^[0-9]{5}(-[0-9]{4})?$/;                                    // in the () we have grouped an optional dash and four digits for e.g. American zips

    if (!re.test(zip.value)) {
        zip.classList.add('is-invalid');
    } else {
        zip.classList.remove('is-invalid');
    }
}

function validateEmail(){
    const email = document.getElementById('email');
    const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{1,63})$/;    // officially, the TLD for a custom email can be from zero to 63 characters

    if (!re.test(email.value)) {
        email.classList.add('is-invalid');
    } else {
        email.classList.remove('is-invalid');
    }
}
function validatePhone(){
    const phone = document.getElementById('phone');
    const re = /^(\+370)(\d{8})$/;

    if (!re.test(phone.value)) {
        phone.classList.add('is-invalid');
    } else {
        phone.classList.remove('is-invalid');
    }
}