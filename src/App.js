import './App.css';
import axios from 'axios';
import React from 'react';

function App() {
  const onSubmit = async(e) => {
    // e.preventDefault prevents page from refreshing when form is submitted (default behavior)
    e.preventDefault();
    // This is body of the request, we can send it as a json object
    const book = {
      name: e.target[0].value,
      author: e.target[1].value,
      price: parseInt(e.target[2].value),
      stock: parseInt(e.target[3].value)
    }
    axios.post('http://localhost:2022/book', book).then(async res => {
      // Once the book is added, we need to get the list of books
      const bookList = await axios.get('http://localhost:2022/book');
      // And render the list of books in the UI. I am reassigning the state with the new list of books
      setBooks(bookList.data);
    }).catch(err => {
      // If backend is not running, this will throw an error. So we need to handle it. 
      // I am adding book to the list, and it will be displayed in the UI.
      const tempBooks = [...books, book];
      setBooks(tempBooks);
    }).finally(() => {
      // This is to clear the form after submitting.
      e.target[0].value = '';
      e.target[1].value = '';
      e.target[2].value = '';
      e.target[3].value = '';
    });
  }

  // useState is a hook that allows us to create a state variable in our component and also update it when we want to. It takes a single argument, the initial value of the state variable. We can then use this state variable to update the component. We can also use this state variable to get the current value of the state variable. 
  const [books, setBooks] = React.useState([]);

  //  useEffect is a hook that runs after the component is rendered, but before the component is updated. 
  React.useEffect(() => {
    // This is to get the list of books from the backend.
    axios.get('http://localhost:2022/book')
      .then(response => {
        // Once we get the list of books, we need to set the state of the component with the list of books.
        setBooks(response.data);
      })
      .catch(error => {
        // If backend is not running, this will throw an error. So we need to handle it.
        // I am adding book to the list, and it will be displayed in the UI.
        const book = {
          name: 'Default Book',
          author: 'Default Author',
          price: 0,
          stock: 0
        }
        // I am adding book to the list, and it will be displayed in the UI.
        setBooks([book]);
      });
  }
  , []);

  return (
    <div className="App">
      <h1>Book Store</h1>

      <h2>Add Book</h2>
      <form onSubmit={onSubmit}>
        <input type="text" name="bookName" placeholder='Name' />
        <input type="text" name="authorName" placeholder='Author' />
        <input type="text" name="price" placeholder='Price'/>
        <input type="text" name="stock" placeholder='Stock'/>
        <button type="submit">Save</button>
      </form>

      <h2>Books</h2>
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
