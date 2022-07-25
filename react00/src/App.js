// function App() {
//   return <h1>헤헷</h1>
// }

import Test from "./test";
import Nav from "./Nav";


const App = () => {
  //console.log('눈누난나') //console에 두번 나타남.
  return (
  <>
  <Test/>   {/* test.js를 만들어서 Test컴포넌트를 만들고 export와 import를 통해 App.js에 뿌려줄 수 있다. */}
  <h1>헤헷</h1>
  <Nav/>
  <Test/> 
  <Test/> 
  {/* <h2>ahahahah</h2>   jsx내에서의 주석은 /*을 사용한다.*/} 
  </>
  )
}
export default App;

// function App() {
//   return (
//     //'눈누난나' // 눈누난나만 치면 변수로 인식해서 undefined로 인식함
//     // <>
//     //   <h2>눈누난나</h2>
//     //   <h1>눈누난나</h1>
//     // </>
//     // 함수내에 써졌으므로 html이 아니라 jsx라고 한다. document.~~없이 태그를 쓸 수 있게 만든 것을 jsx라 한다.
//     // 항상 jsx는 하나의 부모태그 속에 싸여있어야한다. div로 싸기 귀찮으니까 <>으로 쌈
    
//   );
// }

// export default App;
