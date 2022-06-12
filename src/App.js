import IconLaslesVpn from "./assets/Logo.png";
import Ilustration1 from "./assets/Illustration_1.png";
import IconMaps from "./assets/maps.png";
import IconUsers from "./assets/users.png";
import IconServer from "./assets/server.png";
import Ilustration2 from "./assets/Illustration_2.png";
import Check from "./assets/Check.png";
import IconFree from "./assets/Free.png";
import CheckSucces from "./assets/check-success.png";
import Global from "./assets/Huge_Global.png";
import Netflix from "./assets/sosmed/Netflix.png";
import Spotify from "./assets/sosmed/Spotify.png";
import Discord from "./assets/sosmed/Discord.png";
import reddit from "./assets/sosmed/reddit.png";
import ArrowLeft from "./assets/arrow-left.png";
import ArrowRight from "./assets/arrow-right.png";
import StartIcon from "./assets/start.png";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useRef, useState } from "react";

function App() {
  const refSlick = useRef();
  const [indexSlick, setIndexSlick] = useState(0);

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

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    afterChange: (index) => setIndexSlick(index),
  };

  function next() {
    refSlick?.current?.slickNext?.();
  }
  function previous() {
    refSlick?.current?.slickPrev?.();
  }

  console.log("index ", indexSlick);

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
        <div className="container max-w-5xl mx-auto grid grid-cols-2 py-24 items-center ">
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
          <div className=" container max-w-5xl mx-auto mb-10 ">
            <div className="text-center text-3xl font-medium mb-5">
              Choose Your Plan
            </div>
            <div className="text-center font-normal text-sm text-gray-600">
              Let's choose the package that is best for you and explore it
              happily and
              <br />
              cheerfully.
            </div>
          </div>
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
            <div className=" container max-w-5xl mx-auto mb-10 ">
              <div className="text-center text-3xl font-medium mb-5">
                Huge Global Network of Fast VPN
              </div>
              <div className="text-center font-normal text-sm text-gray-600">
                See LaslesVPN everywhere to make it easier for you when you move
                <br />
                locations.
              </div>
            </div>
            <img src={Global} alt={"Global"} className="my-20" />
            <div className="flex flex-row justify-center">
              {sosmed.map((val, index) => (
                <img key={index} src={val} className="w-44 h-14" alt={val} />
              ))}
            </div>
          </div>
          <Slider {...settings} arrows={false} ref={refSlick}>
            {Array.from(Array(8)).map((val, index) => {
              return (
                <div className={`${index + 1 === 1 ? "ml-32" : 0}`}>
                  <CardReview key={val} isSelect={indexSlick === index} />
                </div>
              );
            })}
          </Slider>
          <div className="container mx-auto max-w-5xl flex flex-row justify-between mt-10">
            <div className="flex flex-row space-x-2 flex-1">
              {Array.from(Array(8)).map((val, index) => {
                return (
                  <div
                    className={`h-3 rounded-full ${
                      index === indexSlick
                        ? "w-10 bg-red-500 transition-all duration-300 ease-in-out"
                        : "w-3 bg-gray-300 transition-all duration-200 ease-in-out "
                    }`}
                  />
                );
              })}
            </div>
            <div className="space-x-4 flex flex-row">
              <button
                onClick={() => previous()}
                className="w-12 h-12 rounded-full text-center border border-red-500 flex items-center justify-center"
              >
                <img src={ArrowLeft} alt="arrow-left" className="w-6 h-6 " />
              </button>
              <button
                onClick={() => next()}
                className="w-12 h-12 rounded-full bg-red-500  flex items-center justify-center"
              >
                <img src={ArrowRight} alt="arrow-right" className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function CardReview({ isSelect }) {
  return (
    <div
      className={`p-7 border ${
        isSelect ? " border-red-500" : "border-gray-300"
      } mr-7 w-96 rounded-lg`}
    >
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row space-x-5">
          <img
            src="https://images.pexels.com/photos/8573621/pexels-photo-8573621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="profile"
            className="w-12 h-12 rounded-full"
          />
          <div>
            <div>Hari Irawan</div>
            <div>Warsaw, Poland</div>
          </div>
        </div>
        <div className="flex flex-row items-center space-x-2">
          <div>4.5</div>
          <img src={StartIcon} alt="start" className="w-3 h-3" />
        </div>
      </div>
      <div className="mt-5">
        “Wow... I am very happy to use this VPN, it turned out to be more than
        my expectations and so far there have been no problems. LaslesVPN always
        the best”.
      </div>
    </div>
  );
}

function CardPlan({ title, price, features, isSelect }) {
  return (
    <div
      className={`bg-white rounded-md flex flex-col justify-between items-center  pt-16 pb-8 border ${
        isSelect ? "border-red-500" : "border-gray-300"
      }`}
    >
      <div className="space-y-5 flex flex-col justify-center items-center">
        <img src={IconFree} alt="" className="w-24 h-24" />
        <h3>{title}</h3>
        <div className="space-y-2">
          {features.map((val, index) => {
            return (
              <div
                key={index}
                className="flex flex-row mr-2 items-center space-x-2 "
              >
                <img
                  src={CheckSucces}
                  alt="check-success"
                  className="w-3 h-2"
                />
                <div>
                  {val} <div />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="mt-8">
        <div className="text-center mb-3">{price}</div>
        <button
          className={`border rounded-full py-1 px-10 border-red-500  ${
            isSelect ? "bg-red-500 text-white" : "bg-white text-red-500"
          }`}
        >
          Select
        </button>
      </div>
    </div>
  );
}

export default App;
