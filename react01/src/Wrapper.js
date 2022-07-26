const Wrapper = (props) => {
  return <div className="Wrapper" style={{color:'red'}}>
    {console.log(props.children)}
    {props.children}
  </div>
}

export default Wrapper;