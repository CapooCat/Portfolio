import useFetch from "../../hooks/Fetch";
import Loading from "../UI/Loading";
import college from "../../assets/images/college.jpg";

const options = {
  url: "https://official-joke-api.appspot.com/random_joke",
  method: "GET",
};

function StoryDetail({ fetchId }) {
  const { isLoading, error, data } = useFetch(options, {
    key: `api-${fetchId}`,
  });

  if (error) {
    throw new Error("error", { status: 404 });
  }

  return (
    <div
      className="grid min-h-[400px] w-[800px] max-w-[90vw] grid-cols-1 content-start gap-5 font-light"
      id="about"
    >
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <img
            src={college}
            className="h-full w-full object-cover brightness-90"
          />
          <div className="content p-5">
            <span className="block">{data.setup}</span>
            <span className="block">{data.punchline}</span>
          </div>
        </>
      )}
    </div>
  );
}

export default StoryDetail;
