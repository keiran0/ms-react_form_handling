import { useInput } from '../hooks/useInput';
import { hasMinLength, isEmail, isNotEmpty } from '../util/validation'

import Input from './Input';

export default function Login() {

  //One way of doing it, though it has been simplified with a single function (Lines 21-24) instead below.
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [enteredPassword, setEnteredPassword] = useState('');

  // function handleEmailChange(event){
  //   setEnteredEmail(event.target.value)
  // }

  // function handlePasswordChange(event){
  //   setEnteredPassword(event.target.value)
  // }

  // Previously the didEdit and enteredValues states were managed as an object. However, the commented blocks below have been outsourced to the useInput custom hook.
  // const [enteredValues, setEnteredValues] = useState({
  //   email: '',
  //   password: '',
  // })

  // const [didEdit, setDidEdit] = useState({
  //   email:false,
  //   password:false
  // })

  // function handleInputChange(identifier, value){
  //   setEnteredValues(prevState => ({
  //     ...prevState,
  //     [identifier]: value
  //   }))

  //   setDidEdit(prevEdit => ({
  //     ...prevEdit,
  //     [identifier]: false
  //   }))
  // }

  // function handleInputBlur(identifier){
  //   setDidEdit(prevEdit => ({
  //     ...prevEdit,
  //     [identifier]: true
  //   }))
  // }
  const {value: emailValue, handleInputBlur: handleEmailBlur, handleInputChange: handleEmailChange, hasError:emailHasError} = useInput('', ()=> isEmail(value) && isNotEmpty(value))

  const {value: passwordValue, handleInputBlur: handlePasswordBlur, handleInputChange: handlePasswordChange, hasError:passwordHasError}= useInput('', (value)=>hasMinLength(value,6))


  const emailIsInvalid = didEdit.email && !isEmail(enteredValues.email) && !isNotEmpty(enteredValues.email)
  const passwordIsInvalid = didEdit.password && !hasMinLength(enteredValues.password, 6);

  function handleSubmit(e){
    e.preventDefault()
    if (emailHasError || passwordHasError){
      return;
    }
    console.log(emailValue, passwordValue)
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input label="Email" id="email" type="email" name="email" onBlur={handleEmailBlur} onChange={handleEmailChange} required error={emailIsInvalid && 'Please enter a valid email'}/>
        <Input label="Password" id="password" type="password" name="password" onBlur={handlePasswordBlur} onChange={handlePasswordChange} value={enteredValues.password} required error={passwordIsInvalid && 'Please enter a valid password'}/>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
