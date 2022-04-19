// import Cookies from 'universal-cookie';

import {ReactSession} from 'react-client-session';

var UserProfile = (function() {
    ReactSession.setStoreType("localStorage");
    var isActive = false;

    var email = "";
    var pseudo = "";
    var token = "";

    var getIsActive = function(){
        return isActive;
    };

    var setIsActive = function(session){
        isActive = session;
    };

    //Initialize a session
    var createSession = function(mail_param, pseudo_param, token_param){
        isActive = true;
        email = mail_param;
        pseudo = pseudo_param;
        token = token_param;

        ReactSession.set("login", pseudo);
        ReactSession.set("pseudo", pseudo);
        ReactSession.set("isActive", true);
    };

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

    //Reset the session and the user's info
    var reset = function(){
        email = '';
        pseudo = '';
        token = '';
        isActive = false;
        
        ReactSession.remove("isActive");
        ReactSession.remove("login");
        ReactSession.remove("pseudo");
    };

    return{
        getMail: getMail,
        setMail: setMail,
        getPseudo: getPseudo,
        setPseudo: setPseudo,
        getToken: getToken,
        setToken: setToken,
        getIsActive: getIsActive,
        reset: reset,
        createSession: createSession,
        setIsActive: setIsActive,
    }

}) ();

export default UserProfile;