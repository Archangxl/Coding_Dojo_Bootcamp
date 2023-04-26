import './App.css';
import './CSS/style.css'
import Header from './Components/Header';
import Navigation from './Components/Navigation';
import Main from './Components/Main';
import SubContent from './Components/SubContent';
import Advertisment from './Components/Advertisment';

function App() {
    return (
        <div className="Page">
            <Header />
            <div className="Flex">
                <Navigation />
                <Main>
                    <div className='MainFlex'>
                        <SubContent />
                        <SubContent />
                        <SubContent />
                    </div>
                    <Advertisment />
                </Main>
            </div>
        </div>
    );
}

export default App;
