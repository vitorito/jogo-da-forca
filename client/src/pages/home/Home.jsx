import HomeButtons from './components/HomeButtons';
import HomeForm from './components/HomeForm';
import HomeLogo from './components/HomeLogo';

function Home() {
  return (
    <div className="bg-blue-500 text-gray-900  flex flex-col items-center justify-around py-[10vh] px-10 w-screen h-screen tracking-wider font-bangers gap-10">
      <HomeLogo />
      <div className="flex flex-col gap-4 max-w-md w-full">
        <HomeForm />
        <HomeButtons />
      </div>
    </div>
  );
}

export default Home;
