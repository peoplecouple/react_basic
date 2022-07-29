
import { useState } from 'react';
import './App.css';



// function App() {
//   const [num, setNum] = useState(0);

//   const changeNum = () => {
//     setNum(num + 1)
//   } 
//   return (
//     <div>
//       <i className='xi-heart' onClick={changeNum}></i> {num}
//     </div>
//   );
// }


function App() {
  const [num, setNum] = useState(0);
  const [color, setColor] = useState(false);
  return (
    <div>
      <i className='xi-heart' onClick={() => (setNum(num + 1), setColor(true))} style={{ color: color && 'red' }}></i>

      {num}
      {/* javascript에서는 click 소문자 */}
    </div>
  );
}

// function App() {
//   const [num, setNum] = useState(0);

//   const onIncrease = () => {
//     setNum(++num)
//   }

//   return (
//     <div>
//       <i className='xi-heart' onClick={onIncrease}></i> {num}
//       {/* javascript에서는 click 소문자 */}
//     </div>
//   );
// }

export default App;
