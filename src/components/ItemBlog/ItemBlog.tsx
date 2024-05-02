import React from 'react';
import { Link } from 'react-router-dom';

export interface Props {
    title: string,
    date: string,
    description: string,
    id: string,
    tags: string[]
}

const ItemBlog:React.FC<Props> = ({ title, date, description, id, tags }) => {
  return (
    
      <div className="blog-item w-full bg-secondary p-8 rounded-2xl shadow-lg transition duration-300 ease-in-out transform hover:scale-[1.01]  hover:shadow-lg">
        <p className="blog-item-date italic">{date}</p>
        <Link to={`/blog/${id}`} className="blog-item-link">
            <h2 className="text-3xl font-medium font-changa text-primary">{title}</h2>
        </Link>
        <p className="blog-item-description">{description}</p>
        <div className='flex gap-4 flex-wrap  m-4'>
        {
          tags.map((taglabel, index)=>{
            return (
            <Link to={`/tag/${taglabel}`} className="blog-item-link">
                <span key={index}  className={`button ${false ? 'active' : ''} p-2 bg-myBackground text-center text-lg flex justify-center items-center rounded-lg font-bold text-textColor hover:scale-[1.01] `}>
                {taglabel}
                </span> 
            </Link>
            )
          })
        }
        </div>
      </div>
    

  );
};

export default ItemBlog;