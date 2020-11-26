import ComponentE from './ComponentE';

function ComponentC(props){
  return(
    <div>
      Component C :
      <ComponentE data = {props.data}/>
    </div>
  )
}
export default ComponentC;