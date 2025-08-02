import './assets/fonts/stylesheet.css';
import AdvantageCard from './components/AdvantageCard/AdvantageCard';
import mockCards from './data/mockAdvantageCard';


function App() {

  return (
    <>
      <AdvantageCard title={mockCards[0].title} text={mockCards[0].text} icon={mockCards[0].icon} />
    </>
  )
}

export default App
