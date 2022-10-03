import SignupForm from '../../components/sign-up/sign-up-form.component';
import SignInForm from '../../components/sign-in/sign-in-form.component';
import './authentication.styles.scss';
const Authentication=()=>{
return(
    <div className='authentication-container'>
        <SignInForm/>
        <SignupForm/>
  </div>
);
};
export default Authentication;