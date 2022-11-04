const form = document.querySelector(".login-form");
const input = document.querySelector(".login-form__input");
const greeting = document.querySelector(".greeting");

function greetingUser(name) {
    form.classList.add("hidden");
    greeting.innerText = `Hello, ${name}!`;
}

function initialization() {
    input.value = "";
}

function whoAreYou(event) {
    event.preventDefault();
    const entered_name = input.value;

    let result = null;
    $.ajax({
        type: "GET",
        url: `/who/${entered_name}`,
        data: {},
        success: function(response) {
            if(result != null) {
                result = response['data'][0]['name'];
                greetingUser(result);
                return result;
            }
            else {
                alert('등록된 사용자가 아닙니다.');
                initialization();
                return 0;
            }
        }
    });

   
    
}



form.addEventListener("submit",whoAreYou);

if(whoAreYou() != 0) {
    greetingUser();
}
else {
    initialization();
}