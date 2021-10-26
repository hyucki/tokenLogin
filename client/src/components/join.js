import { useState } from "react";
import axios from "axios";

function Join() {
  /* 필요한 state : 아이디 input, 비밀번호 input */
  const [userInfo, setUserInfo] = useState({ userId: null, password: null });
  /*
    (서버 POST 요청) 함수 -> 실행 조건 아이디, 비밀번호 둘 다 입력 되어있어야 함
    데이터에 {아이디 input, 비밀번호 input} 담아서 요청
    제대로 응답이 오면 alert("회원가입 성공")
    응답이 제대로 오지 않았으면 alert("회원가입 실패")
    */
  const handleJoin = () => {
    if (userInfo.userId && userInfo.password) {
      // userInfo의 userId와 password 둘 다 null이 아니라면 POST 요청 보내기!
      axios
        .post("서버주소", userInfo)
        .then(() => {
          alert("회원가입 성공!!");
        })
        .catch((err) => {
          alert("회원가입 실패!!");
          console.log(err);
        });
    } else {
      // userInfo의 userId와 password 둘 중에 하나라도 null이면 "제대로 입력하세요ㅎㅎ" 보여주기
      alert("제대로 입력하세요 ㅎㅎ");
    }
  };

  const handleUserInfo = (e) => {
    // userId, password의 상태 변화 시켜주는 함수
    // console.log(e.target.value);
    // console.log(userInfo);
    if (e.target.className === "id") {
      setUserInfo({ ...userInfo, userId: e.target.value });
    }
    if (e.target.className === "pw") {
      setUserInfo({ ...userInfo, password: e.target.value });
    }
    // console.log(userInfo);
  };

  return (
    <div>
      <h1>회원가입</h1>
      <label>
        아이디
        <input className="id" type="text" onChange={handleUserInfo} />
      </label>
      <label>
        비밀번호
        <input className="pw" type="text" onChange={handleUserInfo} />
      </label>
      <button onClick={handleJoin}>회원 가입</button>
    </div>
  );
}

export default Join;
