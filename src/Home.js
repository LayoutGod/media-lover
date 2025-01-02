import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const { data: blogs , isLoading, error } = useFetch('https://dummy-backend-z4lz.onrender.com/blogs/')

    return (  
        <div className="home">
          { error && <div>{ error }</div>}
           {isLoading && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} />}
 
            {blogs && <BlogList blogs={blogs.filter((blog) => blog.author ==='Arvis Chioma' )}/>}
        </div>
    );
}
 
export default Home;