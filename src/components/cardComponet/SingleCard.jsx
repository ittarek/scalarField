import { CiBookmark } from "react-icons/ci";

const cardData = [
  {
    id: 1,
    img: "https://pplx-res.cloudinary.com/image/upload/t_thumbnail/v1728076976/getty_uploads/2175811742.jpg",
    title: "US Job Market September Boo,",
    Details: "The US Job Market Showed unxpected strength in...",
    athImg:
      "https://imagedelivery.net/MPdwyYSWT8IY7lxgN3x3Uw/5d57bdd7-5f9c-4c94-70b6-3da174bbec00/thumbnail",
    authName: "polymarket",
  },
  {
    id: 2,
    img: "https://pplx-res.cloudinary.com/image/upload/t_thumbnail/v1728084774/getty_uploads/1301036947.jpg",
    title: "US Job Market September Boo,",
    Details: "The US Job Market Showed unxpected strength in...",
    athImg:
      "https://imagedelivery.net/MPdwyYSWT8IY7lxgN3x3Uw/5d57bdd7-5f9c-4c94-70b6-3da174bbec00/thumbnail",
    authName: "polymarket",
  },
  {
    id: 3,
    img: "https://pplx-res.cloudinary.com/image/upload/t_thumbnail/v1728084228/server_uploads/flufhg12bxk6rso1ytgk.webp",
    title: "US Job Market September Boo,",
    Details: "The US Job Market Showed unxpected strength in...",
    athImg:
      "https://imagedelivery.net/MPdwyYSWT8IY7lxgN3x3Uw/5d57bdd7-5f9c-4c94-70b6-3da174bbec00/thumbnail",
    authName: "polymarket",
  },
];
const SingleCard = () => {
  return (
    <div className="lg:flex justify-center items-center gap-5 mb-5">
      {cardData.map(data => (
        <div key={data.id}>
          <div className="lg:w-[220px] overflow-hidden  w-full bg-[#202222] transform transition-transform duration-500  hover:-translate-y-0.5  rounded">
            <div className="overflow-hidden  h-[120px]">
              <img
                className="object-cover w-full h-full"
                src={data.img}
                alt=""
              />
            </div>
            <div className=" my-3 px-1">
              <div className="">
                <h2 className=" text-[#fff] leading-[1.4] mb-1">
                  {data.title}
                </h2>
                <p className="text-sm text-[#929292] mb-4">{data.Details}</p>
              </div>
              {/* author details */}
              <div className="flex justify-between items-center ">
                <div className="flex gap-1 items-center">
                  <img
                    className="w-[20px] h-[20px] rounded-full"
                    src={data.athImg}
                    alt=""
                  />
                  <p className="text-[#929292] ">{data.authName}</p>
                </div>
                <button>
                  <CiBookmark  className="text-[#929292]"/>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SingleCard;
