import os
rm_file = "rm.txt"
result_dir = "results"
with open(rm_file, "r") as file:
    filenames = file.readlines()
for filename in filenames:
    filename = filename.strip()
    xml_file = os.path.join(result_dir, filename + ".xml")
    if os.path.exists(xml_file):
        os.remove(xml_file)
        print(f"Deleted {xml_file}")
    else:
        print(f"XML file {xml_file} does not exist.")
