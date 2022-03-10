import {
  Chat,
  Dashboard,
  Favorite,
  LocalMovies,
  Logout,
  Stream,
  TrendingUp,
  VideogameAsset,
} from "@mui/icons-material";
import Head from "next/head";
import { useEffect, useState } from "react";
import Collection from "../Components/Collection";
import Header from "../Components/Header";
import Menu from "../Components/Menu";
import RecomendedList from "../Components/RecomendedList";
import VideoContainer from "../Components/VideoContainer";
import Data from "../Components/Data";
import { TimelineLite, gsap } from "gsap";

export default function Home() {
  gsap.registerPlugin();
  const [isvideo, setvideo] = useState({
    name: Data[0].videoName,
    videoSrc: Data[0].videoSrc,
  });
  const t1 = new TimelineLite({ delay: 0.3 });
  useEffect(() => {
    const scrollContainer = document.querySelector("#scrollContainer");

    scrollContainer.addEventListener("wheel", (evt) => {
      evt.preventDefault();
      scrollContainer.scrollLeft += evt.deltaY;
    });
    // prettier-ignore
    t1
    .from('#logo', {x : -50, opacity : 0, ease : 'back.out(1.7)', duration : 0.5}, 'Start')
    .from('#searchBox', {x : -50, opacity : 0, ease : 'back.out(1.7)', duration : 0.5}, 'Start')
    .from('#profileContainer', {x : -50, opacity : 0, ease : 'back.out(1.7)', duration : 0.5}, 'Start')
    .from('#videoContainer', {opacity : 0, duration : 0.5})
    .from('#leftMenu div', { xPercent: 100, opacity: 0, stagger: 0.1, ease : 'back.out(1.7)' }, 'Start')
    .from("#recomendedList div", { xPercent: 100, opacity: 0, stagger: 0.1, ease : 'back.out(1.7)' }, 'Start')
    .from('#scrollContainer div',{ yPercent: 100, opacity: 0, stagger: 0.1, ease : 'back.out(1.7)' } , 'Start');
  }, []);

  return (
    <div className="flex flex-col bg-mainBg w-screen h-screen overflow-hidden">
      <Head>
        <title>Xeon Tutorial | ZEPETO INDONESIA</title>
        <link rel="" href="" />
      </Head>

      <Header />

      <div className="flex w-full h-full">
        {/* Left Menu */}
        <div
          id="leftMenu"
          className="sm:w-[60px] min-w-[60px] md:w-[10%] h-full flex flex-col items-center justify-evenly"
        >
         
        </div>

        {/* Main Container */}
        <div className="sm:w-[calc(100%-60px)] md:w-[90%] h-full">
          {/* top  list */}
          <div className="w-full h-[70%] max-h-[480px] grid grid-cols-3 gap-2 p-2">
            <div
              className="md:col-span-2 sm:col-span-6  rounded-lg overflow-hidden
              flex items-center justify-center
            "
            >
              <VideoContainer data={isvideo} />
            </div>
            <div
              className="md:col-span-1 bg-primary sm:col-span-6  overflow-y-auto
              scrollbar scrollbar-thin scrollbar-thumb-gray-800
            "
              id="recomendedList"
            >
              <p className="text-textColor text-[18px] font-bold my-2 px-2">
                Rekomendasi
              </p>

              {/* List item */}

              {Data &&
                Data.map((data) => (
                  <div
                    key={data.id}
                    onClick={() =>
                      setvideo({
                        name: data.videoName,
                        videoSrc: data.videoSrc,
                      })
                    }
                  >
                    <RecomendedList
                      imgSrc={data.imgSrc}
                      videoName={data.videoName}
                      artistName={"XEONZEPETO"}
                    />
                  </div>
                ))}
            </div>
          </div>
          {/* bottom List */}
          <div className="w-full h-[30%] ">
            <div
              className="flex overflow-x-scroll items-center scrollbar-none py-2"
              id="scrollContainer"
            >
              
                
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
