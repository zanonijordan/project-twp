// import P from 'prop-types';
import * as Styled from './styles';
import React, { useState } from 'react';

export const LoginForm = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Handle form submission here
      console.log('Username:', username);
      console.log('Password:', password);
    }
    return (
        <Styled.Container>
           <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" name="username" value={username} 
                    onChange={(event) => setUsername(event.target.value)}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" name="password" value={password}
                    onChange={(event) => setPassword(event.target.value)}></input>
                </div>
                <button type="submit" className="btn btn-dark">Login</button>
            </form>
        </Styled.Container>
    );
};

// LoginForm.propTypes = {
//     children: P.node.isRequired,
// };
