import CharacterCounter from "./Ejercicos_UseState/CharacterCounter";
import ColowSwitcher from "./Ejercicos_UseState/ColowSwitcher";
import Contador from "./Ejercicos_UseState/Contador";
import DragDropList from "./Ejercicos_UseState/DragDropList";
import InputField from "./Ejercicos_UseState/InputField";
import SearchFilter from "./Ejercicos_UseState/SearchFilter";
import TodoList from "./Ejercicos_UseState/TodoList";
import ToggleVisibility from "./Ejercicos_UseState/ToggleVisibility";

const App = () => {
  return (
    <div>
      {" "}
      <Contador />
      <hr />
      <InputField />
      <hr />
      <ToggleVisibility />
      <hr />
      <CharacterCounter />
      <hr />
      <TodoList />
      <hr />
      <ColowSwitcher />
      <hr />
      <SearchFilter />
      <hr />
      <DragDropList />
    </div>
  );
};

export default App;
