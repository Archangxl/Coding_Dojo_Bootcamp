import React from 'react';


const ArrayTabs = (props) => {

    const {arrayOfTabs, tabContentIndexNumber, setTabContentIndexNumber} = props;

    const contentIndexGetter = (index) => {
        setTabContentIndexNumber(index);
    }
    return (
        <div className="d-flex">
            {
                arrayOfTabs.map((tab, index) => {
                    return (
                        <div className="tabs m-2 bg-gradient" key={index} onClick={ (e)=> contentIndexGetter(index)}>
                            <h2>{tab.label}</h2>
                        </div>
                    );
                })
            }
        </div>
    );
}
export default ArrayTabs;