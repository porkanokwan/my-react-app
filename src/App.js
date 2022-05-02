import './App.css';


function App() {
  const Post = [{
    id: 1,
    message: 'from post array',
    date: '02-05-2020',
    name: 'kanokwan'
  }];

  return (
    <div className="App">
      {Post.map(el => <li key={el.id}>{el.message}</li>)}
      {Post.map(el => <li key={el.id}>{el.date}</li>)}
      {Post.map(el => <li key={el.id}>{el.name}</li>)}
    </div>
  );
}

export default App;
