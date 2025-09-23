const FooterSummary = ({
  totalWorkspaces,
  currentCount,
  currentPage,
  totalPages,
}: {
  currentPage: number;
  totalPages: number;
  currentCount: number;
  totalWorkspaces: number;
}) => {
  return (
    <div className='text-center text-sm text-gray-500 py-2'>
      Showing {currentCount} of {totalWorkspaces} workspaces — Page{' '}
      {currentPage} of {totalPages}
    </div>
  );
};

export default FooterSummary;
