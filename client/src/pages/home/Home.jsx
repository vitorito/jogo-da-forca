import { useState } from 'react';
import HomeButtons from './components/HomeButtons';
import HomeForm from './components/HomeForm';
import HomeLogo from './components/HomeLogo';

function Home() {
  const [isValidNick, setIsValidNick] = useState(true);
  return (
    <div className="flex flex-col justify-around gap-10 h-full font-poppins tracking-wide">
      <HomeLogo />
      <div className="sm-container gap-6">
        <HomeForm setIsValidNick={setIsValidNick} />
        <HomeButtons disabled={!isValidNick} />
      </div>
    </div>
  );
}

export default Home;
