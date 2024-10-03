interface FundDocumentAdminProps {}

const FundDocumentAdmin: React.FC<FundDocumentAdminProps> = ({}) => {
  return (
    <div className="flex flex-col gap-6 md:gap-8 lg:gap-16">
      <h2 className={`subtitleText text-neutral-mid text-left`}>
        Fund Documents
      </h2>
      <p className="bodyText text-neutral-mid">Upload the monthly factsheets</p>
      <div className="flex gap-4 md:gap-8">
        <div className="bg-[#fbfbfd] p-4 border border-neutral-lighter rounded shadow-sm flex flex-col flex-grow gap-4">
          <p className="bodyText text-neutral-mid">Value Equity Fund</p>
          <input
            type="file"
            className="switzer-r border border-neutral-lighter rounded-lg text-sm w-fit "
          />
        </div>
        <div className="bg-[#fbfbfd] p-4 border border-neutral-lighter rounded shadow-sm flex flex-col flex-grow gap-4">
          <p className="bodyText text-neutral-mid">Money Market Fund</p>
          <input
            type="file"
            className="switzer-r border border-neutral-lighter rounded-lg text-sm w-fit "
          />
        </div>
        <div className="bg-[#fbfbfd] p-4 border border-neutral-lighter rounded shadow-sm flex flex-col flex-grow gap-4">
          <p className="bodyText text-neutral-mid">Short Term Gilt Fund</p>
          <input
            type="file"
            className="switzer-r border border-neutral-lighter rounded-lg text-sm w-fit "
          />
        </div>
      </div>
    </div>
  );
};

export default FundDocumentAdmin;
