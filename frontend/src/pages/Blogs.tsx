import { Appbar } from "../components/Appbar"
import { BlogCard } from "../components/BlogCard"
import { BlogSkelton } from "../components/BlogSkelton";
import { useBlogs } from "../hooks";
import GitHubIcon from '@mui/icons-material/GitHub';


export const Blogs = () => {
   const { blogs, loading } = useBlogs();

    if (loading) {
        return <div>
            <Appbar /> 
            <div  className="flex justify-center">
                <div>
                    <BlogSkelton />
                    <BlogSkelton />
                    <BlogSkelton />
                    <BlogSkelton />
                    <BlogSkelton /> 
                </div>
            </div>
        </div>
    }
    // console.log(blogs)

    return <div>
        <Appbar />
        <div  className="flex justify-center mb-4">
            <div>
               
                {blogs.map(blog => <BlogCard
                key={blog.id}
                    id={blog.id}
                    authorName={blog.author.name || "Anonymous"}
                    title={blog.title}
                    content={blog.content}
                    publishedDate={"2nd Feb 2024"}
                />)}
            </div>
        </div>
        <div className="bg-gray-900 py-12 lg:py-24 ">
                  <div className="flex flex-col justify-center space-y-2 text-center lg:space-y-4 ">
            <h2 className="text-xl font-bold tracking-tighter sm:text-2xl text-white">Copyright &copy; 2024 tushar-agarwal7 <GitHubIcon/></h2>
            <p className="text-gray-100 dark:text-gray-400">

            </p>
          </div>
          
        </div>
    </div>
}
