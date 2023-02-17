const userForm = document.getElementById("formId");
const errMsgPass = document.querySelector(".errMsgPass");
function formSubmit(e) {
    // e.preventDefault;

    // name last name valid

    if (
        userForm[0].value.length <= 50 &&
        userForm[1].value.length <= 50 &&
        userForm[0].value !== "" &&
        userForm[1].value !== ""
    ) {
        console.log(`name ${userForm[0].value}`);
        console.log(`last name ${userForm[1].value}`);
    } else {
        console.log("max character is 50 name and last name");
        alert("max character is 50 name and last name");
    }
    console.log(`you age is ${userForm[2].value}`);
    // radio valid
    if (Boolean(userForm[3])) {
        console.log("you employed work");
    } else {
        console.log("you employed not work");
    }
    // const employedBoolian = userForm[5].value;
    // ? console.log("you employed work")
    // : console.log("you employed not work");
    // console.log(`you employed ${userForm[5].boolian}`);

    // password valid

    if (userForm[4].value === userForm[5].value && userForm[4].value !== "") {
        errMsgPass.style.display = "none";
        console.log(`good you password is ${userForm[4].value}`);
    } else {
        errMsgPass.style.display = "block";
        alert("error you password not is valid");
    }

    // email valid
    if (
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userForm[6].value)
    ) {
        console.log(`good you email is ${userForm[6].value}`);
    } else {
        alert("you email not valid");
        console.log("Miley form is broken");
    }
    // user lisst
    const userInfo = {
        name: userForm[0].value,
        lastname: userForm[1].value,
        age: userForm[2].value,
        employed: Boolean(userForm[3]),
        password: userForm[4].value,
        email: userForm[6].value,
    };
    console.log(userInfo);
}
