import { useContext, useEffect, useRef, useState } from "react";
import UserProgressContext from "@/store/UserProgresContext";
import { FaTwitter, FaXTwitter } from "react-icons/fa6";
import { FaceSmileIcon, PhotoIcon } from "@heroicons/react/24/outline";
import EmojiPicker from "./EmojiPicker";
import TextareaAutosize from "react-textarea-autosize";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import { Button } from "../ui/button";
import { useNavigation, useSubmit } from "react-router-dom";
import { Loader2 } from "lucide-react";
import { useToast } from "../ui/use-toast";

function handlePaste(e) {
  e.preventDefault();
  const text = e.clipboardData.getData("text/plain");
  document.execCommand("insertText", false, text);
}

const EditPost = () => {
  const { currentTweet, selectEmoji, currentEmoji, activeBlog, user } =
    useContext(UserProgressContext);

  const [text, setText] = useState(currentTweet);
  const textAreaRef = useRef(null);
  const [cursorPosition, setCursorPosition] = useState(0);
  const navigation = useNavigation();
  const submit = useSubmit();
  const {toast} = useToast()

  const isSubmitting = navigation.state === "submitting";

  const handleCursor = () => {
    const position = textAreaRef.current.selectionStart;
    setCursorPosition(position);
  };

  useEffect(() => {
    if (currentEmoji) {
      const newText =
        text.substring(0, cursorPosition) +
        currentEmoji.native +
        text.substring(cursorPosition);
      setText(newText);
      setTimeout(() => {
        textAreaRef.current.selectionStart = textAreaRef.current.selectionEnd =
          cursorPosition + currentEmoji.native.length;
      }, 0);
    }
  }, [currentEmoji]);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handlePublishTweet = async () => {
    if (!user.twitterUsername) {
      toast({
        title: "Error",
        description: "You must connect your X account frist.",
      });

      return;
    }

    const formData = new FormData();
    formData.append("content", text);
    formData.append("intent", "publishTweet");
    formData.append("blogId", activeBlog._id);

    submit(formData, { method: "POST" });
  };

  return (
    <>
      <div className="flex flex-col gap-7">
        <div className="flex w-full max-w-screen h-full ">
          <div className="flex justify-center items-center h-full w-12 flex-shrink-0">
            <div className="w-10 h-10 rounded-full bg-zinc-50">
              {user.twitterProfileImageUrl != null ? (
                <img
                  className="w-full h-full rounded-full object-cover"
                  src={user.twitterProfileImageUrl}
                  alt="User Profile"
                />
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="flex flex-col py-1 px-2 flex-grow">
            <div className="flex items-center gap-1">
              <p className="text-sm text-zinc-50 font-semibold">
                {user.twitterName ? user.twitterName : "John Doe"}
              </p>
              <p className="text-sm text-zinc-500 font-normal">
                {user.twitterUsername ? "@" + user.twitterUsername : "@jdoe"}
              </p>
            </div>

            <div className="pt-1 flex-1">
              <TextareaAutosize
                className="w-full resize-none rounded-md text-left bg-transparent text-sm shadow-sm text-zinc-50 focus-visible:outline-none disabled:cursor-not-allowed min-h-[3em] break-before-avoid"
                value={text}
                ref={textAreaRef}
                onChange={handleChange}
                onClick={handleCursor}
                onKeyUp={handleCursor}
                minRows={3}
                maxRows={16}
              />
              <div className="inline-flex justify-end w-full pt-3">
                <div className="inline-flex items-end w-fit gap-2">
                  <p className="text-zinc-500 text-sm cursor-default">
                    {text.length}/5000
                  </p>
                  <div>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FaceSmileIcon className="text-zinc-500 w-5 h-5 cursor-pointer" />
                      </PopoverTrigger>
                      <PopoverContent className="w-fit">
                        <div className="pt-8">
                          <Picker
                            data={data}
                            onEmojiSelect={(emoji) => selectEmoji(emoji)}
                            perLine={7}
                          />
                        </div>
                      </PopoverContent>
                    </Popover>
                  </div>

                  <PhotoIcon className="text-zinc-500 w-5 h-5 cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="inline-flex justify-end w-full">
          <div className="inline-flex  gap-2 justify-between w-fit">
            <Button
              onClick={handlePublishTweet}
              type="button"
              variant="secondary"
              size="sm"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Publishing
                </>
              ) : (
                <>
                  Publish on <FaXTwitter className="ml-1" />
                </>
              )}
            </Button>
          </div>
        </div>
      </div>

      <EmojiPicker />
    </>
  );
};

export default EditPost;
