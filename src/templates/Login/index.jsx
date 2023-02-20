
import { useState } from 'react';
import { Menu } from '../../components/Menu';
import * as Styled from './styles';

export const Login = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    
    const handleChange = (event) =>{
        const {name} = event.target
        const {value} = event.target

        if(name === 'username'){
            setUsername(value);
        } else if(name === 'password'){
            setPassword(value);
        }
    }

    return (
        <Styled.Container>
            <Menu />
            <div className='container mt-5'>
                <h1>Login</h1>
                <div className="row">
                    <div className="col-sm-8">
                        <div className="card">
                            <div className="card-body">
                            {/* <!-- Makes POST request to /login route --> */}
                                <form action="/login" method="POST">
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input type="email" className="form-control" name="username" value={username} 
                                        onChange={handleChange}></input>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <input type="password" className="form-control" name="password" value={password}
                                        onChange={handleChange}></input>
                                    </div>
                                    <button type="submit" className="btn btn-dark">Login</button>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-4">
                        <div className="card">
                            <div className="card-body">
                            <a className="btn btn-block btn-social btn-google" href="/auth/google" role="button">
                                <i className="fab fa-google"></i>
                                Sign In with Google
                            </a>
                            </div>
                        </div>
                     </div>
                </div>
            </div>
        </Styled.Container>
    );
};

Login.propTypes = {

};
