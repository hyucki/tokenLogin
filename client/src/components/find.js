import { useState } from "react";
import axios from "axios";

function Find() {
  // 상태
  const [isFind, setIsFind] = useState("");
  let userList = [];
  // 전체 회원 정보
  const findUser = () => {
    if (!isFind) {
      axios.get("서버주소").then((data) => {
        userList = data;
      });
    } else {
      // 특정 회원 정보
      axios.get("서버주소", { params: isFind }).then((data) => {
        userList = data;
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
            <li>{el}</li>;
          })}
        </div>
      </div>
    </div>
  );
}

export default Find;
