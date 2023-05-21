


`npm install`
`npm run build`

open dist/index.html in a browser



## Deployment

1. Switch to `dist` branch
2. `rm docs/*.js`
3. `git merge --ff main` (or other sensible merge)
4. `npm run prod`
5. push `dist` branch.
