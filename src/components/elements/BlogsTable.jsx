import { useContext } from "react";
import UserProgressContext from "@/store/UserProgresContext";
import { SparklesIcon } from "@heroicons/react/24/outline";
import { NavLink, useSubmit } from "react-router-dom";

const BlogsTable = () => {
  const { activeFeed, setShowSheet } = useContext(UserProgressContext);
  const submit = useSubmit()

  const postXHandler = (blog) => {
    const formData = new FormData()
    formData.append("id", blog._id)
    formData.append("intent", "publish")
    submit(formData, {method: "POST", action: `blogs/${blog._id}`})
    setShowSheet(blog);
  };

  return (
    <div className="rounded-md border border-1 border-zinc-700 overflow-hidden">
      <div className="relative w-full overflow-auto">
        <table className="min-w-full divide-y divide-zinc-700">
          <thead className="bg-zinc-900">
            <tr>
              <th
                scope="col"
                className="h-10 w-2/3 text-zinc-400 text-sm px-3 text-left align-middle font-medium"
              >
                Blog title
              </th>
              <th
                scope="col"
                className="h-10 w-1/3 text-zinc-400 text-sm px-3 text-left align-middle font-medium"
              >
                Status
              </th>
              <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-700">
            {activeFeed?.blogs.map((blog) => (
              <tr key={blog._id} className="hover:bg-zinc-900/95">
                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-zinc-50">
                  <a href={blog.URL} target="_blank" rel="noopener noreferrer">
                    {blog.title}
                  </a>
                </td>
                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-zinc-50">
                  <span className="inline-flex items-center gap-x-1.5 rounded-full bg-zinc-800 px-3 py-0.5 text-xs font-medium">
                    Published
                  </span>
                </td>
                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-zinc-50">
                  <button
                    type="button"
                    onClick={blog.generated? () => setShowSheet(blog) : () => postXHandler(blog)}
                    className={`inline-flex items-center align-middle  gap-x-1 w-full rounded-md outline  px-3 py-1 text-sm font-medium ${blog.generated? 'bg-zinc-950 text-zinc-50 outline outline-md outline-zinc-800 ' :'bg-zinc-50 outline-zinc-800 text-zinc-950 outline-1'}`}
                  >
                    {!blog.generated && <SparklesIcon className="h-3 w-3 fill-zinc-950" />}
                    {blog.generated? 'Show Posts' : 'Generate'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BlogsTable;
