function validation() {
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var pwd = document.getElementById('pwd').value;
    var pwd1 = document.getElementById('pwd1').value;

    var forbiden_chars = ['$', '^', '#', '!', '@', '%', '&', '*', '(', ')', '-', '+', '=', '~', '`', '[', ']', '{', '}', '|', ',', '.'];

    for(var i=0;i<forbiden_chars.length;i++){
        if(username.includes(forbiden_chars[i]) || username.length <= 0){
            return {
                result: false,
                error: 'Please enter a valid username.'
            };
        }
    }
    if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        return {
            result: false,
            error: 'Please enter a valid email.'
        };
    }

    if(!(pwd==pwd1)) {
        return {
            result: false,
            error: 'Please enter the corect password.'
        };
    }
    if(pwd.length < 6) {
        return {
            result: false,
            error: 'Your password must be longer than 6 letters.'
        };
    } 
    return true;
}
function check() {
    var btn = document.getElementById('submit');
    var val = validation();

    if(val.result) {window.open('success.html', '_self');} else {
        if(val.error == undefined) {
            window.open('success.html', '_self');
        }
        document.getElementById('forget').innerHTML = val.error;
        console.log(val.error);
    }
}