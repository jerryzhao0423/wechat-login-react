import React, { Component, PropTypes } from 'react'
import './signUp.css'

class SignUp extends Component{

    renderSocialLoginSection(){
        const re_uri = encodeURIComponent(redirect_uri);
        const app_id = app_id;
        const weChat_url = `https://open.weixin.qq.com/connect/qrconnect?appid=${app_id}&redirect_uri=${re_uri}&response_type=code&scope=snsapi_login#wechat_redirect`
        return (
            <div className="socialSignUpContainer">
                <a  className="weChatLoginButton" href={weChat_url}>
                    <i className="fa fa-weixin" aria-hidden='true' style={{'fontSize':'42px', 'padding':'2px'}}/>
                </a>
            </div>
        )
    }
    
    render() {
        return (
            <div className="signUpContainer">
                {this.renderSocialLoginSection()}
            </div>
        )
    }
}

export default SignUp