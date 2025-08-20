import RUS from '../assets/garantees/RUS.png';
import US from '../assets/garantees/US.png';
import GB from '../assets/garantees/GB.png';
import CHINA from '../assets/garantees/China.png';

type TMockCards = {
  id: number;
  src: string;
  caption: string;
}

const mockGarateeCards: TMockCards[] = [
  {
    id: 1,
    src: RUS,
    caption: 'Свидетельство о регистрации в РФ'
  },
  {
    id: 2,
    src: US,
    caption: 'Свидетельство о регистрации в США'
  },
  {
    id: 3,
    src: CHINA,
    caption: 'Свидетельство о регистрации в Китае'
  },
  {
    id: 4,
    src: GB,
    caption: 'Свидетельство о регистрации в Великобритнии'
  }
];

export default mockGarateeCards;