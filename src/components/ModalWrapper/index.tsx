export default function ModalWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='fixed inset-0 bg-noble-black-900 opacity-95 flex justify-center items-center font-plus z-50 h-screen'>
      <div className='bg-noble-black-700 rounded-lg shadow-xl w-[90%] max-w-xl text-noble-black-100 p-6 max-h-[95vh] overflow-y-auto custom-scrollbar'>
        {children}
      </div>
    </div>
  );
}
