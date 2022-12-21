import {Outlet} from "react-router-dom";

function Blog() {
   return (
   <div> 
      List Of Blogs
      <Outlet /> 
   </div>
   );
}

export default Blog;