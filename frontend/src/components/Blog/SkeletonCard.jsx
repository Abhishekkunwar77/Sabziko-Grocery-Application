const SkeletonCard = () => {
  return (
    <div className="animate-pulse bg-white rounded-xl shadow h-full flex flex-col border border-gray-200">
      <div className="h-48 bg-gray-300 rounded-t-xl" />
      <div className="p-4 flex flex-col space-y-3 flex-1">
        <div className="h-5 bg-gray-300 rounded w-3/4" />
        <div className="h-4 bg-gray-200 rounded w-full" />
        <div className="h-4 bg-gray-200 rounded w-1/2" />
        <div className="flex justify-between items-center mt-auto pt-4">
          <div className="h-8 w-20 bg-gray-300 rounded" />
          <div className="h-4 w-16 bg-gray-200 rounded" />
        </div>
      </div>
    </div>
  );
};

export default SkeletonCard;
