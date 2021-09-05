import React, {useState} from 'react'
import {connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import {chooseTable, resetTable} from '../Actions';

const ActionButtons = ({chooseTable, resetTable}) => {
    return (
        <div>
            <Button variant="contained" color="primary" onClick={() => chooseTable('xpr')} >xpr</Button>
            <Button variant="contained" color="primary" onClick={() => chooseTable('bhc')}>bhc</Button>
            <Button variant="contained" color="primary" onClick={() => chooseTable('ltc')}>ltc</Button>
            <Button variant="contained" color="primary" onClick={() => resetTable()}>reset</Button>
        </div>
    )
}


export default connect(null,{chooseTable, resetTable})(ActionButtons)
