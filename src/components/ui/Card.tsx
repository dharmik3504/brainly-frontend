import { ShareIcon } from "../../icons/ShareIcon";
interface CardProps {
  title: string;
  link: string;
  type: "Twitter" | "Youtube";
}
export const Card = ({ title, link, type }: CardProps) => {
  return (
    <div>
      <div className="p-4 bg-white rounded-md  outline-gray-200 border max-w-72 min-h-72 min-w-72">
        <div className="flex justify-between ">
          <div className="flex items-center text-md">
            <div className="text-gray-500 pr-4">
              <ShareIcon />
            </div>
            {title}
          </div>
          <div className="flex items-center">
            <div className="pr-2 text-gray-500">
              <a href={link} target="_blank">
                <ShareIcon />
              </a>
            </div>
            <div className="text-gray-500">
              <ShareIcon />
            </div>
          </div>
        </div>
        {type === "Youtube" && (
          // https://www.youtube.com/embed/YMAdgnh9VOI?si=8yniPeHcsnsZt3Ak
          //   https://www.youtube.com/embed/Bj2ly9PMdPI&t=2016s
          // https://www.youtube.com/watch?v=Bj2ly9PMdPI&t=2016s
          //https://www.youtube.com/watch?v=vXvfrfqqDbU
          <iframe
            className="w-full pt-4"
            src={link.replace("watch?v=", "embed/")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        )}
        {type == "Twitter" && (
          <blockquote className="twitter-tweet">
            <a href={link.replace("x.com", "twitter.com")}></a>
          </blockquote>
        )}
      </div>
    </div>
  );
};
