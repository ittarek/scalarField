import { useEffect, useState, useCallback } from "react";
import { CiBookmark } from "react-icons/ci";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from "react-router-dom";

const MainCard = () => {
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(1); 
  const [hasMoreData, setHasMoreData] = useState(true);

  // Function to fetch data
  const fetchNews = useCallback(() => {
    if (!hasMoreData) return; 

    fetch( "/news.json")
      .then(res => res.json())
      .then(data => {
        if (data.length === 0) {
          setHasMoreData(false); 
     
          
        } else {
              setNews(prevNews => [...prevNews, ...data]);
          setPage(prevPage => prevPage + 1);
        }
      })
      .catch(error => console.error("Error fetching data:", error));
  }, [page, hasMoreData]);

  useEffect(() => {
    fetchNews(); 
  }, [fetchNews]);

  // Helper function to split array into chunks of 4
  const chunkArray = (array, size) => {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  };

  const newsChunks = chunkArray(news, 4);

  return (
    <InfiniteScroll
      dataLength={news.length}
      next={fetchNews}
      hasMore={hasMoreData}
      loader={<h4 className="text-center text-white">Loading more...</h4>}
      endMessage={
        <p style={{ textAlign: "center", color: "gray" }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
    >
      <div className="container mx-auto p-4 space-y-8 lg:w-[700px] w-full">
        {newsChunks.map((chunk, index) => (
          <div key={chunk._id} className="space-y-4 ">
            {/* Main Card */}
            {chunk[0] && (
              <Link
                to={`/details/${chunk[0]._id}`}
                className="rounded-lg shadow-lg cursor-pointer hover:-translate-y-0.5 transition-transform duration-200 inline-block"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={chunk[0].image_url}
                    alt="Main Card Image"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-3 bg-[#202222] ">
                  <h2 className="text-2xl text-white leading-[1.4] my-2">
                    {chunk[0].title}
                  </h2>
                  <p className="text-[#929292]">
                    {chunk[0].details.slice(0, 200)}...
                  </p>
                  <div className="flex justify-between items-center mt-5">
                    <div className="flex items-center gap-1">
                      <img
                        className="w-[20px] h-[20px] rounded-full"
                        src={chunk[0].author.img}
                        alt="author"
                        loading="lazy"
                      />
                      <p className="text-sm text-[#929292]">
                        {chunk[0].author.name}
                      </p>
                    </div>
                    <button>
                      <CiBookmark className="text-[#929292]" />
                    </button>
                  </div>
                </div>
              </Link>
            )}

            {/* Sub Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {chunk.slice(1).map(data => (
                <div
                  key={data.id}
                  className="rounded-lg lg:w-[220px] max-w-sm h-[330px] overflow-hidden  w-full cursor-pointer shadow-lg bg-[#202222] transition-all hover:-translate-y-0.5 relative"
                >
                  {/* image */}
                  <div className="h-[100px] overflow-hidden">
                    <img
                      src={data.image_url}
                      alt="Card Image"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-3 flex justify-between flex-col">
                    <div>
                      <h2 className="text-lg text-white leading-[1.4] mb-1">
                        {data.title}
                      </h2>
                      <p className="text-[#929292]">
                        {data.details.slice(0, 60)}...
                      </p>
                    </div>
                    <div className="mt-5 absolute bottom-0 mb-1 w-[190px] flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <img
                          className="w-[20px] h-[20px] rounded-full"
                          src={data.author.img}
                          alt="author"
                          loading="lazy"
                        />
                        <p className="text-sm text-[#929292]">
                          {data.author.name}
                        </p>
                      </div>
                      <button>
                        <CiBookmark className="text-[#929292]" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </InfiniteScroll>
  );
};

export default MainCard;
