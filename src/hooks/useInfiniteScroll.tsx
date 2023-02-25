import React from 'react';

const useInfiniteScroll = (totalPages: number) => {
  const [page, setPage] = React.useState<number>(1);

  const observer = React.useRef<IntersectionObserver | null>(null);

  const lastElementRef = React.useCallback(
    (node: any) => {
      if (page >= totalPages) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setPage((prev) => prev + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [page, totalPages]
  );

  return { lastElementRef, page };
};

export default useInfiniteScroll;
