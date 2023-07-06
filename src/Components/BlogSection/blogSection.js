import "./blogSection.css";
import blogSectionInfo from "./blogSectionInfo";


const BlogSection = () => {
    return (
        <div className="blogSection">
        <div className="blogSectionContainer">
            <h3>
                Blogs
            </h3>
            <div className="blogsContainer">
            {blogSectionInfo.map((blog, index) => {
                return (
                <div className="blogItem" key={index}>
                    <div>
                        <img className="blogImg" src={blog.imageSrc} alt="2022: Year in Review"/>
                        <div className="blogItemTextContainer">
                            <h4 style={{marginTop: 0, marginBottom: "5px", fontSize: "16px", color: "#ee3425"}}>
                                {blog.headingType}
                            </h4>
                            <h4 style={{marginTop: 0, marginBottom: "5px", fontSize: "18px", color: "#000"}}>
                                {blog.mainHeading}
                            </h4>
                            <p style={{maxHeight: "calc(1.4rem * 3)", overflow: "hidden", marginTop: "5px"}}>
                                {blog.description}
                            </p>
                            <div className="generalFlexClass blogItemLowerTextContainer">
                                <span className="blogItemReadMoreBtn">
                                    Read More
                                    <svg xlmns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 14 14" width="20" height="20" role="img" style={{marginLeft: "5px"}}>
                                        <path d="M7.945 2.518c-.184.085-.362.325-.361.485.001.161.077.246 1.648 1.861.858.882 1.563 1.613 1.567 1.625.005.012-1.855.023-4.503.027l-4.511.006-.086.053c-.124.077-.186.22-.186.425s.062.348.186.425l.086.053 4.511.006c2.648.004 4.508.015 4.503.027-.004.012-.709.743-1.567 1.625-1.076 1.106-1.574 1.634-1.604 1.7a.495.495 0 0 0-.044.166c0 .226.305.525.536.525.115 0 .247-.083.427-.268l1.935-1.988c.972-1 1.798-1.835 1.836-1.858.093-.055.199-.275.199-.413 0-.138-.106-.358-.198-.413-.038-.022-.864-.858-1.836-1.857L8.547 2.741c-.256-.263-.402-.316-.602-.223" fillRule="evenodd"></path>
                                    </svg>
                                </span>
                                <h4 style={{marginBottom: "5px", fontSize: "14px", color: "#9a9a9a"}}>
                                    {blog.date}
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>)
            })}
            </div>

            <div style={{textAlign: "center"}} className="generalFlexClass" >
                <div style={{color: "#ee3425"}}>
                    <button className="redBtn" style={{borderRadius: "4px", color: "#fff", padding: "8px 40px"}}>
                        <span>View All</span>
                    </button>
                </div>
            </div>

            
        </div>
    </div>
    )
}

export default BlogSection;