const Banner = () => {
  return (

    <div className="hero border-red-600 h-[60vh]" style={{ backgroundImage: 'url(https://i.ibb.co/vVpqH7D/part3.jpg)' }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-2xl">
          <h1 className="mb-5 text-5xl font-bold">Hello there,</h1>
          <p className="mb-5">Welcome to The Event Hub, the ultimate online resource for all your celebratory needs. From the exuberance of birthday parties to the elegance of wedding ceremonies and the enduring love of anniversaries, we are your go-to destination for planning, tips, and inspiration for these cherished events.</p>
          <button className="btn btn-primary">Explore</button>
        </div>
      </div>
    </div>


  );
};

export default Banner;