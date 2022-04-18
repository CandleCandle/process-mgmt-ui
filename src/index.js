import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';


class MainDocument extends React.Component {
	render() {
		return (
			<table><tbody>
				<Links />
				<Content />
			</tbody></table>
		);
	}
}

class Links extends React.Component {
	render() {
		return (
			<tr>
				<td>
					<table><tbody>
						<tr>
							<td><a href="docs">docs</a></td>
							<td><a href="main">main</a></td>
						</tr>
					</tbody></table>
				</td>
			</tr>
		);
	}
}

class Content extends React.Component {
	render() {
		return (
			<tr>
				<td>
					<table><tbody>
						<tr>
							<td><Inputs /></td>
							<td><Outputs /></td>
						</tr>
					</tbody></table>
				</td>
			</tr>
		);
	}
}

class Inputs extends React.Component {
	render() {
		return (
			<table><tbody>
				<tr><td><DataSetSelection /></td></tr>
				<tr>
					<td>
						<table><tbody>
							<tr>
								<td><InputType /></td>
								<td><RenderMode /></td>
								<td><TryItButton /></td>
							</tr>
						</tbody></table>
					</td>
				</tr>
				<tr><td><InputText /></td></tr>
			</tbody></table>
		);
	}
}

class DataSetSelection extends React.Component {
	render() {
		return (
			<select>
				<option value="dsp" >DSP</option>
				<option value="vt" >VT</option>
			</select>
		);
	}
}

class InputType extends React.Component {
	render() {
		return (
			<select>
				<option value="json" >JSON</option>
				<option value="toml" >TOML</option>
			</select>
		);
	}
}

class RenderMode extends React.Component {
	render() {
		return (
			<select>
				<option value="factory-rate" >Factory Rate</option>
				<option value="manual-rate" >Manual Rate</option>
			</select>
		);
	}
}

class TryItButton extends React.Component {
	render() {
		return (
			<input type="button" value="try-it" />
		);
	}
}

class InputText extends React.Component {
	render() {
		return (
			<textarea cols="40"></textarea>
		);
	}
}

class Outputs extends React.Component {
	render() {
		return (
			<table><tbody>
				<tr><td><Messages /></td></tr>
				<tr><td><GraphRender /></td></tr>
			</tbody></table>
		);
	}
}

class Messages extends React.Component {
	render() {
		return (
			<textarea cols="40" defaultValue="messages come here" />
		);
	}
}

class GraphRender extends React.Component {
	render() {
		return (
			<img src="no image" />
		);
	}
}


createRoot(document.getElementById('root')).render(<MainDocument />);
