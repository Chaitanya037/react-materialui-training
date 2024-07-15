import "./App.css";
import ButtonContainer from "./components/ButtonContainer";
import Cards from "./components/Cards";

function App() {
  const cardData1 = {
    heading: 'Chaitanya',
    body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    buttonText: 'Default'
  }
  const cardData2 = {
    heading: 'Card 2',
    body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    buttonText: 'Default',
    size: 'medium'
  }
  const cardData3 = {
    heading: 'Card 3',
    body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    buttonText: 'Default',
    size: 'small'
  }
  return (
    <>
      <Cards {...cardData1} />
      <Cards {...cardData2} />
      <Cards {...cardData3} />

      <ButtonContainer />
    </>
  );
}

export default App;
