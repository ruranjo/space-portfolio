import React, { useEffect } from 'react';


import { useNavigate, useParams } from 'react-router-dom';

import { BlogType, blogs } from '../../utils/data';
import { ItemBlog } from '../../components';

const BlogPage: React.FC<{}> = () => {
  let { nameblog, tag } = useParams();
  let navigate = useNavigate();
    console.log("nameblog: "+nameblog)
    console.log("tag: "+tag)

  useEffect(() => {
    document.title = "jose-luis | blog";
    if(tag != null){
        if(findBlogsByTag(blogs, tag).length === 0){
            console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa: "+tag)
            navigate("*")
        }
    }
  }, []);

  const findBlogsByTag = (blogs: BlogType[], tag: string): BlogType[] => {
    return blogs.filter(blog => blog.tags.includes(tag));
  }

  return (
    <div className='flex flex-col justify-between h-full my-24'>
      <div className='flex justify-between  '>
        <h2 className="text-center text text-4xl font-normal text-textColor font-changa m-4">BLOGS™</h2>
      </div>
      <div>
        <p>
        Blog Discover the latest posts,
        packed with hands-on examples you can try in your own application.
        Explore the blog and snag your favorite code nuggets! 🍟
        </p>
      </div>
      
        <div>
          {nameblog}
        </div>

      <div className=' flex flex-col h-full sm:flex-row '>
        <div className=' w-[100%] flex flex-col gap-4 justify-center '>
         { tag  == null  && 
          blogs.map((blog, index)=>{
            return (
              <ItemBlog date={blog.date} description={blog.description} id={blog.id} title={blog.title} key={index} tags={blog.tags}/>
            )
          })
         }
         { tag != null && 
          findBlogsByTag(blogs,tag).map((blog, index)=>{
            return (
              <ItemBlog date={blog.date} description={blog.description} id={blog.id} title={blog.title} key={index} tags={blog.tags}/>
            )
          })
         }
        </div>
      </div>
    </div>
  );
}

export default BlogPage;