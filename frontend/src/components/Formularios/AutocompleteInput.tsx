import { useEffect, useState } from "react"

interface AutoCompleteInputProps {
  data: any[]
  onSelect: (value: string) => void
  required?: boolean
  value?: string
}

export default function AutoCompleteInput({ data, onSelect, required, value}: AutoCompleteInputProps) {
  const [inputValue, setInputValue] = useState(value)
  const [suggestions, setSuggestions] = useState<any[]>([])

  const [nome, setNome] = useState("")

  useEffect(() => {
    if(value != undefined && value.length >= 3) {
      //setInputValue(value)
      
      const filtered = data.filter(item =>
        item.nome.toLowerCase().includes(value.toLowerCase())
      )

      setSuggestions(filtered)
    }
  }, [value])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setInputValue(value)

    if (value.length >= 3) {
      const filtered = data.filter(item =>
        item.nome.toLowerCase().includes(value.toLowerCase())
      )
      setSuggestions(filtered)
    } else {
      setSuggestions([])
    }
  }

  const handleSelect = (item: any) => {
    setInputValue(item.nome)
    setSuggestions([])
    onSelect(item)
  }

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        className="border p-1 w-full"
        placeholder="Digite o nome..."
        required={required}
      />
      {suggestions.length > 0 && (
        <ul className="z-10 w-full bg-white border rounded shadow mt-1 max-h-48 overflow-y-auto">
          {suggestions.map((suggestion) => (
            <li
              key={suggestion.id}
              onClick={() => handleSelect(suggestion)}
              className="p-2 hover:bg-gray-200 cursor-pointer"
            >
              {suggestion.nome}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
