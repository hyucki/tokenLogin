import Join from "./components/join";
import Find from "./components/find";
import Login from "./components/login";
import { useState } from "react";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  // 로그인 관련 함수
  const handleLogin = () => {
    setIsLogin(true);
  };
  return (
    <div className="App">
      <Join />
      <h1>회원 목록</h1>
      {isLogin ? <Find /> : <Login handleLogin={handleLogin} />}
    </div>
  );
}

export default App;
