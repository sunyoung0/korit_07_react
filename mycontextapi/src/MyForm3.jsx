import { useState } from "react";

function MyForm3() {

  // 6번줄의 firstName과 [event.target.name], 26번의 firstName이 같음
  const [ user, setUser ] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });

  // form에서 쓸거라 handleSubmit부터 작성
  const handleSubmit = (event) => {
    alert(`Hello, ${user.firstName} ${user.lastName}`);
    event.preventDefault();
  }

  // form 태그 썼고 내부에 input 창으로 입력 받을거니까 onChange를 작성하게 될것
  // 근데 여러개의 input 태그 내에 onChange={event => setText(event.target.value)}를 field 개수대로 쓸 필요는 없을 것 같으니까
  const handleChange = (event) => {
    setUser({...user, [event.target.name]:event.target.value}); // 스프레드 연산자, ...user는 객체가 아님. 내부 element의 자료형을 따라감(user 객체의 키)
  }

  return(
    <form onSubmit={handleSubmit}>
      <label>First Name : </label>
      <input type="text" name="firstName" onChange={handleChange} value={user.firstName} /><br /><br />

      <label>last Name : </label>
      <input type="text" name="lastName" onChange={handleChange} value={user.lastName} /><br /><br />

      <label>email : </label>
      <input type="text" name="email" onChange={handleChange} value={user.email} /><br /><br />

      <input type="submit" value='클릭' />
    </form>
  );
}

export default MyForm3;