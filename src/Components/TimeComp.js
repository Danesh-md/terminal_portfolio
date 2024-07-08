const TimeComp = () => {
  const FullTime = function FullTime() {
    const time = new Date();
    return time.toLocaleTimeString();
  };
  return (
    <div>
      <div className="-translate-y-7 mr-3 text-white mb-3 text-xs tracking-wider">
        <h1 className="font-Poppins">{FullTime()}</h1>
      </div>
    </div>
  );
};

export default TimeComp;
