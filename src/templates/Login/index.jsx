import P from 'prop-types';
import { Menu } from '../../components/Menu';
import * as Styled from './styles';

export const Login = ({ children }) => {
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
                                        <label for="email">Email</label>
                                        <input type="email" className="form-control" name="username"></input>
                                    </div>
                                    <div className="form-group">
                                        <label for="password">Password</label>
                                        <input type="password" className="form-control" name="password"></input>
                                    </div>
                                    <button type="submit" className="btn btn-dark">Login</button>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-4">
                        <div class="card">
                            <div class="card-body">
                            <a class="btn btn-block btn-social btn-google" href="/auth/google" role="button">
                                <i class="fab fa-google"></i>
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
    children: P.node.isRequired,
};
