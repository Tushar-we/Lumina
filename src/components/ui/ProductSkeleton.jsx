import React from 'react';

const ProductSkeleton = () => {
  return (
    <div className="glass-card flex flex-col h-full overflow-hidden animate-pulse">
      <div className="aspect-[4/5] bg-gray-200 dark:bg-gray-800 w-full"></div>
      <div className="p-5 flex flex-col flex-grow gap-3">
        <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-1/4"></div>
        <div className="h-6 bg-gray-200 dark:bg-gray-800 rounded w-3/4"></div>
        <div className="h-6 bg-gray-200 dark:bg-gray-800 rounded w-1/2"></div>
        <div className="mt-auto flex items-center justify-between pt-4">
          <div className="h-6 bg-gray-200 dark:bg-gray-800 rounded w-1/3"></div>
          <div className="h-10 w-10 bg-gray-200 dark:bg-gray-800 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductSkeleton;
