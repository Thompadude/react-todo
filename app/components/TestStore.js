import React from 'react';
import {connect} from 'react-redux';
import {alert} from '../actions'

// =========================================================
// TODO READ http://redux.js.org/docs/api/Store.html#dispatch
// =========================================================
const TestStore = ({dispatch}) => {
    return (
        <div>
            <input id="test"/>
            <button onClick={() => {
                let value = document.getElementById('test').value;
                dispatch(alert(value))
            }}>
                Click me and test the store!
            </button>
            <br />
            <br />
            <br />
            <br />
            <br />
        </div>
    )
};

// =====================================================================================================================================
// TODO READ https://github.com/reactjs/react-redux/blob/master/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options
// =====================================================================================================================================
function mapStateToProps(alertMessage) {
    return {
        alertMessage
    }
}

export default connect(mapStateToProps)(TestStore)