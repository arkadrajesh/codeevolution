import logo from './logo.svg';
import './App.css';
import Condition from './components/condition';
import FunCondition from './components/funcondition';
import Greet from './components/greet';
import Form from './components/form';
import ParentCallback from './components/callBacks/parentCallback';
import ClickCounter from './components/hoc/clickCounter';
import MouseOver from './components/hoc/mouseOver';
import Users from './components/RenderProps/users';
import CounterState from './components/hooks/counterstate';
import HookCounterTwo from './components/hooks/HookCounterTwo';
import HookCounterThree from './components/hooks/HookCounterThree';
import Data from './components/effect/Data';
import User from './components/effect/user';

function App() {
  return (
    <div className="App">
      <User/>
      {/* <Data/> */}
      {/* <HookCounterThree/> */}
      {/* <CounterState/>
      <HookCounterTwo/> */}
      {/* <ClickCounter/>
      <MouseOver/>
      <Users render={(isLoggedIn)=>isLoggedIn? "Rajesh" : "Guest"}/> */}
      {/* <ParentCallback/> */}
      {/* <Condition></Condition> */}
      {/* <FunCondition/> */}
      {/* <Greet/> */}
      {/* <Form/> */}
    </div>
  );
}

export default App;
