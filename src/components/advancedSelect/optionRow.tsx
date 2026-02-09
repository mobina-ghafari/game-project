import { Listbox } from "@headlessui/react";
import { SelectOption } from "./types";

type Props = {
  option: SelectOption;
};

export default function OptionRow({ option }: Props) {
  return (
    <Listbox.Option
      value={option}
      className={({ active }) =>
        `cursor-pointer px-3 py-2 text-sm flex items-center gap-2
         ${active ? "bg-stone-800" : ""}`
      }
    >
      {({ selected }) => (
        <>
          <input
            type="checkbox"
            checked={selected}
            readOnly
            className="accent-primary"
          />
          {option.label}
        </>
      )}
    </Listbox.Option>
  );
}
