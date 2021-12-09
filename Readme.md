# PrivacyWatch

## Setup

Jailbreak an iPhone and install the Frida app from Cydia. Docs on how to do this are here - https://frida.re/docs/ios/.

Install frida and mitmproxy on your system. `pip3 install -U frida frida-tools mitmproxy` should do the trick.

## Usage

1. `python3 ApiFilter.py <App ID of app to analyze>`
2. Set `disallowed_apis` in `apiHook.js` to the output of the previous script.
3. Run `mitmproxy`
4. In a separate command line, run `frida -U -l .\apiHook.js --runtime v8 --no-pause --file <bundle ID of app to analyze> > output.txt`
5. Interact with the application
6. Type `quit` in the frida console and hit enter. Ctrl + C may also work
7. Go to mitmproxy and press `w`. Type `traffic.dmp` and hit enter. Then press `q` then `y`
8. Run `python3 analyze.py output.txt traffic.dmp`

~Jack