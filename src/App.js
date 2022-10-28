import { useSelector } from 'react-redux';
import Splash from './Views/Splash';
import Routes from './Routes';



function App(){
  const { appLoaded } = useSelector(state => state.app);
  return (
    <>
      {!appLoaded && <Splash/>}
      {appLoaded && <Routes/>}
    </>
  );
}

export default App;
