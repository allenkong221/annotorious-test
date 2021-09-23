# Tolstoy initial tests

## How to setup the project

1 - Open a command line in `/dist/`

2 - Run `python -m http.server`

3 - Navigate to `localhost:8000` on your browser (maybe it's another port if that one's being used)

On the left side of the screen I added a `Send to API` button, which should make a POST request to `http://localhost:8000/test` with the following body:

```
{
  file: fileHere, // Not too sure which format is being sent here - I'm not familiar with sending files to API, so I just tried to follow a guide, but this might need adjustments, but it seems to be a 'Form Data' type
  annotations: [{name: 'box1', top: 10, left: 10, width: 10, height: 10}] // This is a stringified array of 'annotation' objects (which contain the info of each annotation)
}
```
