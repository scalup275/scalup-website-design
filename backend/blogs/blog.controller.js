import Blog from "./blog.model.js";

/** CREATE */
export const createBlog = async (req, res) => {
  const blog = await Blog.create(req.body);
  res.status(201).json(blog);
};

/** READ ALL (Admin) */
export const getAllBlogs = async (req, res) => {
  const blogs = await Blog.find().sort({ createdAt: -1 });
  res.json(blogs);
};

/** READ BY SLUG (Public) */
export const getBlogBySlug = async (req, res) => {
  const blog = await Blog.findOne({ slug: req.params.slug });
  if (!blog) return res.status(404).json({ error: "Blog not found" });
  res.json(blog);
};

/** UPDATE */
export const updateBlog = async (req, res) => {
  const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(blog);
};

/** DELETE */
export const deleteBlog = async (req, res) => {
  await Blog.findByIdAndDelete(req.params.id);
  res.json({ success: true });
};
