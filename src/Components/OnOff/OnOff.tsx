 type PropsOnOffType = {
     on: boolean
}

export const OnOff=(props: PropsOnOffType)=> {

    const onStyle={
        width: '30px',
        height: '20px',
        border: '1px solid black',
        padding: '5px',
        display: 'inline-block',
        backgroundColor: props.on ? 'green' : 'white'
    }
    const offStyle={
        width: '30px',
        height: '20px',
        border: '1px solid black',
        marginLeft: '3px',
        padding: '5px',
        display: 'inline-block',
        backgroundColor: props.on ? 'white' : 'red'
    }

    const indicatorStyle={
        width: '15px',
        height: '15px',
        border: '1px solid black',
        borderRadius: '10px',
        marginLeft: '5px',
        display: 'inline-block',
        backgroundColor: props.on ? 'green' : 'red'
    }

    return( <div>
        <div style={onStyle}>On</div>
        <div style={offStyle}>Off</div>
        <div style={indicatorStyle}>{props.on}</div>
        </div>
    )
}