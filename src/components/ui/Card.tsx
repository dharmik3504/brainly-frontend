import { ShareIcon } from "../../icons/ShareIcon";
interface CardProps {
  title: string;
  link: string;
  type: "twitter" | "youtube";
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
        {type === "youtube" && (
          // https://www.youtube.com/embed/YMAdgnh9VOI?si=8yniPeHcsnsZt3Ak
          <iframe
            className="w-full pt-4"
            src={link.replace("watch", "embed")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        )}
        {type == "twitter" && (
          <blockquote className="twitter-tweet">
            <a href={link.replace("x.com", "twitter.com")}></a>
          </blockquote>
        )}
      </div>
    </div>
  );
};
