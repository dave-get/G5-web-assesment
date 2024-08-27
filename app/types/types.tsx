export interface Author {
  _id: string;
  name: string;
  email: string;
  image: string;
  role: string;
}

export interface BlogPost {
  _id: string;
  author: Author;
  createdAt: string;
  description: string;
  image: string;
  isPending: boolean;
  likes: number;
  relatedBlogs: string[];
  skills: string[];
  tags: string[];
  title: string;
  updatedAt: string;
  __v: number;
}
