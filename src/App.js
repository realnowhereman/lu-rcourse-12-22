
import './App.css';
import Test from './Test';
import Header from './Header/Header';
import Goods from './Goods';

const headerData = {
  site_name : 'About React',
  site_slogan : 'Site slogan',
  nav : [
    {link : 'nav1', text : 'my first link'},
    {link : 'nav2', text : 'my second link'},
    {link : 'nav3', text : 'my third link'}
  ]
}

const goods = [
  {title : 'apple', price : 330, image : 'https://cdn0.iconfinder.com/data/icons/fruity-3/512/Apple-128.png'},
  {title : 'pear', price : 530, image : 'https://cdn0.iconfinder.com/data/icons/fruity-3/512/Pear-128.png'},
  {title : 'orange', price : 630, image : 'https://cdn0.iconfinder.com/data/icons/fruity-3/512/Orange-128.png'}

]

function App() {
  return (
    <>
      <Header data = {headerData} />
      <Test />
      {goods.map(item => <Goods key={item.title} title={item.title} price={item.price} image={item.image} />)}
      
    </>
  );
}

export default App;
