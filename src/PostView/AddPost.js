import React from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import "../styles/AddPost.css";
const AddPost = () => {

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault()
    let data = e.target
    let formData = new FormData(data)
    await fetch('https://hkab-instacloneapi.onrender.com/uploads',
      {
        method: 'POST',
        body: formData
      })
      .then(res => res.json()).then((d) => {
        alert("post successful")
      }).catch((e) => { console.log(e.message) })
      .finally(() => {
        navigate("/InstaClone")
      })
  }

  return (
    <>
    <NavBar></NavBar>
      <div className="upload-container">
        <form onSubmit={(e)=>handleSubmit(e)}>
          <section>
            <input type="file" required  placeholder="file" id="post" name="PostImage"></input>
          </section>

          <section>
            <input type="text" required placeholder="Author" name="name"></input>
          </section>

          <section>
            <input type="text" required placeholder="Location" name="location"></input>
          </section>

          <section>
            <input type="text" required placeholder="Description" name="description"></input>
          </section>
          <button type="submit">Post</button>
        </form>
      </div>
    </>
  );
}
export default AddPost;