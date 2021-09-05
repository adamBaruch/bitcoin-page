import React from 'react';
import CoinTable from './CoinTable';
import ActionButtons from './ActionButtons';
import Search from './Search';
import { connect } from 'react-redux';

const CoinsPage = ({db}) => {
    return (
        <div>
            <ActionButtons/>
            <Search/>
            {  
                db.map(coin => {
                    if(coin.name)
                        return (
                            <div>
                                <CoinTable coin={coin}/>
                                <hr/>
                            </div>
                        )
                }) 
            }
        </div>
    )
}

const mapStateToProps = state => {
    return {db: state.db}
}

export default connect(mapStateToProps)(CoinsPage);
