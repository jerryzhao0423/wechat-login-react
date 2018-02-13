import React, {Component} from 'react'


class wxLogin extends Component{
    componentWillMount(){
        const query = window.location.search;
        const paras = query.substr(1).split('&');
        const code = paras[0].split('=')[1];
        console.log(code);
        if (code) {
            this._fetchToken(code)
        }else {
            this.props.router.push('*')
        }
    }
    _fetchToken(code){
        const app_id = app_id;
        const app_secret = app_secret;
        const apiUrl = `https://api.weixin.qq.com/sns/oauth2/access_token?appid=${app_id}&secret=${app_secret}&code=${code}&grant_type=authorization_code`;
        return fetch(apiUrl,{
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            method: 'GET',
        })
            .then((res)=>res.json()
                .then((data)=> {
                    console.log(data)
                    this._responseWechat(data.access_token, data.openid)
                }))
            .catch((err)=>{
                throw err
            })
    }
    _responseWechat(token, openID){
        this.props.socialLogin(
            "wechat",
            {
                access_token:token,
                openid:openID
            },
            ()=>{this.props.router.push('/')}
        )
    }
    render(){
        return(<div></div>)
    }
}

export default wxLogin