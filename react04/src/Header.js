function Header(props) {
  return (
    <ul>
      {props.data}
      {/* <li>{props.member[0].name}</li> 
      <li>{props.member[1].name}</li> 
      <li>{props.member[2].name}</li> 
      <li>{props.member[3].name}</li>  */}
      {props.member.map(el => <li key={el.id}>{el.name}</li>)}
    </ul>
  )
}

export default Header