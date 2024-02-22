import React, { useState, useRef, useEffect } from "react";
import IconButton from "./IconButton"; 
import "./Reviews.css";

const reviews = [
  {
    picture: "https://randomuser.me/api/portraits/women/56.jpg",
    name: "Erasmo Schumm",
    location: "Moenchester, United States",
    content:
      "Lasles VPN has been an exceptional choice for my online privacy needs. With its fast servers and user-friendly interface, I can browse the internet securely and enjoy unrestricted access to geo-blocked websites. Moreover, the robust encryption ensures that my data remains protected at all times.",
    score: 4.1,
  },
  {
    picture: "https://randomuser.me/api/portraits/women/7.jpg",
    name: "Jeana Shields",
    location: "Favborough, United States",
    content:
      "Lasles VPN is an exceptional provider. I've had a positive experience with their fast connection, unlimited bandwidth, and top-notch security features.It's user-friendly and reliable, ensuring my online privacy.",
    score: 4.7,
  },
  {
    picture: "https://randomuser.me/api/portraits/women/79.jpg",
    name: "Misha Leffler",
    location: "Tannastad, Poland",
    content:
      "Lasles VPN has exceeded my expectations with its exceptional service and strong security features. The connection is fast, stable, and provides an excellent level of protection for my online activities.",
    score: 3.9,
  },
  {
    picture: "https://randomuser.me/api/portraits/men/34.jpg",
    name: "Francais Von Rueden",
    location: "Utrecht, Netherlands",
    content:
      "I've been using Lasles VPN for a while now, and it has been an absolute game-changer for my online security and privacy needs. The connection speed is top-notch, and the interface is user-friendly. With strong encryption and a wide range of servers to choose from, Lasles VPN ensures I can browse the web with peace of mind.",
    score: 4.2,
  },
  {
    picture: "https://randomuser.me/api/portraits/men/41.jpg",
    name: "Shelia Hackett",
    location: "South Boycemouth, Canada",
    content:
      "Lasles VPN has been an absolute game-changer in securing my online activities. With its user-friendly interface, lightning-fast connection, and an extensive range of server locations, it offers a hassle-free and secure browsing experience.",
    score: 4.8,
  },
  {
    picture: "https://randomuser.me/api/portraits/women/56.jpg",
    name: "Georgann Muller",
    location: "Dusseldorf, Germany",
    content:
      "Lasles VPN has exceeded my expectations in every way. From its seamless user interface to lightning-fast connection speeds, this VPN service stands out. With robust encryption and a vast server network, Lasles VPN ensures my privacy and access to blocked content.",
    score: 5.0,
  },
  // Other review objects...
];

function Reviews() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const containerRef = useRef(null);
  

  const setIndex = (index) => {
    setSelectedIndex(index);
    scrollToElement(index);
  };

  const changeIndex = (value) => {
    const newIndex = selectedIndex + value;
    if (newIndex >= 0 && newIndex < reviews.length) {
      setSelectedIndex(newIndex);
      scrollToElement(newIndex);
    }
  };

  const scrollToElement = (index) => {
    const element = containerRef.current.querySelector(
      `.review[index="${index}"]`
    );
    if (element) {
      element.scrollIntoView({ inline: "center", block: "nearest" });
    }
  };

  const handleScroll = () => {
    const startScroll = containerRef.current.scrollLeft <= 10;
    const endScroll =
      containerRef.current.scrollLeft ===
      containerRef.current.scrollWidth - containerRef.current.offsetWidth;

    if (startScroll) {
      setSelectedIndex(0);
    } else if (endScroll) {
      setSelectedIndex(reviews.length - 1);
    } else {
      const middle = containerRef.current.clientWidth / 2;
      const halfCard = reviewWidth / 2;
      setSelectedIndex(
        Math.floor(
          (containerRef.current.scrollLeft + middle - halfCard) / reviewWidth
        )
      );
    }
  };

  useEffect(() => {
    containerRef.current.addEventListener("scroll", handleScroll);
    return () => {
      containerRef.current.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className="container scroll-smooth  block items-stretch justify-items-stretch px-[30px] py-[20px] "
        ref={containerRef}
      >
        <div className="reviews inline-flex justify-start items-start gap-[30px] transition-all ">
          {reviews.map((review, index) => (
            <div
              key={index}
              className={`review flex flex-col rounded-[10px] border border-solid border-[#DDD] p-[20px] w-[360px] h-[300px] transition-all gap-5 cursor-pointer  ${
                selectedIndex === index ? "active" : ""
              }`}
              onClick={() => setIndex(index)}
              index={index}
            >
              <div className="header flex items-center gap-5">
                <img
                  className="w-[80px] h-[80px] rounded-[50%]"
                  src={review.picture}
                  alt="profile"
                />
                <div className="flex flex-col">
                  <span className="text-[#0B132A] text-[18px] font-[500] leading-8">
                    {review.name}
                  </span>
                  <span className="text-[#4F5665] text-[14px] font-[400] leading-[30px]">
                    {review.location}
                  </span>
                </div>
                <div className="flex justify-center items-center text-[#0B132A] text-[16px] font-[400] leading-[30px] gap-[10px]">
                  {review.score}
                  <img
                    className="w-[20px] h-[20px]"
                    src={new URL("../assets/star.svg", import.meta.url).href}
                    alt="star"
                  />
                </div>
              </div>
              <div className="text-[#0B132A] text-[16px] font-[400] leading-[30px] flex flex-col line-clamp-6 trancate">
                {review.content}...
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="controls flex justify-between py-[40px] px-[20px] pt-0">
        <div className="selector flex items-center gap-3 transition-all">
          {reviews.map((_, index) => (
            <span
              key={index}
              className={`select w-[10px] h-[10px] bg-[#DDD] rounded-[10px] cursor-pointer ${
                selectedIndex === index ? "active" : ""
              }`}
              onClick={() => setIndex(index)}
            ></span>
          ))}
        </div>
        <div className="flex gap-3 ">
          <IconButton
            disabled={selectedIndex === 0}
            type="primary"
            onClick={() => changeIndex(-1)}
            icon={new URL("../assets/arrow-back.svg", import.meta.url)}
          />
          <IconButton
            disabled={selectedIndex === reviews.length - 1}
            type="primary"
            onClick={() => changeIndex(1)}
            icon={new URL("../assets/arrow-forward.svg", import.meta.url)}
          />
        </div>
      </div>
    </>
  );
}

export default Reviews;
