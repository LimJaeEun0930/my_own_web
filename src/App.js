import logo from './logo.svg';
import './App.css';
import {Switch,Route} from "react-router-dom";
import MainPage from "./main_page";
import ExercisePage from './exercise_page';
import EnglishPage from './english_page';
import ProgrammingPage from './programming_page';
import MyphotosPage from './myphotos_page';
function App() {
  return (
   <Switch>
    <Route path='/' exact component={MainPage} />
    <Route path='/exercise' component={ExercisePage} />
    <Route path='/english' component={EnglishPage}/>
    <Route path='/programming' component={ProgrammingPage}/>
    <Route path='/myphotos' component={MyphotosPage}/>
   </Switch>
  );
}

export default App;
