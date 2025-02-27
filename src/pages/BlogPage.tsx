import React, { useState } from 'react';
import { Calendar, Clock, Tag, Edit, Trash2, Plus, Save, X } from 'lucide-react';

// Sample blog data
const initialBlogs = [
  {
    id: 1,
    title: "Understanding Equity Mutual Funds: A Beginner's Guide",
    content: "Equity mutual funds invest primarily in stocks and offer higher potential returns with higher risk. These funds are ideal for long-term investors looking to build wealth over time. When selecting an equity fund, consider factors like fund manager experience, historical performance, expense ratio, and investment strategy.",
    category: "Investment Education",
    date: "March 15, 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    id: 2,
    title: "Debt vs. Equity Funds: Which is Right for You?",
    content: "Debt funds invest in fixed-income securities like government bonds and corporate debentures, offering stable returns with lower risk. Equity funds invest in stocks, providing higher potential returns but with greater volatility. Your choice should depend on your risk tolerance, investment horizon, and financial goals. A balanced portfolio often includes both types of funds.",
    category: "Investment Strategy",
    date: "March 10, 2025",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80"
  },
  {
    id: 3,
    title: "Tax-Saving Mutual Funds: Maximizing Your ELSS Investments",
    content: "Equity Linked Savings Schemes (ELSS) are tax-saving mutual funds that offer tax deductions under Section 80C of the Income Tax Act. These funds have a lock-in period of three years, the shortest among all tax-saving instruments. ELSS funds invest primarily in equities, offering the potential for higher returns compared to other tax-saving options like PPF or tax-saving FDs.",
    category: "Tax Planning",
    date: "March 5, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2011&q=80"
  }
];

function BlogPage() {
  const [blogs, setBlogs] = useState(initialBlogs);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [newBlog, setNewBlog] = useState({
    id: 0,
    title: "",
    content: "",
    category: "",
    date: "",
    readTime: "",
    image: ""
  });

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewBlog({
      ...newBlog,
      [name]: value
    });
  };

  // Add new blog
  const handleAddBlog = () => {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
    
    const blogToAdd = {
      ...newBlog,
      id: blogs.length > 0 ? Math.max(...blogs.map(blog => blog.id)) + 1 : 1,
      date: formattedDate,
      readTime: `${Math.max(1, Math.ceil(newBlog.content.length / 500))} min read`,
      image: newBlog.image || "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2013&q=80"
    };
    
    setBlogs([blogToAdd, ...blogs]);
    setNewBlog({
      id: 0,
      title: "",
      content: "",
      category: "",
      date: "",
      readTime: "",
      image: ""
    });
    setIsAdding(false);
  };

  // Start editing a blog
  const handleEditStart = (blog: typeof newBlog) => {
    setIsEditing(true);
    setEditingId(blog.id);
    setNewBlog(blog);
  };

  // Save edited blog
  const handleSaveEdit = () => {
    setBlogs(blogs.map(blog => blog.id === editingId ? newBlog : blog));
    setIsEditing(false);
    setEditingId(null);
    setNewBlog({
      id: 0,
      title: "",
      content: "",
      category: "",
      date: "",
      readTime: "",
      image: ""
    });
  };

  // Delete a blog
  const handleDeleteBlog = (id: number) => {
    setBlogs(blogs.filter(blog => blog.id !== id));
  };

  // Cancel adding or editing
  const handleCancel = () => {
    setIsAdding(false);
    setIsEditing(false);
    setEditingId(null);
    setNewBlog({
      id: 0,
      title: "",
      content: "",
      category: "",
      date: "",
      readTime: "",
      image: ""
    });
  };

  return (
    <div className="blog-page pt-5 mt-5">
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-8">
            <h1 className="display-5 fw-bold">Investment Insights</h1>
            <p className="lead">Expert analysis and educational content about mutual funds and investment strategies.</p>
          </div>
          <div className="col-md-4 d-flex justify-content-md-end align-items-center">
            <button 
              className="btn btn-primary d-flex align-items-center"
              onClick={() => setIsAdding(true)}
              disabled={isAdding || isEditing}
            >
              <Plus size={18} className="me-2" /> Add New Blog
            </button>
          </div>
        </div>

        {/* Add/Edit Blog Form */}
        {(isAdding || isEditing) && (
          <div className="row mb-5">
            <div className="col-12">
              <div className="card shadow-sm">
                <div className="card-header bg-light d-flex justify-content-between align-items-center">
                  <h5 className="mb-0">{isEditing ? 'Edit Blog Post' : 'Add New Blog Post'}</h5>
                  <button 
                    className="btn btn-sm btn-outline-secondary"
                    onClick={handleCancel}
                  >
                    <X size={18} />
                  </button>
                </div>
                <div className="card-body">
                  <form>
                    <div className="mb-3">
                      <label htmlFor="title" className="form-label">Title</label>
                      <input
                        type="text"
                        className="form-control"
                        id="title"
                        name="title"
                        value={newBlog.title}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="category" className="form-label">Category</label>
                      <select
                        className="form-select"
                        id="category"
                        name="category"
                        value={newBlog.category}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="">Select a category</option>
                        <option value="Investment Education">Investment Education</option>
                        <option value="Investment Strategy">Investment Strategy</option>
                        <option value="Market Analysis">Market Analysis</option>
                        <option value="Tax Planning">Tax Planning</option>
                        <option value="Retirement Planning">Retirement Planning</option>
                      </select>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="content" className="form-label">Content</label>
                      <textarea
                        className="form-control"
                        id="content"
                        name="content"
                        rows={6}
                        value={newBlog.content}
                        onChange={handleInputChange}
                        required
                      ></textarea>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="image" className="form-label">Image URL (optional)</label>
                      <input
                        type="url"
                        className="form-control"
                        id="image"
                        name="image"
                        value={newBlog.image}
                        onChange={handleInputChange}
                        placeholder="https://example.com/image.jpg"
                      />
                      <div className="form-text">Leave empty to use a default image.</div>
                    </div>
                    <div className="d-flex justify-content-end">
                      <button
                        type="button"
                        className="btn btn-secondary me-2"
                        onClick={handleCancel}
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        className="btn btn-primary d-flex align-items-center"
                        onClick={isEditing ? handleSaveEdit : handleAddBlog}
                        disabled={!newBlog.title || !newBlog.content || !newBlog.category}
                      >
                        <Save size={18} className="me-2" /> {isEditing ? 'Save Changes' : 'Publish Blog'}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Blog List */}
        <div className="row">
          {blogs.map(blog => (
            <div className="col-lg-4 col-md-6 mb-4" key={blog.id}>
              <div className="card h-100 shadow-sm blog-card">
                <img 
                  src={blog.image} 
                  className="card-img-top" 
                  alt={blog.title}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <span className="badge bg-primary">{blog.category}</span>
                    <div className="blog-actions">
                      <button 
                        className="btn btn-sm btn-outline-primary me-2"
                        onClick={() => handleEditStart(blog)}
                        disabled={isAdding || isEditing}
                      >
                        <Edit size={16} />
                      </button>
                      <button 
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => handleDeleteBlog(blog.id)}
                        disabled={isAdding || isEditing}
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                  <h5 className="card-title">{blog.title}</h5>
                  <p className="card-text text-truncate-3">{blog.content}</p>
                </div>
                <div className="card-footer bg-white">
                  <div className="d-flex justify-content-between text-muted small">
                    <span className="d-flex align-items-center">
                      <Calendar size={14} className="me-1" /> {blog.date}
                    </span>
                    <span className="d-flex align-items-center">
                      <Clock size={14} className="me-1" /> {blog.readTime}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogPage;