import React from 'react';

const ArrayTabsContent = (props) => {

    const {receivingArrayOfTabsFromApp, receivingTabContentIndexNumberFromApp} = props;

    return (
        <>
            {
                receivingTabContentIndexNumberFromApp === 0 ? 
                <div>

                </div> 
                
                :
                <>
                    <div className="m-2 p-3 d-flex contents">
                        <p>{receivingArrayOfTabsFromApp[receivingTabContentIndexNumberFromApp].content}</p>
                    </div>
                </>
            }
        </>
    );

}
export default ArrayTabsContent; 