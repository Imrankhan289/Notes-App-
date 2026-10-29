import { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    const copyTask = [...task];
    copyTask.push({ title, details });
    setTask(copyTask);

    setTitle("");
    setDetails("");
  };

  const deleteNote = (idx) => {
    const copyTask = [...task];
    copyTask.splice(idx, 1);
    setTask(copyTask);
  };

  return (
    <div className=" h-screen bg-black text-white  lg:flex   ">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="  lg:w-1/2   flex flex-col p-10 gap-4  "
      >
        <h1 className="text-4xl font-bold">Add Notes</h1>

        {/* MY INPUT */}
        <input
          className="border-2 w-full p-4 rounded outline-none text-lg"
          type="text"
          placeholder="Enter Notes Heading"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />

        {/* MY DETAILS */}
        <textarea
          className="border-2  rounded w-full p-4 h-30 outline-none text-lg  "
          placeholder="Write Details Here....."
          value={details}
          onChange={(e) => {
            setDetails(e.target.value);
          }}
        ></textarea>
        <button className=" active:scale-98 border w-full outline-none p-2 bg-white text-black text-2xl font-bold cursor-pointer rounded ">
          Add Note
        </button>
      </form>
      <div className=" bg-black lg:w-1/2 overflow-auto px-5 py-10 lg:border-l-2   ">
        <h1 className="text-4xl font-bold ml-5 ">Recent Notes</h1>
        <div className="flex  flex-wrap items-center  gap-5 mt-5  ">
          {task.map((elem, idx) => {
            return (
              <div
                key={idx}
                className="  w-50 h-65 py-10 px-4 flex flex-col justify-between   text-black bg-[url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUV5tVmg0bHJmbRz7WJS4boFuZMIEPRZRbMq3qh6JuTg&s=10)] rounded-2xl  "
              >
                <h3 className=" font-bold text-lg leading-tight pb-3  ">
                  {elem.title}
                </h3>
                <p className="  font-semibold text-medium text-gray-500  leading-tight ">
                  {elem.details}
                </p>
                <div className="mt-5">
                  <button
                    onClick={() => {
                      deleteNote(idx);
                    }}
                    className="bg-red-500 w-full font-bold cursor-pointer active:scale-98  text-white rounded p-1 "
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
