import LoadingGif from "./components/gifs/loading/page";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="m-auto flex flex-col justify-center items-center h-screen">
      <LoadingGif />
    </div>
  );
}
