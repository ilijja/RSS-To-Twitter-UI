import { FaXTwitter } from "react-icons/fa6";
import BookmarkIcon from "@/assets/BookmarkIcon";
import ChartIcon from "@/assets/ChartIcon";
import CommentIcon from "@/assets/CommentIcon";
import { LikeIcon } from "@/assets/LikeIcon";
import RepostIcon from "@/assets/RepostIcon";
import Container from "./Container";
import { useContext, useState } from "react";
import EditPost from "./EditPost";
import UserProgressContext from "@/store/UserProgresContext";
import { getAuthToken } from "@/util/auth";
import { useSubmit } from "react-router-dom";

const TweetPost = ({ tweetContent }) => {
  const { setShowModal, setHideSheet, selectEmoji, setCurrentTweet } =
    useContext(UserProgressContext);

    const submit = useSubmit()

  const [postContent, setPostContent] = useState(content);

  const editPostHandler = () => {
    setHideSheet();
    setCurrentTweet(tweetContent);
    selectEmoji("");
    setShowModal(<EditPost />);
  };

  const handlePublishTweet = async () => {

    const formData = new FormData()
    formData.append('content', tweetContent)
    formData.append('intent', 'publishTweet')

    submit(formData, {method: 'POST'})
   
};


  const actionButtons = (
    <div className="inline-flex justify-end w-full">
      <div className="inline-flex  gap-2 justify-between w-fit">
        <button
          type="button"
          onClick={editPostHandler}
          className="inline-flex items-center text-zinc-50 gap-x-1.5  outline outline-md outline-zinc-800 rounded-md bg-zinc-950 px-3 py-1.5 text-sm font-medium"
        >
          Edit Post
        </button>
        <button
          type="button"
          onClick={() => handlePublishTweet(tweetContent)}
          className="inline-flex items-center text-zinc-950 gap-x-1.5 rounded-md  bg-zinc-50 px-3 py-1.5 text-sm font-medium"
        >
          Publish
          <FaXTwitter />
        </button>
      </div>
    </div>
  );

  return (
    <>
      <Container actionButtons={actionButtons}>
        <div className="inline-flex w-full h-full">
          <div className="flex  justify-middle align-middle h-full w-12">
            <div className="w-12 h-12 rounded-full bg-zinc-50"></div>
          </div>
          <div className="flex flex-col py-1 px-2 w-full">
            <div className=" inline-flex gap-1 ">
              <p className="text-sm text-zinc-50 font-semibold">
                Ilija Dimitrijevic
              </p>
              <p className="text-sm text-zinc-500 font-normal ">@ilijja</p>
            </div>

            <div className="pt-1">
              <p className="text-zinc-50 text-sm">{tweetContent}</p>
            </div>

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
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default TweetPost;

const content =
  "People were paying me from $3K to $10K to build their website. In some cases it took no more than 7 days to get it done. 🫣 Now that I’m not working with clients anymore, I can stop gatekeeping 😅 Here’s some tools to save you lots of money/time:";
