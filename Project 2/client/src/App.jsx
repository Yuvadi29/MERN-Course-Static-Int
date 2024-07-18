import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [list, setList] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get("http://localhost:5000/get");
      console.log(res.data);
      setList(res.data);
    }
    getData();
  }, []);

  const AddTodo = async () => {
    try {
      await axios.post('http://localhost:5000/create', {
        title: title,
        description: description,
      });
      alert('Todo Created Successfully');
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const DeleteTodo = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/delete/${id}`);
      alert("Todo Deleted Successfully");
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const UpdateTodo = async (id) => {
    try {
      await axios.put(`http://localhost:5000/update/${id}`, {
        newTitle: newTitle,
        newDescription: newDescription
      });
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-100 p-5">
      <h1 className='font-bold text-3xl text-gray-800 mb-8'>Todo List using MERN</h1>

      {/* Container for Inputs */}
      <div className='bg-white shadow-md rounded-lg p-6 mb-8'>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="title-input">Enter Title</label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter Title"
            type="text"
            id="title-input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="description-input">Enter Description</label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter Description"
            type="text"
            id="description-input"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <button className='w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700' onClick={AddTodo}>Add</button>
      </div>

      {/* Todo Container */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {list.map((value) => (
          <div className="bg-white shadow-md rounded-lg p-6" key={value._id}>
            <div className="text-xl font-bold text-gray-800 mb-2">{value.title}</div>
            <div className="text-gray-600 mb-4">{value.description}</div>
            <div className='flex flex-col gap-2'>
              <input
                type='text'
                placeholder='Replace Title'
                className='px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
                onChange={(e) => setNewTitle(e.target.value)}
              />
              <input
                type='text'
                placeholder='Replace Description'
                className='px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
                onChange={(e) => setNewDescription(e.target.value)}
              />
              <button className="py-2 bg-red-500 text-white rounded-md hover:bg-red-600" onClick={() => DeleteTodo(value._id)}>
                Delete
              </button>
              <button className="py-2 bg-green-500 text-white rounded-md hover:bg-green-600" onClick={() => UpdateTodo(value._id)}>
                Update
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default App;
