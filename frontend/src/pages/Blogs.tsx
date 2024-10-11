import { Appbar } from "../components/Appbar"
import { BlogCard } from "../components/BlogCard"
import { BlogSkeleton } from "../components/BlogSkeleton";
import { useBlogs } from "../hooks"

export const Blogs=()=>{
    const {loading,blogs}=useBlogs();
    if(loading){
        return <div>
            <div>
                <Appbar/>
            </div>
            <div>
            <div className="px-52">
            <BlogSkeleton/>
            <BlogSkeleton/>
            <BlogSkeleton/>
            <BlogSkeleton/>
            <BlogSkeleton/>
        </div>
            </div>
        </div>
    }
    return <div>
        <Appbar/>
    <div className="flex justify-center">
    <div className="w-2/3">
        {blogs.map(blog=><BlogCard id={blog.id} authorName={blog.author.name} title={blog.title}
        content={blog.content} publishedDate="10/10/2024"/>)}
    </div>
    </div>
    </div>
}