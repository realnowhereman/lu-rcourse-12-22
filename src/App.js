import Header from './Header/Header';
import Main from './Main/Main';
import Sidebar from './Main/Sidebar';
import Footer from './Footer/Footer';
import './App.css';

const site = {
  site_name: 'react test',
  site_title: 'site with react',
  nav: [
    {link: 'nav1', text: 'link 1'},
    {link: 'nav2', text: 'link 2'},
    {link: 'nav3', text: 'link 3'}
  ]
}


function App() {
  return (
    <div className="App">
      <Header siteData={site} />
      <Main />
      <Footer siteData={site} />
    </div>
  );
}

export default App;
