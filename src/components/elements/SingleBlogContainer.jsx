import Container from "./Container";

const SingleBlogContainer = () => {
    return <Container>
        <div className="flex flex-col align-middle justify-center">
            <div className="flex flex-row justify-center">
            <h1 className="text-white">Paste your blog URL here</h1>
            </div>

            <div className="flex flex-col gap-3 mt-3">
              <input
                type="text"
                name="text"
                id="text"
                className="block w-full rounded-md border-0 px-3 py-1.5 outline-none text-gray-900 shadow-sm ring-1 ring-gray-200 placeholder:text-gray-400 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 disabled:ring-gray-200 sm:text-sm sm:leading-6"
                placeholder="www.example.com/feed"
              />
              <button
                type="button"
                // onClick={addYourWebsitehHandler}
                className="inline-flex items-center justify-center gap-x-2 rounded-lg bg-zinc-700 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 disabled:opacity-50"
              >
                Confirm
              </button>
            </div>
        
        </div>
        
    </Container>;
}

export default SingleBlogContainer;