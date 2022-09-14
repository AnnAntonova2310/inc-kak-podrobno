import React, {useState} from 'react';
import Accordion from "./Components/Accordion/Accordion";
import {Rating, ratingValueType} from "./Components/Rating/Rating";
import OnOff from "./OnOff/OnOff";
import UncontrolledAccordion from "./Components/Accordion/Accordion";
import UncontrolledRating1 from "./Components/Rating/UncontrolledRating-1";

function App() {

    let [ratingValue, setRatingValue]=useState<ratingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed]=useState<boolean>(false)

    return (
        <div>
            <OnOff/>
            {/*<UncontrolledAccordion title={'Tai kakaha'} />*/}
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <UncontrolledRating1/>
            <Accordion
                title={'Menu'}
                collapsed={accordionCollapsed}
                onClick={setAccordionCollapsed}
            />
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
