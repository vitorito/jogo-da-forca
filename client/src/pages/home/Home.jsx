import useNickname from '../../hooks/useNickname';
import { Container } from '../../style/globalStyle';
import { HomeContainer } from './styled';

function Home() {
  const [nick, setNick] = useNickname();

  function handleInputChange({ target }) {
    setNick(target.value);
  }

  return (
    <Container>
      <HomeContainer>
        <label htmlFor="user">
          User
          <input
            type="text"
            value={nick}
            onChange={handleInputChange}
            maxLength={30}
          />
        </label>
      </HomeContainer>
    </Container>
  );
}

export default Home;
