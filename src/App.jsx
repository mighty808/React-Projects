import Students from './Workers.jsx';

function App() {
 
  return(
    <>
    <Students name= "KK" age = {20} isWorker = {true}/>
    <Students name= "yaya" age = {30} isWorker = {false}/>
    <Students name = "Pk" age = {19} isWorker = {true}/>
    <Students />
    </>
  );
} 

export default App
