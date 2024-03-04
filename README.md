


`npm install`
`npm run build`

open dist/index.html in a browser



## Deployment

1. Switch to `dist` branch
2. `git merge --ff main` (or other sensible merge)
3. `rm docs/*.js`
4. `npm run prod`
5. `git commit -m`
6. push `dist` branch.

## Manual Creation of URI Fragment

### Convert URI to json
`echo 'INSERT BASE64 HERE' | base64 -d | jq > sample_graph_inputs.json`

### Convert json back to URI
`jq -c . sample_graph_inputs.json | base64 -w 0; echo`
