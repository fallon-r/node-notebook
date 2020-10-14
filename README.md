# node-notebook
This is a fairly simple Node Based note taking CLI. The idea was from a Udemy course run by [Andrew Mead](https://mead.io/). It uses [Yargs](https://www.npmjs.com/package/yargs), and [chalk](https://www.npmjs.com/package/chalk) to take `argv` commands and push notes to a JSON.

The commands are:
- `list` which takes no arguments and lists the titles of all available notes. 
- `add` which is used to add notes. It checks if there is a notes.json and then ensures that there is not already a note with an identical title. It requires a `--title="string"` and `--body="string"`.
- `remove` which is used to remove notes. It requires a `--title="string"` in order to find the note to remove. It also ensures that the note exists.
- `read` which is used to read the notes. It requires the user to identify a `--title="string"`. It then provides the note title and body. [^1]
[^1]: In all of the above examples `string` is a placeholder for an actual string. This is to indicate that numbers will not work.


All in all, this was a good project to touch up on some NodeJS skills like using npm packages and incorporate some ES6 functions into a simple CLI. I wanted to incorporate some more readability in the comments and it was a good exercise. 
