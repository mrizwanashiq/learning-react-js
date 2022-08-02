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
    const response = await axios.post('http://localhost:2022/book', book);

    const bookList = await axios.get('http://localhost:2022/book');
    setBooks(bookList.data);

    console.log(response);
  }

  const [books, setBooks] = React.useState([]);

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
          {/* <tr>
            <td>PF</td>
            <td>Unknown</td>
            <td>12</td>
            <td>12</td>
          </tr> */}
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
