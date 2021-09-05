const initialState = {
    db:[
        { 
            name: 'xpr' ,
            data: [
             {type: "XPRAUD",value: 324,percent: "0.35%",total: "235.55k",star: false},
             {type: "XPRADF", value: 324,percent: "0.35%",total: "235.55k",star: false},
             {type: "XPRAGG",value: 324,percent: "0.35%",total: "235.55k",star: false},
             {type: "XPRACC",value: 324,percent: "0.35%",total: "235.55k",star: false}
            ]
        },
        {
            name: 'bhc',
            data: [
                {type: "BHCEUD",value: 324,percent: "0.35%",total: "235.55k",star: false},
                {type: "BHCAUD",value: 324,percent: "0.35%",total: "235.55k",star: false},
            ],
        },
        {
            name: 'ltc',
            data: [
                {type: "LTCASD",value: 324,percent: "0.35%",total: "235.55k",star: false},
                {type: "LTCADF",value: 324,percent: "0.35%",total: "235.55k",star: false}
            ]       
        }
    ]
}

function coin(state = initialState, {type,payload}){
    switch(type){
        case 'GET_COIN':
            return {...state}
        case 'CHOOSE_TABLE':
            return {...state, db: initialState.db.filter(coin => coin.name === payload)}
        case 'SEARCH_SUB_COIN':
            return {...state, db: initialState.db.map(coin => {
                return {
                    name: coin.name,
                    data: coin.data.filter(subCoin => {
                        return subCoin.type.toLowerCase().includes(payload.toLowerCase())
                })
            }})}
        case 'RESET_TABLE':
            return {...state, db: initialState.db}        
        // case 'CHANGE_STAR':
        // return {...state, db: state.db.map( coin => {
        //     if(coin.name === payload.coinName){
        //         coin.data.map()
        //     } else
        // })[payload.coinName].data[payload.index]}        
        default: 
            return state
    }
}

export default coin;

