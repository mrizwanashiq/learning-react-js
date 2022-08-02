import './App.css';
import axios from 'axios';
import React from 'react';

function App() {
  const onSubmit = async(e) => {
    e.preventDefault();
    console.log('submit');
    const book = {
      name: e.target[0].value,
      author: e.target[1].value,
      price: parseInt(e.target[2].value),
      stock: parseInt(e.target[3].value)
    }
    await axios.post('http://localhost:2022/book', book);

    const bookList = await axios.get('http://localhost:2022/book');
    setBooks(bookList.data);
  }

  // useState is a hook that allows us to create a state variable in our component and also update it when we want to. It takes a single argument, the initial value of the state variable. We can then use this state variable to update the component. We can also use this state variable to get the current value of the state variable. 
  const [books, setBooks] = React.useState([]);

  //  useEffect is a hook that runs after the component is rendered, but before the component is updated. 
  React.useEffect(() => {
    axios.get('http://localhost:2022/book')
      .then(response => {
        setBooks(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }
  , []);

  return (
    <div className="App">
      <h1>Book Store</h1>
      {/* This is a form, use are using <form> tag, onSubmit is a problem, that takes a function. 
      
      I created a function above, and assigned to it. 
      Up there I am getting data from form
      to Call APIs I am using axios.post, and putting the data in the body.
       */}
      <form onSubmit={onSubmit}>
        <label>Book Name:</label>
        <input type="text" name="bookName" />
        <label>Author Name:</label>
        <input type="text" name="authorName" />
        <label>Price:</label>
        <input type="text" name="price" />
        <label>Stock:</label>
        <input type="text" name="stock" />
        <button type="submit">Save</button>
      </form>
{/* This is table, simple as we create in HTML

Here I am using books.map. If you are familiar with Array.map function, you can understand this.
If you are not, try to google it.

Here I am using books.map to generate rows dynamically.

 */}
      <table>
        <thead>
          <tr>
            <th>Book Name</th>
            <th>Author Name</th>
            <th>Price</th>
            <th>Stock</th>
          </tr>
        </thead>
        <tbody>
          {books.map(book => (
            <tr>
              <td>{book.name}</td>
              <td>{book.author}</td>
              <td>{book.price}</td>
              <td>{book.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
