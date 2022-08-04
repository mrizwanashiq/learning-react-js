import './App.css';
import axios from 'axios';
import React from 'react';
import {
  Typography,
  AppBar,
  Toolbar,
  TextField,
  Button as MuiButton,
} from "@material-ui/core";
import 'antd/dist/antd.css';
import { Table, Button as AntDButton } from 'antd';

function App() {

  /*
  useState is a hook that allows us to create a state variable in our component and also update it when we want to. 
  It takes a single argument, the initial value of the state variable. We can then use this state variable to update the component. 
  We can also use this state variable to get the current value of the state variable. 
  */
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
          _id: (books.length + 1).toString(),
          name: 'Default Book',
          author: 'Default Author',
          price: 0,
          stock: 0
        }
        // I am adding book to the list, and it will be displayed in the UI.
        setBooks([book]);
      });
  });

  const onSubmit = async (e) => {
    // e.preventDefault prevents page from refreshing when form is submitted (default behavior)
    e.preventDefault();
    // This is body of the request, we can send it as a json object
    const book = {
      name: e.target.name.value,
      author: e.target.author.value,
      price: parseInt(e.target.price.value),
      stock: parseInt(e.target.stock.value)
    }
    axios.post('http://localhost:2022/book', book).then(async res => {
      // Once the book is added, we need to get the list of books
      const bookList = await axios.get('http://localhost:2022/book');
      // And render the list of books in the UI. I am reassigning the state with the new list of books
      setBooks(bookList.data);
    }).catch(err => {
      // If backend is not running, this will throw an error. So we need to handle it. 
      // I am adding book to the list, and it will be displayed in the UI.
      book._id = (books.length + 1).toString();
      const tempBooks = [...books, book];
      setBooks(tempBooks);
    }).finally(() => {
      // This is to clear the form after submitting.
      e.target.name.value = '';
      e.target.author.value = '';
      e.target.price.value = '';
      e.target.stock.value = '';
    });
  }

  const deleteBook = async (id) => {
    // This is to delete the book from the list.
    axios.delete(`http://localhost:2022/book/${id}`).then(async res => {
      // Once the book is deleted, we need to get the list of books
      const bookList = await axios.get('http://localhost:2022/book');
      // And render the list of books in the UI. I am reassigning the state with the new list of books
      setBooks(bookList.data);
    }).catch(err => {
      // If backend is not running, this will throw an error. So we need to handle it.
      // I am deleting the book from the list, and it will be removed from the UI.
      const tempBooks = books.filter(book => book._id !== id);
      setBooks(tempBooks);
    });
  }

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Author',
      dataIndex: 'author',
      key: 'author',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Stock',
      dataIndex: 'stock',
      key: 'stock',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <AntDButton color='primary' onClick={() => deleteBook(record._id)}>Delete</AntDButton>
      ),
    }];

  const customStyle = { margin: "5px", marginTop: "10px", marginBottom: "10px", width: "100%", height: "50px", borderRadius: "5px", fontSize: "16px" }

  return (
    <div className="App">
      <AppBar>
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Book Store
          </Typography>
        </Toolbar>
      </AppBar>
      <div style={{ marginTop: '90px' }} />

      <Typography variant="h5" color="primary">Add Book</Typography>
      <form onSubmit={onSubmit}>
        <TextField
          style={customStyle}
          type="text"
          label="Name"
          variant="outlined"
          name="name"
          required
        />
        <TextField
          style={customStyle}
          type="text"
          label="Author"
          variant="outlined"
          name="author"
          required
        />
        <TextField
          style={customStyle}
          type="number"
          inputProps={{ min: 0 }}
          label="Price"
          variant="outlined"
          name="price"
          required
        />
        <TextField
          style={customStyle}
          type="number"
          inputProps={{ min: 0 }}
          label="Stock"
          variant="outlined"
          name="stock"
          required
        />
        <MuiButton style={customStyle} variant="contained" color="primary" type='submit'>
          save
        </MuiButton>
      </form>

      <Typography variant="h5" color="primary">Books</Typography>
      <Table columns={columns} dataSource={books} />
    </div>
  );
}

export default App;
