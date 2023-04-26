import React from 'react';

const ArrayTabs = (props) => {

    const {arrayOfTabs, tabContentIndexNumber, setTabContentIndexNumber} = props;
    console.log(document.getElementsByClassName("contents"));
    function myMove() {
        const content = document.getElementById("animate"); 
        let contentMarginTop = -10;
        let interval = setInterval(styleChanger, 25);
        function styleChanger() {
            if (contentMarginTop !== 25) {
                contentMarginTop+=1;
                content.style.marginTop = contentMarginTop + "px";
            } else {
                clearInterval(interval);
            }
        }
    }

    const contentIndexGetter = (index) => {
        setTabContentIndexNumber(index);
        myMove();
    }
    return (
        <div className="d-flex">
            {
                arrayOfTabs.map((tab, index) => {
                    if(index === 0) {
                        return (
                            <div key={index}>

                            </div>
                        );
                    }
                    return (
                        <div 
                            className="tabs m-2" 
                            key={index} 
                            onClick={ 
                                (e)=> contentIndexGetter(index)
                            }
                            >

                            <h2>{tab.label}</h2>
                        </div>
                    );
                })
            }
        </div>
    );
}
export default ArrayTabs;