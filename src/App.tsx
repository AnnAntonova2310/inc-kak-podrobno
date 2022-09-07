import React from 'react';
import Accordion from "./Components/Accordion/Accordion";
import {Rating} from "./Components/Rating/Rating";
import OnOff from "./OnOff/OnOff";

function App() {
    return (
        <OnOff/>


        // <div>
        //     <PageTitle title={'This is App-component'}/>
        //     <PageTitle title={'Users'}/>
        //     <Rating value={3}/>
        //     <Accordion title={'Hello'} collapsed = {true}/>
        //     <Accordion title={'Tai kakaha'} collapsed = {true}/>
        //     <Rating value={0}/>
        //     <Rating value={1}/>
        //     <Rating value={2}/>
        //     <Rating value={3}/>
        //     <Rating value={4}/>
        //     <Rating value={5}/>
        // </div>
    )
}

export default App;

// type PageTitlePropsType = {
//     title: string
// }
//
// function PageTitle(props: PageTitlePropsType) {
//     return <h1>{ props.title }</h1>
//
// }
//
