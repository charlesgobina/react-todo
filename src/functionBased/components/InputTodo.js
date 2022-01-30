import React, { useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import PropTypes from 'prop-types';

const InputTodo = (props) => {
  const { addTodoProps } = props;
  const [inputText, setInputTitle] = useState({
    title: '',
  });
  const [emptyField, setEmptyField] = useState(false);

  const onChange = (e) => {
    setInputTitle({
      ...inputText,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText.title.trim()) {
      setEmptyField(false);
      addTodoProps(inputText.title);
      setInputTitle({
        title: '',
      });
    } else {
      setEmptyField(true);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="form-container">
        <input
          type="text"
          className="input-text"
          placeholder="Add todo..."
          value={inputText.title}
          name="title"
          onChange={onChange}
        />
        <button type="submit" onClick={(e) => handleSubmit(e)} className="input-submit">
          <FaPlusCircle
            style={{ color: 'darkcyan', fontSize: '20px', marginTop: '2px' }}
          />
        </button>
      </form>
      { emptyField ? <small style={{ color: 'red' }}>Please fill in field</small> : '' }
    </div>
  );
};

InputTodo.propTypes = {
  addTodoProps: PropTypes.func.isRequired,
};
export default InputTodo;
