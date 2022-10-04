import useNickname from '../../hooks/useNickname';
import { Container } from '../../style/globalStyle';
import { HomeContainer } from './styled';

function Home() {
  const [nick, setNick] = useNickname();

  function handleInputChange(key, value) {
    setNick((prev) => ({ ...prev, [key]: value }));
  }

  return (
    <Container>
      <HomeContainer>
        <label htmlFor="nick">
          User
          <input
            id="nick"
            type="text"
            value={nick.value}
            onChange={(e) => handleInputChange('value', e.target.value)}
            maxLength={30}
          />
        </label>
        <label htmlFor="save">
          Save
          <input
            id="save"
            type="checkbox"
            checked={nick.save}
            onChange={(e) => handleInputChange('save', e.target.checked)}
          />
        </label>
      </HomeContainer>
    </Container>
  );
}

export default Home;
