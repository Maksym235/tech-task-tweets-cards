import { SelectCompon } from "./Select.styled";

const options = [
  { value: "all", label: "Show all" },
  { value: "follow", label: "Follow" },
  { value: "followings", label: "Followings" },
];

export function SelectFollow({ onChange }) {
  const handleSelect = ({ value }) => {
    console.log(value);
    onChange(value);
  };
  return (
    <SelectCompon
      defaultValue={options[0]}
      options={options}
      onChange={handleSelect}
    />
  );
}
