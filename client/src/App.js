import Join from './components/join';
import Find from './components/find';
import Login from './components/login';
import { useState } from 'react';

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [accessToken, setAccessToken] = useState(null);
  // 로그인 관련 함수
  const handleLogin = () => {
    setIsLogin(!isLogin);
  };
  const handleAccessToken = (accessToken) => {
    setAccessToken(accessToken);
    // console.log(accessToken);
  };
  return (
    <div className="App">
      {!isLogin && <Join />}
      <h1>회원 목록</h1>
      {isLogin ? <Find handleLogin={handleLogin} accessToken={accessToken} handleAccessToken={handleAccessToken} /> : <Login handleAccessToken={handleAccessToken} handleLogin={handleLogin} />}
    </div>
  );
}

export default App;
