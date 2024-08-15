export const CustomTextArea = ({
  placeholder,
  rows,
  label,
  white,
  commentText,
  setcommentText,
}) => {
  return (
    <div>
      <label className=" text-[12px] select-none text-primary-space">
        {label}
      </label>
      <textarea
        onChange={(e) => {
          e.preventDefault();
          setcommentText(e.target.value);
        }}
        className={` ${
          white ? "bg-white" : "bg-[rgba(239,241,243,1)]"
        }  w-full  text-primary-space items-center border-transparent bg-[rgba(239,241,243,1)]   outline-none p-[9px] text-[14px]  rounded-[4px] focus:shadow-md focus:border-primary-btn-blue transition-all bg-[#ecf0f1]`}
        placeholder={placeholder}
        rows={rows}
      ></textarea>
    </div>
  );
};
