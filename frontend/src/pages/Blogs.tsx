import { Appbar } from "../components/Appbar"
import { BlogCard } from "../components/BlogCard"
import { BlogSkelton } from "../components/BlogSkelton";
import { useBlogs } from "../hooks";

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
    console.log(blogs)

    return <div>
        <Appbar />
        <div  className="flex justify-center">
            <div>
               
                {blogs.map(blog => <BlogCard
                    id={blog.id}
                    authorName={blog.author.name || "Anonymous"}
                    title={blog.title}
                    content={blog.content}
                    publishedDate={"2nd Feb 2024"}
                />)}
            </div>
        </div>
    </div>
}
