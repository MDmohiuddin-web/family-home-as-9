// import { data } from "autoprefixer";
// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

import { Link } from "react-router-dom";

// import { Helmet } from "react-helmet-async";

const Cards = ({ carde }) => {
  // console.log(carde)

  const {
    description,
    id,
    price,
    status,
    area,
    image,
    estate_title,
    facilities,
  } = carde;

  return (
    <>
      <div data-aos="fade-up" className=" my-5 m-auto ">
        {/* <Helmet><title>  Family Home || Home</title></Helmet> */}
        <div className=" h-[600px] card max-w-96 bg-base-100 shadow-xl ">
          <figure>
            <img
              src={image}
              className="max-h-[300px]  "
              alt="image not found"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{estate_title}</h2>

            <p>{description}</p>
            <ul className="list-inside">
              {facilities.map((facilities, idx) => (
                <li className="list-disc cursor-pointer" key={idx}>
                  {facilities}
                </li>
              ))}
            </ul>
            <p>{area}</p>
            <div className=" flex justify-between gap-1">
              <Link className="block flex-grow p-3 text-center rounded-sm text-gray-900 dark:text-gray-50 bg-my_color-400 dark:bg-my_color-600">
                status : {status}
              </Link>{" "}
              <Link className="block flex-grow p-3 text-center rounded-sm text-gray-900 dark:text-gray-50 bg-my_color-400 dark:bg-my_color-600">
                price : {price}
              </Link>
            </div>
            <div className="card-actions ">
              <Link
                to={`/info/${id}`}
                className="block w-full p-3 text-center rounded-sm text-gray-900 dark:text-gray-50 bg-my_color-400 dark:bg-my_color-600"
              >
                View Property
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
