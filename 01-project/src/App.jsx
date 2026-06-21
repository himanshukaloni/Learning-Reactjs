// import { Card } from './components/card';
import './App.css';
import Section1 from "./components/section1/section1"




function App() {

  const users = [
    {
      img: 'https://imgs.search.brave.com/PU7YbTyHN7cGkkSKHmWVJTqRPG_Oj_2cBhF4DjFKL4A/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDc3MDY3/MTAuanBn',
      sno: 1,
      tag: 'Satisfied'
    }, {
      img: 'https://imgs.search.brave.com/csyedDCbaz6UemfZgWbwsWcsH88DqxxrLMPsbA1cQ7g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJhY2Nlc3Mu/Y29tL2Z1bGwvMjcy/NTcyMS5qcGc',
      sno: 2,
      tag: 'Unsatisfied'
    }, {
      img: 'https://imgs.search.brave.com/CetBThM1w3WD_X3DAGGP2AYb4UEwHzgK5AoeNfMWKeQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/bWFnbmlmaWMuY29t/L2ZyZWUtcGhvdG8v/YnJ1bmV0dGUtYnVz/aW5lc3Mtd29tYW4t/d2l0aC13YXZ5LWxv/bmctaGFpci1ibHVl/LWV5ZXMtc3RhbmRz/LWhvbGRpbmctbm90/ZWJvb2staGFuZHNf/MTk3NTMxLTM0My5q/cGc_Z2E9R0ExLjEu/NDMyMTQ4NzIuMTc4/MDk3Nzc5MiZzZW10/PWFpc19oeWJyaWQm/dz03NDAmcT04MA',
      sno: 3,
      tag: 'Underbanked'
    }
  ]

  return (
    <div className="page">
      <Section1 users={users} />
    </div>
  );
}

export default App;

