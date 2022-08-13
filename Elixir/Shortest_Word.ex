# Prompt: https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/train/elixir

# Answer:
defmodule Kata do
  def find_short(s) do
    s
    |> String.split(" ")
    |> Enum.map(&String.length(&1))
    |> Enum.min()
  end
end
