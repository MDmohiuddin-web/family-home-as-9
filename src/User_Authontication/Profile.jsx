import { useForm } from "react-hook-form";
import UseAuth from "../HOOK/UseAuth";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";

const Profile = () => {
  const { user, updateUserProfile } = UseAuth();
  //   console.log(user);

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const { photoURL, name } = data;
    
    updateUserProfile(name, photoURL)
      .then(() => {
        // console.log(result)
        toast.success("profile updated")
        window.location.reload();
      })
      .catch((error) => {
        console.log(error)
        toast.warning("profile update failed");
      });
  };

  //aos
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="  py-5 my-5 " data-aos="zoom-in">
      <Helmet>
        <title> Family Home || Profile</title>
      </Helmet>
      <div className="flex m-auto  flex-col justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 bg-white dark:bg-white text-gray-100 dark:text-gray-800">
        <img
          className="rounded-lg"
          src={
            user?.photoURL || "https://source.unsplash.com/150x150/?portrait?3"
          }
        />
        <div className="space-y-4 text-center divide-y divide-gray-700 dark:divide-gray-300">
          <div className="my-2 space-y-1">
            <h2 className="text-xl font-semibold sm:text-2xl">
              {user?.displayName || "user email not found"}
            </h2>
            <p className="px-5 text-xs sm:text-base text-gray-400 dark:text-gray-600">
              {user?.email || "user name not found"}
            </p>
          </div>
          <div className="flex justify-center pt-2 space-x-4 align-center">
            <div className="w-full  m-auto  p-8 space-y-3 rounded-xl bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-1 text-sm">
                  <label className="block text-gray-400 dark:text-gray-600">
                    update Username
                  </label>
                  <input
                    type="text"
                    name="name"
                    defaultValue={user?.displayName}
                    placeholder="Enter Name"
                    {...register("name", { required: true })}
                    className="w-full px-4 py-3 rounded-md border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800 focus:border-my_color-400 focus:dark:border-my_color-600"
                  />

                  <small className="text-danger text-red-500 ">
                    {errors.name && "This field is required"}
                  </small>
                </div>
                <div className="space-y-1 text-sm">
                  <label className="block text-gray-400 dark:text-gray-600">
                    update Image Url
                  </label>
                  <input
                    type="text"
                    name="photoURL"
                    placeholder="Image Url"
                    defaultValue={user?.photoURL}
                    {...register("photoURL", { required: true })}
                    className="w-full px-4 py-3 rounded-md border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800 focus:border-my_color-400 focus:dark:border-my_color-600"
                  />
                  <small className="text-red-500 text-danger">
                    {errors.photoURL && "This field is required"}
                  </small>
                </div>

                <button className="block w-full p-3 text-center rounded-sm text-gray-900 dark:text-gray-50 bg-my_color-400 dark:bg-my_color-600">
                  update profile
                </button>
              </form>
              {/*  */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

{
  /* <div className="space-y-1 text-sm">
            <label className="block text-gray-400 dark:text-gray-600">
              Username
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter Name"
            
              {...register("name", { required: true })}
              className="w-full px-4 py-3 rounded-md border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800 focus:border-my_color-400 focus:dark:border-my_color-600"
            />
            {errors.name && <span className="text-red-500 text-center">This field is required</span>}
          </div>
          <div className="space-y-1 text-sm">
            <label className="block text-gray-400 dark:text-gray-600">
              Image Url
            </label>
            <input
              type="text"
              name="photoURL"
              placeholder="photoURL url"
            
              {...register("photoURL")}
              className="w-full px-4 py-3 rounded-md border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800 focus:border-my_color-400 focus:dark:border-my_color-600"
            />
            {/* {errors.photoURL && <span className="text-red-500 text-center">This field is required</span>} 
        </div> */
}
