import React from 'react';
import Accordion from "./Components/Accordion/Accordion";
import {UncontrolledRating} from "./Components/Rating/Rating";
import OnOff from "./OnOff/OnOff";
import UncontrolledAccordion from "./Components/Accordion/Accordion";

function App() {
    return (
        <div>
            <OnOff/>

            <UncontrolledAccordion title={'Tai kakaha'} />

            <UncontrolledRating />

        </div>

        // <div>
        //     <PageTitle title={'This is App-component'}/>
        //     <PageTitle title={'Users'}/>


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
