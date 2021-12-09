"""
Author: Jack McDowell (jnm3ecm)
Analyzes a mitmproxy dump file for mock data from the
frida script.
"""

import sys
import re
from mitmproxy import io, http
from mitmproxy.exceptions import FlowReadException

assert(len(sys.argv) == 3)

regexes = {}
access_types = set()
with open(sys.argv[1], "r", encoding="UTF-16") as frida_log:
    content = frida_log.read().split("\n")
    for line in content:
        if line.startswith("Application requested "):
            access_types.add(line[22:])
        elif line.startswith("Mock data for "):
            idx = line.index(" ", 14)
            t = line[14:idx - 1]
            r = line[idx + 1:]
            regexes[re.compile(r)] = t

print("App accessed: " + ", ".join(access_types))

with open(sys.argv[2], "rb") as logfile:
    freader = io.FlowReader(logfile)
    try:
        for f in freader.stream():
            if isinstance(f, http.HTTPFlow):
                reqdata = str(f.request.data)
                respdata = str(f.response.data)
                data = reqdata + respdata
                unhexed_data = data.replace("\\x", "")
                for r in regexes.keys():
                    m = re.search(r, data)
                    n = re.search(r, unhexed_data)
                    if None != m:
                        print(str(f.request.host) + " collected " + regexes[r] + ": " + m.string[m.start():m.end()])
                    elif None != n:
                        print(str(f.request.host) + " collected " + regexes[r] + ": " + n.string[n.start():n.end()])
    except FlowReadException as e:
        print(f"Flow file corrupted: {e}")
