import { Listbox } from "@headlessui/react";
import { useMemo, useState } from "react";
import { List } from "react-window";
import { AdvancedSelectProps, SelectOption } from "./types";
import { filterGroups, flattenOptions, isAllSelected } from "./utils";
import OptionRow from "./optionRow";

type ListItem =
  | { type: "group"; label: string }
  | { type: "option"; option: SelectOption }
  | { type: "empty" };

export default function AdvancedSelect({
  groups,
  value,
  onChange,
  placeholder = "Select items",
  searchable = true,
  selectAll = true,
}: AdvancedSelectProps) {
  const [search, setSearch] = useState("");

  const filteredGroups = useMemo(
    () => filterGroups(groups, search),
    [groups, search],
  );

  const allOptions = useMemo(
    () => flattenOptions(filteredGroups),
    [filteredGroups],
  );

  const allSelected = isAllSelected(allOptions, value);

  const listItems = useMemo<ListItem[]>(() => {
    const items: ListItem[] = [];
    filteredGroups.forEach((group) => {
      items.push({ type: "group", label: group.label });
      group.options.forEach((option) => {
        items.push({ type: "option", option });
      });
    });
    return items.length === 0 ? [{ type: "empty" }] : items;
  }, [filteredGroups]);

  return (
    <Listbox value={value} onChange={onChange} multiple>
      <div className="relative w-full">
        {/* Button */}
        <Listbox.Button className="w-full rounded border border-stone-800 bg-card text-text-white px-3 py-2 text-left text-sm flex items-center justify-between gap-3">
          <span>
            {value.length === 0 ? placeholder : `${value.length} selected`}
          </span>
          <span className="text-xs text-text-muted">
            {allSelected ? "All selected" : "Select"}
          </span>
        </Listbox.Button>

        {/* Options */}
        <Listbox.Options className="absolute z-50 mt-1 w-full rounded border border-stone-800 bg-card shadow-lg text-text-muted">
          {/* Search */}
          {searchable && (
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search..."
              className="w-full p-2 text-sm bg-text-muted text-background outline-none"
            />
          )}

          {/* Select all */}
          {selectAll && (
            <div className="flex items-center justify-between px-2 py-1 text-xs">
              <button
                onClick={() => onChange(allSelected ? [] : allOptions)}
                className="text-primary my-2"
                disabled={allOptions.length === 0}
              >
                {allSelected ? "Clear All" : "Select All"}
              </button>
              <button onClick={() => onChange([])} className="text-red-400">
                Clear
              </button>
            </div>
          )}

          {/* Virtualized list */}
          <List
            rowCount={listItems.length}
            rowHeight={(index) => {
              const item = listItems[index];
              if (item.type === "group") return 28;
              if (item.type === "empty") return 40;
              return 36;
            }}
            rowProps={{}}
            style={{ height: 240, width: "100%" }}
            rowComponent={({ index, style }) => (
              <div style={style}>
                {listItems[index].type === "group" && (
                  <div className="px-3 py-1 text-xs uppercase tracking-wide text-text-muted bg-zinc-900">
                    {listItems[index].label}
                  </div>
                )}
                {listItems[index].type === "option" && (
                  <OptionRow option={listItems[index].option} />
                )}
                {listItems[index].type === "empty" && (
                  <div className="px-3 py-2 text-sm text-text-muted">
                    No results
                  </div>
                )}
              </div>
            )}
            overscanCount={6}
          />
        </Listbox.Options>
      </div>
    </Listbox>
  );
}
