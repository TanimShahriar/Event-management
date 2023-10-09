import Navbar from "../pages/Shared/Navbar";

const Members = () => {
  return (
    <div>




      <Navbar></Navbar>
      <h2 className="text-center text-lg lg:text-3xl font-semibold mb-4 underline">Our VIP Members </h2>

      <div className="grid lg:grid-cols-2">
        <div className="flex gap-10 items-center p-3 m-3 shadow-lg">
          <img className="w-32 h-32 lg:w-72 lg:h-72 rounded-full" src="https://i.ibb.co/Dt2DgJ8/team-member-1.jpg" alt="" />
          <div className="space-y-3">
            <h2 className="text-lg lg:text-2xl font-semibold">Rakib Hossain</h2>
            <h2 className="text-lg lg:text-xl font-medium">Card status: <span className="text-[#D72050]"> Platinum</span></h2>
            <h2 className="text-md lg:text-lg font-semibold">Member Since: January, 2020</h2>
            <h2 className="font-medium">Contact: <span className="font-semibold">+96572783628</span></h2>

          </div>
        </div>
        <div className="flex gap-10 items-center p-3 m-3 shadow-lg">
          <img className="w-32 h-32 lg:w-72 lg:h-72 rounded-full" src="https://i.ibb.co/PWGQg6Y/team-member-3.jpg" alt="" />
          <div className="space-y-3">
            <h2 className="text-lg lg:text-2xl font-semibold">Synthia Marisca</h2>
            <h2 className="text-lg lg:text-xl font-medium">Card status: <span className="text-[#D72050]"> Platinum</span></h2>
            <h2 className="text-md lg:text-lg font-semibold">Member Since: March, 2020</h2>
            <h2 className="font-medium">Contact: <span className="font-semibold">+127278328</span></h2>

          </div>
        </div>
        <div className="flex gap-10 items-center p-3 m-3 shadow-lg">
          <img className="w-32 h-32 lg:w-72 lg:h-72 rounded-full" src="https://i.ibb.co/GsGXVPn/team-member-4.jpg
" alt="" />
          <div className="space-y-3">
            <h2 className="text-lg lg:text-2xl font-semibold">Steve Charles</h2>
            <h2 className="text-lg lg:text-xl font-medium">Card status: <span className="text-[#D72050]"> Platinum</span></h2>
            <h2 className="text-md lg:text-lg font-semibold">Member Since: April, 2021</h2>
            <h2 className="font-medium">Contact: <span className="font-semibold">+5726651</span></h2>

          </div>
        </div>
        <div className="flex gap-10 items-center p-3 m-3 shadow-lg">
          <img className="w-32 h-32 lg:w-72 lg:h-72 rounded-full " src="https://i.ibb.co/FJHhprr/team-member-5.jpg" alt="" />
          <div className="space-y-3">
            <h2 className="text-lg lg:text-2xl font-semibold">Pop Ollie</h2>
            <h2 className="text-lg lg:text-xl font-medium">Card status: <span className="text-[#D72050]"> Platinum</span></h2>
            <h2 className="text-md lg:text-lg font-semibold">Member Since: April, 2020</h2>
            <h2 className="font-medium">Contact: <span className="font-semibold">+88017072783628</span></h2>

          </div>
        </div>
      </div>

    </div>
  );
};

export default Members;