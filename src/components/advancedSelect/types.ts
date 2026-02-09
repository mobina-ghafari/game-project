export type SelectOption = {
  id: string;
  label: string;
};

export type SelectGroup = {
  label: string;
  options: SelectOption[];
};

export type AdvancedSelectProps = {
  groups: SelectGroup[];
  value: SelectOption[];
  onChange: (value: SelectOption[]) => void;
  placeholder?: string;
  searchable?: boolean;
  selectAll?: boolean;
};
