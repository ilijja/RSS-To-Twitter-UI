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
import { Button } from "../ui/button";
import { useToast } from "../ui/use-toast";

const TweetPost = ({ tweetContent }) => {
  const { setShowModal,setHideSheet, selectEmoji, setCurrentTweet, user, activeBlog } =
    useContext(UserProgressContext);

  const submit = useSubmit();
  const { toast } = useToast();

  const editPostHandler = () => {
    setHideSheet();
    setCurrentTweet(tweetContent);
    selectEmoji("");
    setShowModal(<EditPost />);
  };

  const handlePublishTweet = async () => {

    if (!user.twitterUsername) {
      toast({
        title: "Error",
        description: "You must connect your X account frist.",
      });

      return;
    }

    try {
      const formData = new FormData();
      formData.append("content", tweetContent);
      formData.append("intent", "publishTweet");
      formData.append("blogId", activeBlog._id)

      await submit(formData, { method: "POST" });
    } finally {
      setHideSheet(); 
    }
  };

  const actionButtons = (
    <div className="inline-flex justify-end w-full">
      <div className="inline-flex  gap-2 justify-between w-fit">
        <Button
          type="button"
          onClick={editPostHandler}
          variant="outline"
          size="sm"
        >
          Edit Post
        </Button>

        <Button
          type="button"
          onClick={() => handlePublishTweet(tweetContent)}
          variant="secondary"
          size="sm"
        >
          Publish
          <FaXTwitter />
        </Button>
      </div>
    </div>
  );

  return (
    <>
      <Container actionButtons={actionButtons}>
        <div className="inline-flex w-full h-full">
          <div className="flex  justify-middle align-middle h-full w-12">
            <div className="w-10 h-10 rounded-full bg-zinc-50">
            {user.twitterProfileImageUrl!=null ? <img className="w-full h-full rounded-full object-cover" src={user.twitterProfileImageUrl} alt="User Profile" />: ""}
            </div>
          </div>
          <div className="flex flex-col py-1 px-2 w-full">
            <div className=" inline-flex gap-1 ">
              <p className="text-sm text-zinc-50 font-semibold">
                {user.twitterName ? user.twitterName : 'John Doe'}
              </p>
              <p className="text-sm text-zinc-500 font-normal ">{user.twitterUsername? '@' + user.twitterUsername : '@jdoe'}</p>
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
