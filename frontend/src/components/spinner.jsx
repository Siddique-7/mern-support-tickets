function Spinner() {
  return (
    <div className="fixed inset-0 bg-black/50 z-[5000] flex justify-center items-center">
      <div className="w-16 h-16 border-8 border-t-black border-r-transparent border-b-gray-500 border-l-transparent rounded-full animate-spin"></div>
    </div>
  );
}

export default Spinner;
