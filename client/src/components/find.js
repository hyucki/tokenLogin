import { useState } from 'react';
import axios from 'axios';

function Find({ accessToken, handleAccessToken, handleLogin }) {
  // 상태
  const [isFind, setIsFind] = useState('');
  const [userList, setUserList] = useState([]);
  // 전체 회원 정보
  const findUser = () => {
    axios.get('https://localhost:4000/users/userinfo', { headers: { data: isFind, authorization: `Bearer ${accessToken}` } }).then((data) => {
      // console.log(data.data);
      if (!data.data.token) return alert('유효하지 않는 토큰입니다! 토큰을 갱신하세요!');
      if (data.data.data.length === 0) alert('일치하는 회원이 존재하지 않습니다!');
      else {
        setUserList(data.data.data);
      }
    });
  };
  //todo: 회원탈퇴 함수 작성
  const removeUser = () => {
    axios.post('https://localhost:4000/users/userinfo', {}, { withCredentials: true }).then(() => {
      handleLogin();
      alert('회원탈퇴 성공!');
    });
  };
  //todo: 토큰갱신 함수 불러오기
  const renewalToken = () => {
    axios
      .get('https://localhost:4000/users/renewalToken', { withCredentials: true })
      .then((renewalToken) => {
        // console.log(renewalToken.data);
        handleAccessToken(renewalToken.data);
      })
      .catch(() => alert('다시 로그인하세요!'));
  };
  const logout = () => {
    axios.get('https://localhost:4000/users/logout', { withCredentials: true }).then(() => {
      handleLogin();
    });
  };

  return (
    <div>
      <div>
        <input
          type="text"
          onChange={(e) => {
            setIsFind(e.target.value);
            // findUser();
          }}
        />
        <button onClick={findUser}>회원 조회</button>
        <div>
          {userList.map((el, idx) => (
            <li key={idx}>{el}</li>
          ))}
        </div>
        <button onClick={logout}>나가기</button>
        <button onClick={removeUser}>회원탈퇴</button>
        <button onClick={renewalToken}>토큰갱신</button>
      </div>
    </div>
  );
}

export default Find;
