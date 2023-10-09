import Navbar from "../Shared/Navbar";


const VipAccess = () => {
  return (
    <div>
      <Navbar></Navbar>
      <h2 className="text-center text-3xl font-semibold">Welcome to VIP Access route</h2>
      <div>
        <h2 className="ml-3 text-2xl font-semibold mt-5 mb-3">Guest List:</h2>
        <ul className="list-disc font-semibold">
          <li className="ml-8">Atif Aslam</li>
          <li className="ml-8">Taylor Swift</li>
          <li className="ml-8">Salman Khan</li>
          <li className="ml-8">Artcell</li>
          <li className="ml-8">Kelvin Haris</li>
          <li className="ml-8">Nagar Baul</li>
          <li className="ml-8">Persona Ltd</li>
          <li className="ml-8">Rihana</li>
        </ul>

        <h2 className="text-center text-2xl font-semibold mt-5">Upcoming Events</h2>
        <div className="grid lg:grid-cols-3">
          <div className="p-3 m-3 space-y-1 border border-pink-700">
            <img src="/public/Resources/Gallery-8.jpg" alt="" />
            <h2 className="text-2xl font-semibold">Weeding Event</h2>
            <h2 className="text-xl font-medium">Chief Guest: <span className="text-[#D72050]"> Atif Aslam</span></h2>
            <h4 className="text-lg font-semibold">Ticket price: <span className="font-bold">17$</span></h4>
            <h5 className="text-xl font-semibold">Location: Sugandha Beach</h5>
            <h5 className=" text-[#D72050] text-lg font-medium">29th October, 2023</h5>
          </div>
          <div className="p-3 m-3 space-y-1 border border-pink-700">
            <img src="/public/Resources/Gallery-14.jpg" alt="" />
            <h2 className="text-2xl font-semibold">Birthday Party</h2>
            <h2 className="text-xl font-medium">Chief Guest: <span className="text-[#D72050]">Artcell</span></h2>
            <h4 className="text-lg font-semibold">Ticket price: <span className="font-bold">17$</span></h4>
            <h5 className="text-xl font-semibold">Location: Police Stadium</h5>
            <h5 className=" text-[#D72050] text-lg font-medium">3rd November, 2023</h5>
          </div>
          <div className="p-3 m-3 space-y-1 border border-pink-700">
            <img src="/public/Resources/Gallery-15.jpg" alt="" />
            <h2 className="text-2xl font-semibold">Weeding Event</h2>
            <h2 className="text-xl font-medium">Organization: <span className="text-[#D72050]"> Persona Ltd</span></h2>
            <h4 className="text-lg font-semibold">Ticket price: <span className="font-bold">17$</span></h4>
            <h5 className="text-xl font-semibold">Location: Labony Point</h5>
            <h5 className=" text-[#D72050] text-lg font-medium">9th October, 2023</h5>
          </div>
          <div className="p-3 m-3 space-y-1 border border-pink-700">
            <img src="/public/Resources/Gallery-11.jpg" alt="" />
            <h2 className="text-2xl font-semibold">Engagement Party</h2>
            <h2 className="text-xl font-medium">Chief Guest: <span className="text-[#D72050]"> Atif Aslam</span></h2>
            <h4 className="text-lg font-semibold">Ticket price: <span className="font-bold">N/A</span></h4>
            <h5 className="text-xl font-semibold">Location: Westine, Dhaka</h5>
            <h5 className=" text-[#D72050] text-lg font-medium">15th November, 2023</h5>
          </div>
          <div className="p-3 m-3 space-y-1 border border-pink-700">
            <img src="/public/Resources/Gallery-22.jpg" alt="" />
            <h2 className="text-2xl font-semibold">Weeding Event</h2>
            <h2 className="text-xl font-medium">Chief Guest: <span className="text-[#D72050]">Nagar Baul</span></h2>
            <h4 className="text-lg font-semibold">Ticket price: <span className="font-bold">17$</span></h4>
            <h5 className="text-xl font-semibold">Location: Teknaf</h5>
            <h5 className=" text-[#D72050] text-lg font-medium">22th November, 2023</h5>
          </div>
          <div className="p-3 m-3 space-y-1 border border-pink-700">
            <img src="/public/Resources/Gallery-23.jpg" alt="" />
            <h2 className="text-2xl font-semibold">Anniversary</h2>
            <h2 className="text-xl font-medium">Chief Guest: <span className="text-[#D72050]">Salman Khan</span></h2>
            <h4 className="text-lg font-semibold">Ticket price: <span className="font-bold">29$</span></h4>
            <h5 className="text-xl font-semibold">Location: La Meridian</h5>
            <h5 className=" text-[#D72050] text-lg font-medium">29th December, 2023</h5>
          </div>
          <div className="p-3 m-3 space-y-1 border border-pink-700">
            <img src="/public/Resources/Gallery-24.jpg" alt="" />
            <h2 className="text-2xl font-semibold">Weeding Event</h2>
            <h2 className="text-xl font-medium">Chief Guest: <span className="text-[#D72050]"> Taylor Swift</span></h2>
            <h4 className="text-lg font-semibold">Ticket price: <span className="font-bold">50$</span></h4>
            <h5 className="text-xl font-semibold">Location: Sugandha Beach</h5>
            <h5 className=" text-[#D72050] text-lg font-medium">29th December, 2023</h5>
          </div>
          <div className="p-3 m-3 space-y-1 border border-pink-700">
            <img src="/public/Resources/Gallery-25.jpg" alt="" />
            <h2 className="text-2xl font-semibold">Retirement Party</h2>
            <h2 className="text-xl font-medium">Chief Guest: <span className="text-[#D72050]"> Atif Aslam</span></h2>
            <h4 className="text-lg font-semibold">Ticket price: <span className="font-bold">N/A</span></h4>
            <h5 className="text-xl font-semibold">Location: Sugandha Beach</h5>
            <h5 className=" text-[#D72050] text-lg font-medium">To be decided</h5>
          </div>
          <div className="p-3 m-3 space-y-1 border border-pink-700">
            <img src="/public/Resources/Gallery-3.jpg" alt="" />
            <h2 className="text-2xl font-semibold">Weeding Event</h2>
            <h2 className="text-xl font-medium">Chief Guest: <span className="text-[#D72050]">Nora Fatehi</span></h2>
            <h4 className="text-lg font-semibold">Ticket price: <span className="font-bold">19$</span></h4>
            <h5 className="text-xl font-semibold">Location: Sugandha Beach</h5>
            <h5 className=" text-[#D72050] text-lg font-medium">1st January, 2024</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VipAccess;