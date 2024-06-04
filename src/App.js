import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from './Component/head';
import Foot from './Component/foot';
import Home from './Component/Home';
import Blogs from './Component/Blog/Blog';
import Aboutus from './Component/AboutUs/Aboutus';
import { Route, Routes } from 'react-router-dom';

let mega = [
  {
    type: 'DEVELOPMENT',
    course: ['Master in Flutter Development', 'Master in Android Development', 'Master in Game Development', 'Master in Full Stack Development', 'Master in Web Development', 'Master in React Native', 'Master in Data Science', 'Master in Data Analystic']
  },

  {
    type: 'DESIGN',
    course: ['Master in Flutter Development', 'Master in Android Development', 'Master in Game Development', 'Master in Full Stack Development', 'Master in Web Development', 'Master in React Native', 'Master in Data Science', 'Master in Data Analystic']
  },
    
  {
    type: 'PROGRAMMING',
    course: ['Master in Flutter Development', 'Master in Android Development', 'Master in Game Development', 'Master in Full Stack Development', 'Master in Web Development', 'Master in React Native', 'Master in Data Science', 'Master in Data Analystic']
  },
    
  {
    type: 'TRENDY',
    course: ['Master in Flutter Development', 'Master in Android Development', 'Master in Game Development', 'Master in Full Stack Development', 'Master in Web Development', 'Master in React Native', 'Master in Data Science', 'Master in Data Analystic']
  }
  
]

function App() {
  return (
    <>
      <Head data={mega}></Head>
      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='/blog' element={<Blogs></Blogs>} />
        <Route path='/about' element={<Aboutus></Aboutus>} />
      </Routes>
      <Foot></Foot>
    </>
  );
}

export default App;
