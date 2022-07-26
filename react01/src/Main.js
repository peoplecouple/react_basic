const Main = (props) => {

  return (
    <main>
      {props.bae}의 특기는 {props.work}입니다.
      {/* 객체의 키값을 받아올때 . 찍었음 */}
    </main>
  )

  // 또는 비구조 할당 
  // const {bae, work} = props;
  // return(
  //   <main>
  //     {bae} {work}
  //   </main>
  // )


  // 또는 이렇게 props자리에 바로 받아오기
  // const Main = ({bae , work}) => {
  //   return (
  //     <main>
  //       {bae} {work}
  //     </main>
  //   )
  // }
}


//넘어온 props값이 없을때는 default값을 줄 수 있다.
Main.defaultProps = {
  work: "자기"
}


export default Main;

//jsx안(return 내)에서는 if, for문 쓰지 않는다.
//jsx안은 문자로 받아드린다.
//자바스크립트로 받아드리기 위해서는(변수나 함수를 위해) {} 를 써준다
//props는 객체
