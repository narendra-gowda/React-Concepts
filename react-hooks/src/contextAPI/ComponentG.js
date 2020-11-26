import React, {useContext} from 'react';
import {NameContext, SkillContext, FavContext} from '../App';

function ComponentG() {
const name = useContext(NameContext);
const skill = useContext(SkillContext);
const move = useContext(FavContext);
  return(
    <div>
      Displaying same info from 'G' using useContext: <br/>
      Name : {name}, Skill : {skill}, Move : {move}
    </div>
  )
}
export default ComponentG;