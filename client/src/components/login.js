import { useState } from 'react';
import axios from 'axios';

function Login({ handleLogin }) {
  // 상태
  const [userInfo, setUserInfo] = useState({
    userId: null,
    password: null,
  });

  const handleUserInfo = (e) => {
    // userId, password의 상태 변화 시켜주는 함수
    if (e.target.className === 'id') {
      setUserInfo({ ...userInfo, userId: e.target.value });
    }
    if (e.target.className === 'pw') {
      setUserInfo({ ...userInfo, password: e.target.value });
    }
  };

  // 함수 POST 요청
  const loginRequest = () => {
    axios
      .post('https://localhost:4000/users/login', userInfo)
      .then((data) => {
        // console.log(data);
        alert(`${data.data.userId}님 반갑습니다!`);
        handleLogin();
      })
      .catch((err) => {
        alert('아이디, 비밀번호를 다시 확인해주세요');
        console.log(err);
      });
  };
  return (
    <div>
      <h3>로그인이 필요한 서비스입니다.</h3>
      <label>
        아이디
        <input className="id" type="text" onChange={handleUserInfo} />
      </label>
      <label>
        비밀번호
        <input className="pw" type="password" onChange={handleUserInfo} />
      </label>
      <button onClick={loginRequest}>로그인</button>
    </div>
  );
}

export default Login;
