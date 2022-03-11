import React,{useState} from 'react';

function Login() {
    
        const [user, setUser] = useState({
            username: '',
            email: '',
            password: ''
        });
        // this.state = {username: '', password:''}
        return (
            <>
                <div className='container mt-5 pt-5'>
                    <div className='row'>
                        <div className='col-12 col-sm-8 col-md-6 m-auto'>
                            <div>
                                <div className='card style=width: 18rem;'>
                                    <div className='card-body px-5'>
                                        {/* <h4 className='text-center'>Log in</h4> */}
                                        <svg className='text-center' xmlns="http://www.w3.org/2000/svg" width="" height="50" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                                        </svg>
                                        <form action='' className='form-group'  >
                                            <div className='form-group'>
                                                <input type='text' value='' name='username' id='username' placeholder='Username' className='form-control my-3' />
                                            </div>
                                            {/* <div className='form-group'>
                                            <label>Email</label>
                                            <input type='email' value={user.email} name='email' id='email' placeholder='Email Id' className='form-control my-3' />
                                        </div> */}
                                            <div className='form-group'>
                                                <input type='password' value='' name='password' id='password' placeholder='Password' className='form-control my-3' />
                                            </div>
                                            <div className='form-group text-center'>
                                                <button type='button' className='btn btn-success'>Submit</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>

        )
    
}
export default Login