import { useState } from 'react';
import axios from 'axios';

function Find() {
  // 상태
  const [isFind, setIsFind] = useState('');
  const [userList, setUserList] = useState([]);
  // 전체 회원 정보
  const findUser = () => {
    // if (!isFind) {
    //   axios.get('https://localhost:4000/users/userinfo').then((data) => {
    //     console.log(data.data);
    //     setUserList(data.data.data);
    //   });
    // } else {
    // 특정 회원 정보
    axios.get('https://localhost:4000/users/userinfo', { headers: { data: isFind } }).then((data) => {
      // console.log(data.data.data);
      setUserList(data.data.data);
    });
    // }
  };
  //todo: 회원탈퇴 함수 작성

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
        <button>회원탈퇴</button>
      </div>
    </div>
  );
}

export default Find;
