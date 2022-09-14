import React, {useState} from "react";
import {ratingValueType} from "./Rating";

type RaringPropsType = {}

function UncontrolledRating1(props: RaringPropsType) {


    let [value, setValue] = useState(0)

    const qw = ()=>{setValue(1)}

    return (
        <div>
            <Star selected={value > 0} setValue={qw}/>
            <Star selected={value > 1} setValue={()=>{setValue(2)}}/>
            <Star selected={value > 2} setValue={()=>{setValue(3)}}/>
            <Star selected={value > 3} setValue={()=>{setValue(4)}}/>
            <Star selected={value > 4} setValue={()=>{setValue(5)}}/>
        </div>
    )

}

type StarPropsType = {
    selected: boolean
    // value: ratingValueType
    setValue: ()=>void
}

function Star(props: StarPropsType) {
        return <span onClick={props.setValue}>
            {props.selected ? <b>star </b> : 'star ' }
        </span>
}

export default UncontrolledRating1