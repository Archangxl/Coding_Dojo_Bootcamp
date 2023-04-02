import React from 'react';

const ArrayTabs = (props) => {

    const {arrayOfTabs, tabContentIndexNumber, setTabContentIndexNumber} = props;

    function myMove() {
        const elem = document.getElementById("animate");   
        console.log(elem);
        let marginTop = -12;
        
        if (marginTop != 5) {
            marginTop++;
            elem.style.marginTop = marginTop + "10px";
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
                            className="tabs m-2 bg-gradient" 
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