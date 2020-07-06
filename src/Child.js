import React, {useContext} from 'react';
import ValueContext from './ValueContext';
function Child(props){
    let num = React.useContext(ValueContext);
    return (
        <div>
            Child {num}
            <button onClick = {() => {num[1](++num[0])}}>Update Value</button>
        </div>
    );
}

export default Child;