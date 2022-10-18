import HomeButtons from './components/HomeButtons';
import HomeForm from './components/HomeForm';
import HomeLogo from './components/HomeLogo';

function Home() {
  return (
    <div className="main-container justify-around font-poppins tracking-wide gap-10">
      <HomeLogo />
      <div className="sm-container gap-6">
        <HomeForm />
        <HomeButtons />
      </div>
    </div>
  );
}

export default Home;
