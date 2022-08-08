
function IsValidated () {

    const sec = 1000;
    const min = sec * 60;
    const hour = min * 60;
    let keepLogin;

    const auth = JSON.parse(localStorage.getItem('trackit'));
    
    if (auth.keepLogin) {
        keepLogin = auth.keepLogin;
    }

    const timeNow = +new Date();
    const timeLogged = auth.timestamp;


    if (auth) {
        if (!keepLogin) {
            return ((timeNow - timeLogged) <= (hour * 1));
        } else {
            return true;
        }
    } else {
        return false;
    }
}

export default IsValidated;