export type TypeSelectBox = 'sort' | 'show'
interface SelectBoxProps {
  options: { label: string; value: string }[]
  selectedValue: string
  type: TypeSelectBox
  getValue: (value: string, type: TypeSelectBox) => void
}
export default function SelectBox({ options, getValue, selectedValue, type }: SelectBoxProps) {
  return (
    <select
      className='border border-[#e1e1e1] p-[6px] text-secondary text-xs sm:text-sm'
      onChange={(e) => getValue(e.target.value, type)}
      value={selectedValue}
    >
      {options.map((option) => (
        <option key={`option-${option.value}`} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  )
}
