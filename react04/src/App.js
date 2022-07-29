import Header from './Header'
import Footer from './Footer'
import Main from './Main'

function App() {

  const data = '눈누나나';
  const DATA = [
    {id:1, name:'배성아'},
    {id:2, name:'김성아'},
    {id:3, name:'최성아'},
    {id:4, name:'박성아'},
  ]
  return (
    <>
      <Header data={data} member={DATA}/>     
      <Main />
      <Footer/>
    </>
  );
}

export default App;
