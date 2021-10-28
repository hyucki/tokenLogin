import { useState } from 'react';
import axios from 'axios';

function Find() {
  // 상태
  const [isFind, setIsFind] = useState('');
  let userList = [];
  // 전체 회원 정보
  const findUser = () => {
    if (!isFind) {
      axios.get('https://localhost:4000/users/userinfo').then((data) => {
        userList = data.data;
        console.log(userList);
      });
    } else {
      // 특정 회원 정보
      axios.get('https://localhost:4000/users/userinfo', { params: isFind }).then((data) => {
        console.log(data);
        userList = data.data;
      });
    }
  };

  const findText = (e) => {
    setIsFind(e.target.value);
  };

  return (
    <div>
      <div>
        <input type="text" onChange={findText} />
        <button onClick={findUser}>회원 조회</button>
        <div>
          {userList.map((el) => {
            return <li>{el.userId}</li>;
          })}
        </div>
      </div>
    </div>
  );
}

export default Find;
