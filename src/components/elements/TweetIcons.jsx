import BookmarkIcon from "@/assets/BookmarkIcon";
import ChartIcon from "@/assets/ChartIcon";
import CommentIcon from "@/assets/CommentIcon";
import { LikeIcon } from "@/assets/LikeIcon";
import RepostIcon from "@/assets/RepostIcon";

const TweetIcons = () => {
    return <>
    <div className="pt-3 pr-5 inline-flex w-full justify-between">
              <div className="inline-flex gap-1 text-zinc-600 items-center text-xs">
                <CommentIcon />
                <p>9</p>
              </div>
              <div className="inline-flex gap-1 text-zinc-600 items-center text-xs">
                <RepostIcon />
                <p>25</p>
              </div>
              <div className="inline-flex gap-1 text-zinc-600 items-center text-xs">
                <LikeIcon />
                <p>72</p>
              </div>
              <div className="inline-flex gap-1 text-zinc-600 items-center text-xs">
                <ChartIcon />
                <p>2K</p>
              </div>
              <div className="inline-flex gap-1 text-zinc-600 items-center text-xs">
                <BookmarkIcon />
              </div>
            </div></>
}

export default TweetIcons;