const validatePassword = (input1, input2) => {
    parent = input1.parentElement;
    if (input1.value === input2.value){
        input1.setCustomValidity("");
        input1.setCustomValidity("");
    }else {
        input1.setCustomValidity("Passwords do not match");
        input1.value = "";
        input2.value = "";
        input1.classList.add("invalid");
        input2.classList.add("invalid");
    }
    return;
}