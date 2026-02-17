import mongoose from "mongoose";
import slugify from "slugify";

const blogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, unique: true, index: true },
    content: { type: String, required: true },
    excerpt: String,
    coverImage: String,
    isPublished: { type: Boolean, default: false },
  },
  { timestamps: true },
);

blogSchema.pre("save", function (next) {
  if (!this.isModified("title")) return next();

  this.slug = slugify(this.title, {
    lower: true,
    strict: true,
  });

  next();
});

export default mongoose.model("Blog", blogSchema);
