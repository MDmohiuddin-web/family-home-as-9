import { Helmet } from "react-helmet-async";
import { Link, useLoaderData, useParams } from "react-router-dom";

const Cardinfo = () => {
  const info = useLoaderData();

  const { id } = useParams();
  const datas = info.find((datas) => datas.id == id);
  console.log(info);

  const {
    description,
    price,
    status,
    area,
    image,
    estate_title,
    facilities,
    segment_name,

    location,
  } = datas;
  return (
    <div>
      <Helmet>
        <title> Family Home || card details</title>
      </Helmet>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="Album" />
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
          <p>{location}</p>
          <p>{segment_name}</p>

          <div className=" flex justify-between gap-1">
            <Link className="block flex-grow p-3 text-center rounded-sm text-gray-900 dark:text-gray-50 bg-my_color-400 dark:bg-my_color-600">
              status : {status}
            </Link>
            <Link className="block flex-grow p-3 text-center rounded-sm text-gray-900 dark:text-gray-50 bg-my_color-400 dark:bg-my_color-600">
              price : {price}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cardinfo;
