
import { Menu } from '../../components/Menu';
import * as Styled from './styles';
import { LoginForm } from '../../components/LoginForm';

export const Login = () => {


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
                                <LoginForm />
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
