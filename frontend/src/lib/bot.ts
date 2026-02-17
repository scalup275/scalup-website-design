const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";

export async function sendLead(payload: any) {
  const res = await fetch(`${API_BASE_URL}/api/contact`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error?.error || "Failed to submit lead");
  }

  return res.json();
}

//===>blogs===>//

export async function getAllBlogs() {
  const res = await fetch(`${API_BASE_URL}/api/blogs`);

  if (!res.ok) {
    throw new Error("Failed to fetch blogs");
  }

  return res.json();
}

///===>get by slugs==>
export async function getBlogBySlug(slug: string) {
  const res = await fetch(`${API_BASE_URL}/api/blogs/${slug}`);

  if (!res.ok) {
    throw new Error("Failed to fetch blog");
  }

  return res.json();
}
