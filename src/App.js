// import logo from './logo.svg';
import './App.css';
import  FunctionComponent from './components/functionalComponent/FuncationalComponent';
import ClassCompoent from './components/classcomponents/ClassComponent';
import PropsClassComponent from './components/props/PropsClassComponent';
import StateClassComponent from './components/state/StateClassComponent';
import FunctionEvent from './components/event-binding/FunctionEvent';
import ClassEvent from './components/event-binding/ClassEvent';
import FunctionalCounter from './components/hooks/FunctionalCounter';
import ConditionalRendering from './components/conditional-rendering/ConditionalRendering';
import ListRendering from './components/list-rendering/ListRendering';
import RenderingIndexKey from './components/list-rendering/RenderingIndexKeys';
import UniqueKeyRendering from './components/list-rendering/UniqueKeyRendering';
import UserInputForm from './components/userinputform/UserInputForm';
import FragmentComponent from './components/fragments/FragmentComponent';
import MemosParentComponent from './components/memos/MemosParentComponent';

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
          <FunctionalCounter/>
          <ConditionalRendering/>
          <ListRendering/>
          <RenderingIndexKey/>
          <UniqueKeyRendering/>
          <UserInputForm/>
          <FragmentComponent/>
        */
        }
        
        <MemosParentComponent/>
      </header>
    </div>
  );
}

export default App;
