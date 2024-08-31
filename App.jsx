import './App.css'
import Header from './assets/components/header'
import SearchBar from './assets/components/searchbar'
import Btn from './assets/components/btn'
import Text from './assets/components/text'
import List from './assets/components/list'
const App = () => {
  return (
    <div>

      <section className="container">
        <section className="wrapper">
          <section className="Top-wrapper">
            <Header />            
          </section>
          
         <SearchBar />
        </section>
        <Text/>
        <List />
        <Btn />
      </section>
      
    </div>
  )
}

export default App
