import React from 'react';
import {NameContext, SkillContext, FavContext} from '../App';
import ComponentG from './ComponentG';

function ComponentF(props){
  return(
    <div>
      {/* Component F : {props.data}  -- Without Context API --*/}
      <NameContext.Consumer>
        {
          name => {
          return(
            <SkillContext.Consumer>
              {
                skill => {
                  return(
                    <FavContext.Consumer>
                      {
                        move => {
                          return (
                          <div>
                            Component F via Context API: {name}, Skill : {skill}, Move : {move} 
                            <ComponentG />
                          </div>)
                        }
                      }
                    </FavContext.Consumer>
                  )
                }
              }
            </SkillContext.Consumer>
          )
          }
        }
      </NameContext.Consumer>
    </div>
  )
}
export default ComponentF;

