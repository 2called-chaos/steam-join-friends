# steam-join-friends
Join friends programmatically (AHK, TouchPortal, etc)

## How to use

1. Have [node](https://nodejs.org/en/download/) installed
2. [Download a zip copy](https://github.com/2called-chaos/steam-join-friends/archive/refs/heads/master.zip) of this project and unzip it.
3. Copy the `config.template.js` as `config.js` and adjust the 2-3 values
4. Read important notes further down below

### AHK (hotstring in this case)

```ahk
:Zb0*?:joinlump::
  Run, "C:\Users\chaos\Documents\Touch Portal\steam-join-friends\join.bat" "76561197000000000", "C:\Users\chaos\Documents\Touch Portal\steam-join-friends"
  return
```

Note: a script may [auto-elevate](https://www.autohotkey.com/docs/commands/Run.htm#RunAs), you can check process elevation in the task manager (you might need to show the "Elevated" column first). This is important, see further down below.

### TouchPortal

[![TouchPortal_Button](https://i.imgur.com/kHSWzN3.png)](https://i.imgur.com/kHSWzN3.png)

## Important!

* Steam must be running! This script connects to a websocket server Steam creates for use with the web chat.
* If your script invocation is elevated (aka run as admin) Steam **MUST** also be running elevated
* If your script invocation is NOT elevated Steam **MUST ALSO NOT** be elevated

Since I need my AHK to run elevated I just start everything elevated. This means I cannot double click the batch anymore but that is fine by me. To do the same right click the exe files (not shortcuts) of every process involved, for me the following 3, and check the "Run this program as an administrator" box under Properties > Compatibility.
  * `C:\Program Files\AutoHotkey\AutoHotkeyU64.exe`
  * `C:\Program Files (x86)\Touch Portal\TouchPortal.exe`
  * `C:\Program Files (x86)\Steam\steam.exe`  
    [![TouchPortal_Button](https://i.imgur.com/zlPRAxg.png)](https://i.imgur.com/zlPRAxg.png)


## Legal

This project is licensed under the MIT license.
