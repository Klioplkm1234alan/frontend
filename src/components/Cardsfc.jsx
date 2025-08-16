import React from 'react';

const Cardsfc = ({ title, desc, date, likes, isLiked, onLike }) => {
  return (
    <div className="flex flex-col justify-between w-90 mb-4 pt-6 pr-6 pb-3 pl-6 bg-white shadow-sm rounded-2xl">
      <div className="flex justify-between">
        <div className="flex flex-col gap-2">
          <h1 className="font-semibold text-xl">{title}</h1>
          <div className="flex items-center text-[12px] text-gray-600 gap-4">
            <div className="flex items-center gap-1">
              <img src="/person.svg" alt="" className="w-3.5 h-3.5 fill-gray-700" />
              <span>Anonymous Student</span>
            </div>
            <div className="flex items-center gap-1">
              <img src="/calender.svg" alt="" className="w-3.5 h-3.5 fill-gray-700" />
              <span>{date}</span>
            </div>
          </div>
        </div>
        <div>
          <span className="py-1 px-2 text-[12px] font-semibold text-black bg-gray-100 shadow-sm rounded-xl">
            approved
          </span>
        </div>
      </div>

      <div className="mt-3">
        <p className="text-sm text-gray-800">{desc}</p>
        <div className="flex items-center justify-between mt-3">
          <button
            onClick={onLike}
            className={`group cursor-pointer transition-all flex justify-center items-center gap-1 py-1.5 px-2.5 rounded-xl border-1 border-slate-200
              ${isLiked
                ? 'bg-blue-500 text-white fill-white'
                : 'bg-slate-50 text-black fill-black hover:bg-blue-500 hover:text-white hover:fill-white'}`}
          >
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox={isLiked ? "0 0 24 24" : "0 -960 960 960"}
              width="24px"
              fill={isLiked ? "white" : "currentColor"}
            >
              <path d={isLiked ? "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" : "m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"} />
            </svg>
            <span>{likes}</span>
          </button>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default Cardsfc;