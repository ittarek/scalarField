import { useEffect, useState, useRef, useCallback } from "react";
import { CiBookmark } from "react-icons/ci";

const MainCard = () => {
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(1); // Page number for fetching more data
  const loaderRef = useRef(null);
  const [hasMoreData, setHasMoreData] = useState(true);
  // Function to fetch data 
  const fetchNews = useCallback(() => {
    if (!hasMoreData) return; // Do not fetch if there's no more data

    fetch(`/public/news.json?page=${page}`)
      .then(res => res.json())
      .then(data => {
        if (data.length === 0) {
          setHasMoreData(false); // No more data to load
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

  // infinite scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          fetchNews();
        }
      },
      { threshold: 1.0 }
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, [loaderRef, fetchNews, hasMoreData]);

  // for  4 card data 
  const chunkArray = (array, size) => {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  };

  const newsChunks = chunkArray(news, 4);

  return (
    <div className="container mx-auto p-4 space-y-8">
      {newsChunks.map((chunk, index) => (
        <div
          key={index}
          className="space-y-4 rounded-lg overflow-hidden shadow-lg mx-auto lg:w-[700px]  w-full   my-4 "
        >
          {/* Main Card */}
          {chunk[0] && (
            <div className="rounded-lg overflow-hidden shadow-lg bg-[#202222] w-full transition-all  hover:-translate-y-0.5 cursor-pointer">
              <div className="h-48 overflow-hidden">
                <img
                  src={chunk[0].image_url}
                  alt="Main Card Image"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-3">
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
                    />
                    <p className="text-sm text-[#929292]">
                      {chunk[0].author_name}
                    </p>
                  </div>
                  <button>
                    <CiBookmark className="text-[#929292]" />
                  </button>
                </div>
              </div>
            </div>
          )}
          {/* Sub Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-5">
            {chunk.slice(1).map((data , index)=> (
              <div
                key={data.id? data.id : index}
                className="rounded overflow-hidden shadow-lg     lg:w-[220px] w-full bg-[#202222] 
               transition-all hover:-translate-y-0.5 cursor-pointer"
              >
                <div className="overflow-hidden  h-[120px]">
                  <img
                    className="object-cover w-full h-full"
                    src={data.image_url}
                    alt=""
                  />
                </div>

                <div className=" my-2 px-1">
                  <div className="">
                    <h2 className=" text-[#fff] leading-[1.4] mb-1">
                      {data.title}
                    </h2>
                    <p className="text-sm text-[#929292] mb-4">
                      {data.details.slice(0, 60)}...
                    </p>
                  </div>
                  {/* author details */}
                  <div className="flex justify-between items-center ">
                    <div className="flex gap-1 items-center">
                      <img
                        className="w-[20px] h-[20px] rounded-full"
                        src={data.author.img}
                        alt=""
                      />
                      <p className="text-[#929292] ">{data.author.name}</p>
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

      {/* Loader */}

      {hasMoreData && (
        <div ref={loaderRef} className="text-center py-4 text-white">
          Loading more...
        </div>
      )}
      {!hasMoreData && (
        <div className="text-center py-4 text-gray-500">No more data.</div>
      )}
    </div>

  );
};

export default MainCard;
