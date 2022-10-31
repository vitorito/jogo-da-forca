import HomeButtons from './components/HomeButtons';
import HomeForm from './components/HomeForm';
import HomeLogo from './components/HomeLogo';

function Home() {
  return (
    <div className="flex flex-col justify-around gap-10 h-full font-poppins tracking-wide">
      <HomeLogo />
      <div className="sm-container gap-6">
        <HomeForm />
        <HomeButtons />
      </div>
    </div>
  );
}

export default Home;
