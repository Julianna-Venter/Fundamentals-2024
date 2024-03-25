import './App.css';
import Orange from './Fruit';

function App(props: {name: string; surname: string}) {
  return (
    <>
      <div>
        <h1>Welcome,</h1> 
        <p>{ props.name } { props.surname }</p>
      </div>
      <div>This is a second div</div>
     <Fruit>
      
     </Fruit>
    </>
    
  );
}

export default App
