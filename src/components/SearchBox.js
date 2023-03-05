export const SearchBox = ({ value, onChange }) => {
  return (
    <div>
      <input
        text="text"
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    </div>
  );
};
