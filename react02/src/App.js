import Header from "./Header";

const App = () => {
  return(
    
    <header>
      <Header  style={{color:'red'}} name="배성아" age='10'/> 
      {/* 컴포넌트에는 직접 스타일을 넣어도 안먹힘 */}
      <nav>
        <ul>
          <li><a href=""  style={{color:'red', fontSize:'25px'}}>menu01</a></li>
          <li><a href="">menu02</a></li>
          <li><a href="">menu03</a></li>
          <li><a href="">menu04</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default App;
