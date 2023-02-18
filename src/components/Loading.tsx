interface LoadingProps {
  size: string;
  minH: string;
}

const Loading = ({ size, minH }: LoadingProps) => {
  return (
    <div style={{ minHeight: `${minH}vh` }} className="flex items-center">
      <div
        className={`h-${size} w-${size}  border-t-transparent border-solid animate-spin rounded-full border-green border-8 mx-auto`}
      ></div>
    </div>
  );
};

export default Loading;
