const FooterSummary = ({
  currentPage,
  totalPages,
  currentCount,
}: {
  currentPage: number;
  totalPages: number;
  currentCount: number;
}) => {
  return (
    <div className='text-center text-sm text-gray-500 py-2'>
      Showing {currentCount} workspaces — Page {currentPage} of {totalPages}
    </div>
  );
};

export default FooterSummary;
