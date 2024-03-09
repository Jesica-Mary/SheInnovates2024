import FeatureImage from "../../assets/img/feature.png";

const Feature = () => {
  return (
    <div className="w-full flex justify-center items-center gap-20">
      <div className="w-2/5">
        <img src={FeatureImage} />
      </div>

      <div className="w-2/5  text-white flex flex-col gap-6">
        <div className="text-4xl font-black flex flex-col justify-center items-start">
          <div>
            SheSearch
            <br />
            <span className=" text-center bg-gradient-to-r from-yellow-300 to-orange-400 text-transparent bg-clip-text">
              {" "}
              Personalized Question
            </span>
          </div>
          <span>Web App</span>
        </div>
        <ul className="ml-5 list-disc text-gray-400 list-outside flex gap-5 flex-col text-lg">
          <li className="">
          Empower yourself with a personalized women-centric question web app designed to address your unique professional journey. 
          </li>
          <li className="">
          Explore tailored queries covering career advancement, work-life balance, negotiation tactics, and leadership development. Navigate challenges, discover insights, and unlock your full potential with a platform dedicated to elevating women in the workplace.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Feature;
