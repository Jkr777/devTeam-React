import React, { useState } from 'react';

const PostsForm = props => {
  const [data, setData] = useState({
    title: "",
    text: ""
  });

  const handleChange = e => setData({...data, [e.target.name]: e.target.value}); 

  const handleSubmit = e => {
    e.preventDefault();
    
    props.addPost(data);
    setData({title: "", text:""})
  };
  return (
    <form className="posts-form" onSubmit={handleSubmit}>
      <input 
        className="posts-form__input"
        type="text"
        name="title"
        placeholder="Title"
        minLength="2"
        maxLength="50"
        onChange={handleChange}
        value={data.title}
        required
      />
      <textarea 
        className="posts-form__input"
        name="text"
        placeholder="Create a post"
        minLength="2"
        maxLength="500"
        onChange={handleChange}
        value={data.text}
        required
      ></textarea>
      <button className="posts-form__btn">Posts</button>
    </form>
  )
};

export default PostsForm;