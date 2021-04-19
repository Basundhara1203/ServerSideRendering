import React, { useReducer }  from 'react';
import {formReducer,initialState} from './reducer';


const Home=()=>{

    const [state, dispatch] = useReducer(formReducer, initialState)

    return( <div>
        <h1>Welcome Home1</h1>
        <button onClick={()=>console.log("Hiy")}>Click</button>
        <form>
			<label>
				First Name:
                <input
                    type='text'
                    value={state.firstName}
                    onChange={(e) => dispatch({type: 'firstName', payload: e.target.value})}
                />
			</label>
            <label>
				Last Name:
                <input
                    type='text'
                    value={state.lastName}
                    onChange={(event) => dispatch({type: 'lastName', payload: event.target.value})}
                />
			</label>
            <label>
				Address:
                <textarea
                    value={state.Address}
                    onChange={(event) => dispatch({type: 'Address', payload: event.target.value})}
                />
			</label>
            <label>
                Qualification:
                <select
                    value={state.Qualification}
                    onChange={(event) => dispatch({type: 'faveFruit', payload: event.target.value})}
                >
                    <option value="B.Tech">B.tech</option>
                    <option value="M.Tech">M.Tech</option>
                   
                </select>
            </label>
			<input type='submit' value='Submit' />
		</form>
	

    </div>
    )
}
export default Home;