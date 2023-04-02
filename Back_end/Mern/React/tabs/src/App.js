import ArrayTabs from "./Components/ArrayTabs";
import React, {useState} from 'react';
import "./CSS/style.css";
import ArrayTabsContent from "./Components/ArrayTabsContent";

function App() {
    const [tabContentIndexNumberReceivingFromArrayTabsComponent, setTabContentIndexNumberReceivingFromArrayTabsComponent] = useState(0);
    const array = [];
    array.push({"label": "", "content": ""});
    array.push({"label": "Tab 1", "content": "Tab 1 content is showing here"});
    array.push({"label": "Tab 2", "content": "Tab 2 content is showing here"});
    array.push({"label": "Tab 3", "content": "Tab 3 content is showing here"});
    const [arrayOfTabsFromApp, setArrayOfTabsFromApp] = useState(array);

    return (
        <>
            <header className="d-flex justify-content-center">
                <ArrayTabs 
                    arrayOfTabs={arrayOfTabsFromApp} 
                    tabContentIndexNumber={tabContentIndexNumberReceivingFromArrayTabsComponent} 
                    setTabContentIndexNumber={setTabContentIndexNumberReceivingFromArrayTabsComponent} 
                />
            </header>
            <main className="d-flex justify-content-center" id="animate">
                <ArrayTabsContent
                    receivingArrayOfTabsFromApp={arrayOfTabsFromApp}
                    receivingTabContentIndexNumberFromApp={tabContentIndexNumberReceivingFromArrayTabsComponent}
                />
            </main>
        </>

    );
}

export default App;
