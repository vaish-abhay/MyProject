import { useParams } from "react-router-dom";
import Blog1 from "./Blog1";
import Blog2 from "./Blog2";

function SingleBlog() {
    const {blogid} = useParams();
    console.log(blogid);
    if(blogid === '1') return <Blog1 />;
    if(blogid === '2') return <Blog2 />; 
}

export default SingleBlog;