import Footer from "../Footer/Footer";
import Navbar from "../Shared/Navbar";


const AboutUs = () => {
  return (
    <div className="">
      <Navbar></Navbar>
      <div className="flex justify-center  p-4 ">
        <div className="flex flex-col justify-center items-center ">
          <div className=" text-2xl md:text-5xl font-medium flex my-7 ">
            <div>What people say about </div>
            <div className="text-[#D72050] mx-2"> US</div>
          </div>
          <div className="flex flex-col md:flex-row max-w-screen-2xl justify-center items-center ">

            <div className="overflow-hidden w-full m-4 flex justify-center   md:w-[33%]  shadow-xl bg-[#D72050]">

              <div className="flex flex-col md:flex-row items-center justify-center  bg-white rounded-tl-full ">
                <div className="  items-center justify-center flex py-2">
                  <div className="flex flex-col  items-center justify-center ">
                    <div className="flex items-center">
                      <div className="p-1 bg-white rounded-full">

                        <img src="/public/Resources/random-1.jpg" alt=""
                          className="rounded-full h-24 w-24" />
                      </div>
                      <div>
                        <div className="font-bold  mx-4">John Doe</div>
                        <div className="text-lg font-medium hover:text-stone-500 mx-4"><a
                          href="#">Excellent</a></div>
                        <div className="rating">
                          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                        </div>
                      </div>
                    </div>
                    <div className="  m-2 px-8">I recently attended a wedding at the picturesque countryside venue, and it was simply magical. The rustic decor, lush gardens, and warm ambiance created a romantic atmosphere that left everyone in awe. The bride and groom looked stunning, and the whole event was flawlessly organized. It was a day filled with love and laughter that I'll cherish forever.</div>

                  </div>
                </div>

              </div>
            </div>
            <div className="overflow-hidden w-full m-4 flex justify-center   md:w-[33%]  shadow-xl bg-[#D72050]">

              <div className="flex flex-col md:flex-row items-center justify-center  bg-white rounded-tl-full ">
                <div className="  items-center justify-center flex py-2">
                  <div className="flex flex-col  items-center justify-center ">
                    <div className="flex items-center">
                      <div className="p-1 bg-white rounded-full">

                        <img src="/public/Resources/random-2.jpg" alt="" className="rounded-full h-24 w-24" />
                      </div>
                      <div>
                        <div className="font-bold  mx-4">Elina Gilbert</div>
                        <div className="text-lg font-medium hover:text-stone-500 mx-4"><a
                          href="#">Really cool</a></div>
                        <div className="rating">
                          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                        </div>
                      </div>
                    </div>
                    <div className="  m-2 px-8"> Last weekend, I joined a music festival with friends. It was an unforgettable experience! The lineup of artists was incredible, and the festival grounds were transformed into a colorful wonderland with art installations and food stalls. We danced the night away, met people from all walks of life, and felt a sense of community like never before.</div>

                  </div>
                </div>

              </div>
            </div>
            <div className="overflow-hidden w-full m-4 flex justify-center   md:w-[33%]  shadow-xl bg-[#D72050]">

              <div className="flex flex-col md:flex-row items-center justify-center  bg-white rounded-tl-full ">
                <div className="  items-center justify-center flex py-2">
                  <div className="flex flex-col  items-center justify-center ">
                    <div className="flex items-center">
                      <div className="p-1 bg-white rounded-full">

                        <img src="/public/Resources/random-3.jpg" alt="" className="rounded-full h-24 w-24" />
                      </div>
                      <div>
                        <div className="font-bold  mx-4">Mark Taylor</div>
                        <div className="text-lg font-medium hover:text-stone-500 mx-4"><a
                          href="#">Satisfied</a></div>
                        <div className="rating">
                          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </div>
                      </div>
                    </div>
                    <div className="m-2 px-8">Both weddings and birthday events are special occasions that bring people together to celebrate significant moments in life. They can be customized to reflect the personality and preferences of the hosts, making each event unique and memorable  auctions, and live entertainment. It was a night of generosity and philanthropy that left a lasting impact.</div>

                  </div>
                </div>

              </div>
            </div>



          </div>
        </div>
      </div>
      <div className="flex justify-center  p-4 ">
        <div className="flex flex-col justify-center items-center ">

          <div className="flex flex-col md:flex-row max-w-screen-2xl justify-center items-center ">

            <div className="overflow-hidden w-full m-4 flex justify-center   md:w-[33%]  shadow-xl bg-[#D72050]">

              <div className="flex flex-col md:flex-row items-center justify-center  bg-white rounded-tl-full ">
                <div className="  items-center justify-center flex py-2">
                  <div className="flex flex-col  items-center justify-center ">
                    <div className="flex items-center">
                      <div className="p-1 bg-white rounded-full">

                        <img src="/public/Resources/random-4.jpg" alt=""
                          className="rounded-full h-24 w-24" />
                      </div>
                      <div>
                        <div className="font-bold  mx-4">Sarah Mitchell</div>
                        <div className="text-lg font-medium hover:text-stone-500 mx-4"><a
                          href="#">Good job</a></div>
                        <div className="rating">
                          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </div>
                      </div>
                    </div>
                    <div className="  m-2 px-8"> We celebrated my daughter's 5th birthday with a magical princess-themed party, and it was a hit! The decorations were enchanting, and the princess entertainer kept the children engaged with games and stories. The highlight was the beautiful princess cake. It was a day my daughter and her friends will remember forever!</div>

                  </div>
                </div>

              </div>
            </div>
            <div className="overflow-hidden w-full m-4 flex justify-center   md:w-[33%]  shadow-xl bg-[#D72050]">

              <div className="flex flex-col md:flex-row items-center justify-center  bg-white rounded-tl-full ">
                <div className="  items-center justify-center flex py-2">
                  <div className="flex flex-col  items-center justify-center ">
                    <div className="flex items-center">
                      <div className="p-1 bg-white rounded-full">

                        <img src="/public/Resources/random-5.jpg" alt="" className="rounded-full h-24 w-24" />
                      </div>
                      <div>
                        <div className="font-bold  mx-4">Mark Johnson</div>
                        <div className="text-lg font-medium hover:text-stone-500 mx-4"><a
                          href="#">Excellent</a></div>
                        <div className="rating">
                          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                        </div>
                      </div>
                    </div>
                    <div className="  m-2 px-8"> My wife and I had our dream wedding at this venue, and it exceeded our expectations in every way. The staff were incredibly accommodating, making sure every detail was perfect. Our guests raved about the food, and the live band had everyone dancing the night away. It was a day filled with love, laughter, and cherished memories</div>

                  </div>
                </div>

              </div>
            </div>
            <div className="overflow-hidden w-full m-4 flex justify-center   md:w-[33%]  shadow-xl bg-[#D72050]">

              <div className="flex flex-col md:flex-row items-center justify-center  bg-white rounded-tl-full ">
                <div className="  items-center justify-center flex py-2">
                  <div className="flex flex-col  items-center justify-center ">
                    <div className="flex items-center">
                      <div className="p-1 bg-white rounded-full">

                        <img src="/public/Resources/random-6.jpg" alt="" className="rounded-full h-24 w-24" />
                      </div>
                      <div>
                        <div className="font-bold  mx-4">Josh Reacher</div>
                        <div className="text-lg font-medium hover:text-stone-500 mx-4"><a
                          href="#">Satisfied</a></div>
                        <div className="rating">
                          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </div>
                      </div>
                    </div>
                    <div className="m-2 px-8"> I attended a charity gala last month, and it was a truly heartwarming evening. The venue was elegant, with beautifully decorated tables and a grand stage. The event raised funds for a noble cause, and there were moving speeches, auctions, and live entertainment. It was a night of generosity and philanthropy that left a lasting impact.</div>

                  </div>
                </div>

              </div>
            </div>



          </div>
        </div>
      </div>
      <div className="mx-1 lg:mx-8">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default AboutUs;