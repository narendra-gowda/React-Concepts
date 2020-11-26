import ComponentF from './ComponentF';

function ComponentE(props){
  return(
    <div>
      Component E : 
      <ComponentF data = {props.data}/>
    </div>
  )
}
export default ComponentE;