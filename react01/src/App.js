import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Wrapper from "./Wrapper";

const App = () => {
  return (
    <Wrapper>
      <Header />
      <Main bae="배성아" work="코딩" />   {/* <Main bae="배성아"/> bae="배성아" 이것을 props라 한다.  주석도 Wrapper의 자식props로 데리고온다. 유의하자!*/}
      <Main bae="최성아" work="먹기" />
      <Main bae="김성아" work="놀기" />
      <Main bae="이성아" />
      <Footer />
    </Wrapper>

  )
}

export default App; //하나를 내보낼때 default를 씀