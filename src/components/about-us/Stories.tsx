import Image, { StaticImageData } from "next/image";
import blankImage from "@/assets/blankImage.png";
import _Miguel from "./profile-pictures/Miguel.jpg";
import _Karina from "./profile-pictures/Karina_Akhmedove.jpg";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";

const stories: StoryInfo[] = [
  {
    name: "Miguel Tsai",
    position: "Advisor (Former Captain)",
    links: {
      linkedin: "https://www.linkedin.com/in/miguel-roberto-tsai-bbbb4920a",
      instagram: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    content:
      "Miguel has been in UBC BIOMOD since 1st year, which makes it his 5th year. When he joined, he was a part of many subteams: wetlab, website, Cadnano(now computational and modeling). He became a wetlab lead and eventually one of the co-captains. He has become an essential member of the many projects and subteams he has been on. He jokingly says all the time that he eats, sleeps and dreams of UBC BIOMOD.  He has learned so much from his time at UBC BIOMOD and made so many good friends, he can’t imagine his life without it. “I have been mentored by many people at UBC BIOMOD and I wish I am doing the same to all the members currently. I think the best part of UBC BIOMOD is learning from each other and facing all these challenges together.”",
    picture: _Miguel,
  },
  {
    name: "Karina Akhmedova",
    position: "Captain",
    links: {
      linkedin: "https://www.linkedin.com/in/karinaubc",
      instagram: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    content:
      "I became a part of UBC BIOMOD in the beginning of my second year in Biomedical Engineering. It’s now my third year on the team! Originally, I joined as a part of wetlab subteam: worked on protocol development and performed some experimental work. Later, I was promoted to a wetlab subteam lead, and then a co-captain along with Paniz. It’s been 4 months of us leading the team and I have to admit it’s more work than it seemed! UBC BIOMOD is a great place to grow as a leader, an engineer, and a person. I’m excited to be a part of this team, it allowed me to gain technical knowledge in various fields and directly apply them on a problem. A highlight memory of mine is us going to a 2023 competition in Tokyo, we were so happy and so nervous at the same time. I had to present computational results back then and it was my first time ever presenting work internationally. BIOMOD is about people, it’s a place to learn and solve together.",
    picture: _Karina,
  },
];

export default function Stories() {
  return (
    <div className="flex flex-col gap-y-6 w-full px-4 lg:px-16 items-center">
      <h1 className="text-primary font-bold text-center text-4xl md:text-6xl">
        Hear Some of Our Stories
      </h1>
      <h2 className="text-primary text-xl md:text-2xl text-center">
        These are a few of many success stories of the member of UBC Biomod
      </h2>
      {stories.map((s, i) => (
        <Story key={s.name + i} story={s} leftAligned={i % 2 == 0} />
      ))}
    </div>
  );
}

function Story({
  story,
  leftAligned,
}: {
  story: StoryInfo;
  leftAligned: boolean;
}) {
  return (
    <div
      className={
        "flex flex-col gap-x-14 gap-y-4 px-4 " +
        (leftAligned ? "lg:flex-row" : "lg:flex-row-reverse")
      }
    >
      <Image
        className="w-full lg:w-1/2 h-[30rem] lg:h-[32rem] object-cover rounded-3xl"
        src={story.picture}
        alt={story.name}
      />

      <div className="flex flex-col w-full text-primary gap-y-2">
        <h3
          className="font-semibold text-2xl
                    md:text-4xl"
        >
          {story.name}
        </h3>
        <h4
          className="text-xl
                    md:text-2xl"
        >
          {story.position}
        </h4>
        <div className="flex flex-row gap-3">
          {story.links.linkedin && (
            <a href={story.links.linkedin} target="_blank">
              <FaLinkedinIn className="w-7 h-7 cursor-pointer hover:opacity-80" />
            </a>
          )}
          {story.links.instagram && (
            <a href={story.links.instagram} target="_blank">
              <FaInstagram className="w-7 h-7 cursor-pointer hover:opacity-80" />
            </a>
          )}
        </div>
        <div className="flex flex-col gap-y-6 text-black">
          {story.content.split(/\r?\n/).map((c, i) => (
            <p key={i}>{c}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

type StoryInfo = {
  name: string;
  position: string;
  links: {
    linkedin: string | null;
    instagram: string | null;
  };
  content: string;
  picture: StaticImageData;
};
