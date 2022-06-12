import IconLaslesVpn from "./assets/Logo.png";
import Ilustration1 from "./assets/Illustration_1.png";
import IconMaps from "./assets/maps.png";
import IconUsers from "./assets/users.png";
import IconServer from "./assets/server.png";
import Ilustration2 from "./assets/Illustration_2.png";
import Check from "./assets/Check.png";
import Global from "./assets/Huge_Global.png";
import Netflix from "./assets/sosmed/Netflix.png";
import Spotify from "./assets/sosmed/Spotify.png";
import Discord from "./assets/sosmed/Discord.png";
import reddit from "./assets/sosmed/reddit.png";
import Facebook from "./assets/sosmed/Facebook.png";
import Instagram from "./assets/sosmed/Instagram.png";
import Twitter from "./assets/sosmed/Twitter.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardPlan from "./components/CardPlan";
import Review from "./components/Review";
import TitleDesc from "./components/TitleDesc";
import SubscribeNow from "./components/SubscribeNow";

function App() {
  const menus = ["About", "Features", "Pricing", "Testimonials", "Help"];
  const section3 = [
    {
      icon: IconMaps,
      lable: "users",
      total: "30+",
    },
    {
      icon: IconUsers,
      lable: "users",
      total: "30+",
    },
    {
      icon: IconServer,
      lable: "users",
      total: "30+",
    },
  ];

  const features = [
    "Powerfull online protection.",
    "Internet without borders.",
    "Internet without borders.",
    "No specific time limits.",
  ];

  const plans = [
    {
      title: "Free Plan",
      features: [
        "Unlimited Bandwitch",
        "Encrypted Connection",
        "No Traffic Logs",
        "Works on All Devices",
      ],
      price: "Free",
    },
    {
      title: "Standard Plan",
      features: [
        "Unlimited Bandwitch",
        "Encrypted Connection",
        "No Traffic Logs",
        "Works on All Devices",
        "Connect Anyware",
      ],
      price: "$9 / mo",
    },
    {
      title: "Premium Plan",
      features: [
        "Unlimited Bandwitch",
        "Encrypted Connection",
        "No Traffic Logs",
        "Works on All Devices",
        "Connect Anyware",
        "Connect Anyware",
      ],
      price: "$12 / mo",
    },
  ];

  const sosmed = [Discord, reddit, Netflix, Spotify];

  return (
    <div className="bg-white">
      <header className="container max-w-5xl mx-auto flex flex-row pt-12 items-center space-x-36">
        <img alt="icon-laslesvpn" src={IconLaslesVpn} className="w-36" />
        <div className="flex-1">
          <ul className="flex flex-row space-x-6">
            {menus.map((val, index) => (
              <li key={index}>{val}</li>
            ))}
          </ul>
        </div>
        <div className="space-x-6 flex flex-row items-center ">
          <button className="font-bold">Sign In</button>
          <button className="border border-red-500 rounded-full py-2 px-6">
            Sign Up
          </button>
        </div>
      </header>
      <main>
        <div className="container max-w-5xl mx-auto  grid grid-cols-2 py-24">
          <div>
            <h1 className="font-bold text-4xl pb-5">
              Want anything to be easy
              <br />
              with LaslesVPN.
            </h1>
            <div className="font-normal text-xs pb-12">
              Provide a network for all your needs with ease and fun using
              LaslesVPN discover interesting features from us.
            </div>
            <button className="py-4 px-16 bg-red-500 rounded-md text-white drop-shadow-3xl">
              Get Started
            </button>
          </div>
          <div>
            <img src={Ilustration1} alt="ilustration-laslesvpn" />
          </div>
        </div>
        <div className="container max-w-5xl mx-auto grid grid-cols-3 shadow-2xl rounded-md py-4">
          {section3.map((val, index) => {
            return (
              <div
                key={index}
                className={`flex flex-row py-4  space-x-6 justify-center ${
                  index + 1 !== section3.length && "border-r border-gray-200"
                }`}
              >
                <div className="rounded-full bg-red-100 p-3 ">
                  <img alt={val.lable} src={val.icon} className="w-6 h-6" />
                </div>
                <div>
                  <div>{val.total}</div>
                  <div>{val.lable}</div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="container max-w-5xl mx-auto grid grid-cols-2 py-24  items-center ">
          <img src={Ilustration2} alt={"features-lasles-vpn"} />
          <div className="px-16 space-y-4 ">
            <div className="font-medium text-3xl">
              We Provide Many Features You Can Use
            </div>
            <div className="text-sm font-normal">
              You can explore the features that we provide with fun and have
              their own functions each feature.
            </div>
            {features.map((val, index) => {
              return (
                <div className="flex items-center space-x-3" key={index}>
                  <img
                    src={Check}
                    alt="features-check-laslesvpn"
                    className="w-6 h-6"
                  />
                  <div className="text-xs">{val}</div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="bg-gray-50 py-24">
          <TitleDesc
            title={"Choose Your Plan"}
            desc={`Let's choose the package that is best for you and explore it
              happily and
              cheerfully.`}
          />

          <div className=" container max-w-5xl mx-auto grid grid-cols-3 space-x-6">
            {plans.map((val, index) => {
              return (
                <CardPlan
                  key={index}
                  {...val}
                  isSelect={index + 1 === plans.length}
                />
              );
            })}
          </div>

          <div className="container max-w-5xl mx-auto py-24">
            <TitleDesc
              title={" Huge Global Network of Fast VPN"}
              desc={` See LaslesVPN everywhere to make it easier for you when you move locations.`}
            />

            <img src={Global} alt={"Global"} className="my-20" />
            <div className="flex flex-row justify-center">
              {sosmed.map((val, index) => (
                <img key={index} src={val} className="w-44 h-14" alt={val} />
              ))}
            </div>
          </div>

          <Review />
        </div>
        <div className="bg-gray-100">
          <SubscribeNow />
        </div>
      </main>
      <footer className="bg-gray-100 py-20">
        <div className="container mx-auto max-w-5xl flex flex-row  space-x-24">
          <div className="flex-1 space-y-5">
            <img src={IconLaslesVpn} alt="logo lasles vpn" className="w-36" />
            <div>
              LaslesVPN is a private virtual network that <br />
              has unique features and has high security.
            </div>
            <div className="flex flex-row">
              <img src={Facebook} alt="facebook icon" className="w-16 h-16" />
              <img src={Twitter} alt="twitter icon" className="w-16 h-16" />
              <img src={Instagram} alt="IG icon" className="w-16 h-16" />
            </div>
            <div>©2020LaslesVPN</div>
          </div>
          <div className="">
            <div className="text-lg font-semibold mb-6">Product</div>
            <ul className="space-y-6 text-sm text-gray-500">
              <li>Pricing</li>
              <li>Locations</li>
              <li>Server</li>
              <li>Countries</li>
              <li>Blog</li>
            </ul>
          </div>
          <div>
            <div className="text-lg font-semibold mb-6">Engage</div>
            <ul className="space-y-6  text-sm text-gray-500">
              <li>LaslesVPN ? </li>
              <li>FAQ</li>
              <li>Tutorials</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
          <div>
            <div className="text-lg font-semibold mb-6">Earn Money</div>
            <ul className="space-y-6  text-sm text-gray-500">
              <li>Affiliate</li>
              <li>Become Partner</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
