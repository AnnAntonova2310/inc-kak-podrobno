import Accordion from './components/Accordion/accordion';
import Rating from './components/Rating/rating';
import {OnOff} from "./components/OnOff/OnOff";

function App() {
    return (
        <div>
            {/*<PageTitle title={'This is APP component'}/>*/}
            {/*<PageTitle title={'Users'}/>*/}
            {/*Article 1*/}
            {/*<Accordion titleValue={'---Menu---'} collapsed={true}/>*/}
            {/*<Accordion titleValue={'---List---'} collapsed={false}/>*/}
            {/*Article 2*/}
            {/*<Rating value={0}/>*/}
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}
            <OnOff  on={true}/>
            <OnOff  on={false}/>
            {/*<OnOff on={false}/>*/}
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return (
        <h1>{props.title}</h1>
    )
}

export default App;
