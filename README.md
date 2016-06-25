#Dot Firefox

Dot file initialization for Firefox

- Install jpm from npm
- Clone the project
- Run `jpm xpi` to get the .xpi file
- Create `~/dotfirefox` and run `npm init`
- Add `index.js` in `~/dotfirefox` and start hacking

# Note

Add this to your shell init file to auto clear cache. Logout and login again if necessary

```
export MOZ_PURGE_CACHES=true
launchctl setenv MOZ_PURGE_CACHES true
```
