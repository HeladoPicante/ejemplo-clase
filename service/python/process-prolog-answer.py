import sys

keys = ["name","dni"]

read_data = lambda: str(sys.stdin.read()).strip().split("\n")
process_item = lambda text: str(text).strip(",").split(",")
process_data = lambda array,keys: [
	{
		f"{keys[key]}": f"{process_item(item)[key]}" for key in range(len(keys))
	}
	for item in array
]

print(
	process_data(
		read_data(),
		keys
	)
)