import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { StarBorder,Star } from '@material-ui/icons';

import {connect} from 'react-redux';
import {changeStar} from '../Actions';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
     
});


const BasicTable = ({coin, changeStar}) => {
  const classes = useStyles();

  const coinData = coin.data;
  const coinName = coin.name;


  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
              {coinName}
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {coinData.map((row,index) => (
            <TableRow key={row.name}>
              <TableCell >{row.type}</TableCell>
              <TableCell >{row.value}</TableCell>
              <TableCell >{row.percent}</TableCell>
              <TableCell >{row.total}</TableCell>
              <TableCell >{row.star ? 
                  <Star onclick={() => changeStar({coinName,index})}/> : 
                  <StarBorder onclick={changeStar({coinName,index})} /> }</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default connect(null,{changeStar})(BasicTable); 