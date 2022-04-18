
https://reactjs.org/docs/thinking-in-react.html


# Step 1: Break the UI into a component heirichy

* Doc (`MainDocument`)
* * V `Links` (main, documentation)
* * V `Content`
* * * H `Inputs`
* * * * V `DataSetSelection`
* * * * * H `InputType`
* * * * * H `RenderModeSelection`
* * * * * H `TryIt` button
* * * * * V `InputContents` textarea (toml/json?)
* * * H `Outputs`
* * * * V `Messages` errors/console
* * * * V `GraphRender` png/graph

# Step 2: Build a static verison in react
"lots of typing, not much thinking"

# Step 3: Identify the complete minimal set of UI state
"lots of thinking, not much typing"

# Step 4: Identify where the state should live
"lots of thinking, not much typing"

# Step 5: Add inverse data flow
"lots of thinking, not much typing"
