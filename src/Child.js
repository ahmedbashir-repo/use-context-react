import React, {useContext} from 'react';
import ValueContext from './ValueContext';
function Child(props){
    let value = React.useContext(ValueContext);
    return (
        <div>
            Child {value}
        </div>
    );
}

export default Child;