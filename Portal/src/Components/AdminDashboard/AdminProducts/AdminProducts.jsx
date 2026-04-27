import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AdminProducts.css";

const API = "http://localhost:4000/api/data";

const AdminProducts = () => {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    title: "",
    description: "",
    cost: "",
    image: null,
  });
  const [editId, setEditId] = useState(null);

  const token = localStorage.getItem("token");

  // 🔹 FETCH PRODUCTS
  const fetchProducts = async () => {
    try {
      const res = await axios.get(`${API}/post`);
      setProducts(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // 🔹 INPUT HANDLER
  const handleChange = (e) => {
    if (e.target.name === "image") {
      setForm({ ...form, image: e.target.files[0] });
    } else {
      setForm({ ...form, [e.target.name]: e.target.value });
    }
  };

  // 🔹 SUBMIT (ADD / UPDATE)
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!token) {
      alert("Please login first ❌");
      return;
    }

    const formData = new FormData();
    formData.append("title", form.title);
    formData.append("description", form.description);
    formData.append("cost", form.cost);
    if (form.image) formData.append("image", form.image);

    try {
      if (editId) {
        await axios.put(`${API}/update/${editId}`, formData, {
          headers: { Authorization: `Bearer ${token}` },
        });
        alert("Product Updated Successfully ✅");
        setEditId(null);
      } else {
        await axios.post(`${API}/post`, formData, {
          headers: { Authorization: `Bearer ${token}` },
        });
        alert("Product Added Successfully ✅");
      }

      setForm({ title: "", description: "", cost: "", image: null });
      fetchProducts();
    } catch (err) {
      console.log(err);
      alert("Something went wrong ❌");
    }
  };

  // 🔹 DELETE
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure to delete?")) return;

    try {
      await axios.delete(`${API}/delete/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("Product Deleted ✅");
      fetchProducts();
    } catch (err) {
      console.log(err);
      alert("Delete failed ❌");
    }
  };

  // 🔹 EDIT
  const handleEdit = (item) => {
    setForm({
      title: item.title,
      description: item.description,
      cost: item.cost,
      image: null,
    });
    setEditId(item._id);
  };

  return (
    <div className="admin">
      <h1>Product Upload</h1>

      {/* FORM */}
      <form onSubmit={handleSubmit} className="form">
        <input
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
          required
        />
        <input
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          required
        />
        <input
          name="cost"
          placeholder="Cost"
          value={form.cost}
          onChange={handleChange}
          required
        />
        <input type="file" name="image" onChange={handleChange} />

        <button type="submit">
          {editId ? "Update" : "Add"}
        </button>
      </form>

      {/* CARDS */}
      <div className="grid">
        {products.map((p) => (
          <div className="card" key={p._id}>
            <img src={p.image.url} alt="product" />
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <h4>₹{p.cost}</h4>

            <div className="btns">
              <button className="edit" onClick={() => handleEdit(p)}>
                Edit
              </button>
              <button className="delete" onClick={() => handleDelete(p._id)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminProducts;