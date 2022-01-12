import BodyContent from "./components/body/BodyContent";
import LanguageSelect from "./components/selector/languageSelector";

function App() {
  return (
    <div>
      <div className="language-select">
        <LanguageSelect />
      </div>
      <div className="App">
        <BodyContent />
      </div>
    </div>
  );
}

export default App;
