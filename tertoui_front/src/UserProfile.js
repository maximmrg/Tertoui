var UserProfile = (function() {
    var isSessionCurrent = false;

    var email = "";
    var pseudo = "";
    var token = "";

    var getIsSessionCurrent = function(){
        return isSessionCurrent;
    };

    var createSession = function(){
        isSessionCurrent = true;
    }

    var getMail = function(){
        return email;
    };

    var setMail = function(mail_param){
        email = mail_param;
    };


    var getPseudo = function(){
        return pseudo;
    };

    var setPseudo = function(pseudo_param){
        pseudo = pseudo_param;
    };

    var getToken = function(){
        return token;
    };

    var setToken = function(token_param){
        token = token_param;
    };

    var reset = function(){
        email = '';
        pseudo = '';
        token = '';
        isSessionCurrent = false;
    };

    return{
        getMail: getMail,
        setMail: setMail,
        getPseudo: getPseudo,
        setPseudo: setPseudo,
        getToken: getToken,
        setToken: setToken,
        getIsSessionCurrent: getIsSessionCurrent,
        reset: reset,
        createSession: createSession,
    }

}) ();

export default UserProfile;