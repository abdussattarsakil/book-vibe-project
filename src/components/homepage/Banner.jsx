import bannerImg from "../../assets/banner.svg"
const Banner = () => {
    return (
        <div className="">
            <div className="hero bg-base-300 p-20 m-10 container mx-auto rounded-3xl">
                <div className="hero-content flex-col lg:flex-row-reverse w-full justify-between">
                    

                    <div className="hover-3d">
                        {/* content */}
                        <figure className="max-w-100 rounded-2xl">
                            <img src={bannerImg} alt="Book Picture" />
                        </figure>
                        {/* 8 empty divs needed for the 3D effect */}
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>


                    <div>
                        <h1 className="text-5xl font-bold">Books to freshen up
                            <br /> your bookshelf</h1>
                        <p className="py-6">

                        </p>
                        <button className="btn btn-success">View The List</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;