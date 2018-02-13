import { API_ROOT, parseResponse } from './api'
import {showSpinner,hideSpinner} from './uiActions'
import {get_cookie, set_cookie, get_intl} from '../utils'


/*****************************************
 *         Social login Action
 *****************************************/
export function socialLogin(type,token,onSuccess) {  
    return dispatch => {
        dispatch(showSpinner())
        const fullUrl = API_ROOT + 'oauth/' + type + '/';
        return fetch(fullUrl, {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                'X-CSRFToken': get_cookie('csrftoken')
            },
            method: "post",
            credentials: 'include',
            body: JSON.stringify(token)
        })
            .then(console.log(JSON.stringify(token)))
            .then(parseResponse)
            .then((user) => {
                dispatch(gotAuthedUser(user.user))
                dispatch(hideSpinner())
                if(onSuccess) {
                    onSuccess()
                }
            })
            .catch((errors) => {
                dispatch(hideSpinner())
                throw errors
            });
    };
}


/*****************************************
 *         Utility functions
 *****************************************/
export const GOT_AUTHED_USER = 'GOT_AUTHED_USER';

export function gotAuthedUser(user=null, errors=null) {
    if(user){
        let date = new Date()
        date.setDate(date.getDate()+14)
        set_cookie(SESSION_NAME, true, {path: '/', expires: date})

        return {
            type: GOT_AUTHED_USER,
            user,
        };
    }
    if(errors){
        set_cookie(SESSION_NAME, false, {path: '/'})
        // return null
    }
}
