import React, {useState} from 'react';

const ArrayTabs = (props) => {

    const {arrayOfTabs} = props;

    return (
        <>
            {
                arrayOfTabs.map((tab, index) => {
                    return (
                        <div key={index}>
                            <h1>{tab.label}</h1>
                            <p>{tab.content}</p>
                        </div>
                    );
                })
            }
        </>
    );
}
export default ArrayTabs;