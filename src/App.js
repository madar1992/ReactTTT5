import logo from './logo.svg';
import Greet from './components/Greet';
import './App.css';
import GreetWithDestructingProps1 from './components/GreetWithDestructingProps1'
import GreetWithDestructingProps2 from './components/GreetWithDestructingProps2';
import GreetWithDestructingInClassComponent from './components/GreetWithDestructingInClassComponent'
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';

function App() {
  return (
    <div className="App">
      <Greet name="madar" heroname="alli saheb"/>
      <GreetWithDestructingProps1 name="saheb" heroname="alli saheb"/>
      <GreetWithDestructingProps2 name="dudekula" heroname="alli saheb"/>
      <GreetWithDestructingInClassComponent name="Alli saheb" heroname="chanu"/>
      <FunctionClick />
      <ClassClick />
    </div>
  );
}

export default App;
