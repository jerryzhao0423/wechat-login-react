import { connect } from 'react-redux'
import * as authActions from '../../actions/authActions'
import wxLogin from "../components/wxLogin";

const mapDispatchToProps = (dispatch) => {
    return {
        socialLogin: function (type,token,onSuccess) {
            dispatch(authActions.socialLogin(type,token,onSuccess))
        }
    }
}

export default connect(mapDispatchToProps)(wxLogin);