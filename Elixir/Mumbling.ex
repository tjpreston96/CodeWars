# Prompt:

# Answer:

defmodule Mumbling do
  def accum(s) do
    String.split(s, "", trim: true)
    |> Stream.with_index()
    |> Enum.map_join("-", fn {c, i} -> (c <> String.duplicate(c, i)) |> String.capitalize() end)
  end
end

# defmodule Mumbling do
#   def accum(s) do
#     s
#     |> String.split("", trim: true)
#     |> Stream.with_index()
#     |> Enum.map(fn {c, i} -> String.capitalize(c <> String.duplicate(c, i)) end)
#     |> Enum.join("-")
#   end
# end
