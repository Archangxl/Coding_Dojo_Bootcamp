import React from 'react';

const ArrayTabsContent = (props) => {

    const {receivingArrayOfTabsFromApp, receivingTabContentIndexNumberFromApp} = props;

    return (
        <div className="m-2 p-2 contents">
            <p>{receivingArrayOfTabsFromApp[receivingTabContentIndexNumberFromApp].content}</p>
        </div>
    );

}
export default ArrayTabsContent; 