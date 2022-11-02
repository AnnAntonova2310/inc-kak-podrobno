import React, {useState} from 'react';

type OnOffRepType={
    on: boolean

}
export const OnOffRep = (props: OnOffRepType) => {
    let [on, setOn]=useState(false)
    const onStyle={
        display: 'inline-block',
        width: '20px',
        height: '15px',
        border: '1px black solid',
        padding: '5px',
        backgroundColor: on ? 'green' : 'white'
    }
    const offStyle={
        display: 'inline-block',
        width: '20px',
        height: '15px',
        border: '1px black solid',
        marginLeft: '2px',
        padding: '5px',
        backgroundColor: on ? 'white' : 'red'
    }
    const indicatorStyle={
        display: 'inline-block',
        borderRadius: '5px',
        border: '1px black solid',
        width: '10px',
        height: '10px',
        marginLeft: '5px',
        backgroundColor: on ? 'green' : 'red'
    }
    return (
        <div>
            <div style={onStyle} onClick={()=>setOn(false)}>On</div>
            <div style={offStyle} onClick={()=>setOn(true)}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
};

