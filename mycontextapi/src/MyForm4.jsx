import { useState } from "react";

function MyForm4() {

  const [ firstName, setFirstName ] = useState('');
  const [ lastName, setLastName ] = useState('');
  const [ email, setEmail ] = useState('');

  // 근데 잘 생각해보면 alert를 띄우는건 학습 상황이라서 그렇지 실제 얘가 하는 역할은 form 태그의 preventDefault()를 쓰기 위함에 가까움.
  const handleSubmit = (event) => {
  alert(`Hello, ${firstName} ${lastName}`);
  event.preventDefault();
  }

  return(
    <form onSubmit={handleSubmit}>
      <label>First Name : </label>
      <input type="text" name="firstName" onChange={event => setFirstName(event.target.value)} value={firstName} /><br /><br />

      <label>last Name : </label>
      <input type="text" name="lastName" onChange={event => setLastName(event.target.value)} value={lastName} /><br /><br />

      <label>email : </label>
      <input type="text" name="email" onChange={event => setEmail(event.target.value)} value={email} /><br /><br />

      <input type="submit" value='클릭' />
    </form>
  );
}

export default MyForm4;