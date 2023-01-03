// import logo from './logo.svg';
import './App.css';
import  FunctionComponent from './components/functionalComponent/FuncationalComponent';
import ClassCompoent from './components/classcomponents/ClassComponent';
import PropsClassComponent from './components/props/PropsClassComponent';
import StateClassComponent from './components/state/StateClassComponent';
import FunctionEvent from './components/event-binding/FunctionEvent';
import ClassEvent from './components/event-binding/ClassEvent';
import FunctionalCounter from './components/hooks/FunctionalCounter';
/**
 * 
 * @returns youtube tutorails link
 * https://www.youtube.com/watch?v=7ASgwDgKlDM&list=PLSsAz5wf2lkK_ekd0J__44KG6QoXetZza&index=15
 */
function App() {
  return (
    <div className="App">
      <header className="App-header">
       {
        /*
          <FunctionComponent/> 
          <ClassCompoent/>
          <PropsClassComponent message="This is props in message" />
          <StateClassComponent/>
          <FunctionEvent/>
          <ClassEvent/>
          
        */
        }
        <FunctionalCounter/>
      </header>
    </div>
  );
}

export default App;
