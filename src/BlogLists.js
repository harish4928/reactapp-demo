import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Pagination from './Pagination';

const BlogLists = () => {
    
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalBlogs, setTotalBlogs] = useState(0);
  const itemsPerPage = 8;

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_limit=${itemsPerPage}`);
      const data = await res.json();
      setBlogs(data);
      setTotalBlogs(parseInt(res.headers.get('x-total-count'), 10));
      setLoading(false);
    };

    fetchBlogs();
  }, [currentPage]);

  const paginate = pageNumber => setCurrentPage(pageNumber);
   
 
    return (
        <div>
        <ul>
        {blogs.map(blog => (
        <li key={blog.id}>
          <h2><Link to={`/post/${blog.id}`}>{blog.title}</Link></h2> 
          
        </li>
      ))}
      </ul>


    
    <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={totalBlogs}
        paginate={paginate}
        currentPage={currentPage}
      />


    


        </div>
    );
};


export default BlogLists;