import { SelectGroup, SelectOption } from "./types";

export const filterGroups = (
  groups: SelectGroup[],
  search: string
) => {
  if (!search) return groups;

  return groups
    .map(g => ({
      ...g,
      options: g.options.filter(o =>
        o.label.toLowerCase().includes(search.toLowerCase())
      ),
    }))
    .filter(g => g.options.length > 0);
};

export const flattenOptions = (groups: SelectGroup[]) =>
  groups.flatMap(g => g.options);

export const isAllSelected = (
  all: SelectOption[],
  selected: SelectOption[]
) =>
  all.length > 0 &&
  all.every(o => selected.some(s => s.id === o.id));
