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
    <div className="flex justify-center items-center gap-5">
      {cardData.map(data => (
        <div key={data.id}>
          <div className="w-[200px]overflow-hidden bg-[#202222] transform transition-transform duration-500  hover:-translate-y-0.5 w-[220px] rounded">
            <img className="overflow-hidden " src={data.img} alt="" />
            <div className=" my-3 p-2">
              <div className="pb-1">
                <h2 className=" text-[#DDDDDC] leading-[1.4] mt-2">
                  {data.title}
                </h2>
                <p className=" text-[#929292] mb-3">{data.Details}</p>
              </div>
              {/* author details */}
              <div className="flex justify-between items-center">
                <div className="flex gap-3">
                  <img
                    className="w-[20px] h-[20px] rounded-full"
                    src={data.athImg}
                    alt=""
                  />
                  <p>{data.authName}</p>
                </div>
                <button>
                  <CiBookmark />
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
