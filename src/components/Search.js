import React, {useState} from 'react';
import {connect} from 'react-redux';
import {searchSubCoin} from '../Actions';
import Input from '@material-ui/core/Input';
const Search = ({searchSubCoin}) => {
    const [value, setValue] = useState('');

    const onChange = e => {
        setValue(e.target.value);
        searchSubCoin(e.target.value);
    }
    return (
        <div> <Input placeholder="search" color="blue" value={value} onChange={(e) => onChange(e)}/></div>
    )
}

export default connect(null, {searchSubCoin})(Search);

