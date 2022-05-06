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
	constructor(props) {
		super(props);
		this.state = {
			text: "{}",
			text_format: "json",
			data_set: null,
			mode: null
		};
		this.state_tmp = {
			text: "{}",
			text_format: "json",
			data_set: null,
			mode: null
		};
	}

	update_text(text) {
		console.log("text update triggered", this, text);
		this.state_tmp.text = text.target.value;
	}

	update_text_format(text_format) {
		console.log("text format update triggered", this, text_format);
		this.state_tmp.text_format = text_format.target.value;
	}

	update_data_set(data_set) {
		console.log("data set update triggered", this, data_set);
		this.state_tmp.data_set = data_set.target.value;
	}

	update_mode(mode) {
		console.log("mode update triggered", this, mode);
		this.state_tmp.mode = mode.target.value;
	}

	trigger_render() {
		console.log("state update triggered", this);
		this.setState(this.state_tmp);
	}

	render() {
		return (
			<tr>
				<td>
					<table><tbody>
						<tr>
							<td>
								<Inputs
									update_text={this.update_text.bind(this)}
									update_text_format={this.update_text_format.bind(this)}
									update_data_set={this.update_data_set.bind(this)}
									update_mode={this.update_mode.bind(this)}
									trigger_render={this.trigger_render.bind(this)}
								/>
							</td>
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
				<tr><td><DataSetSelection update_data_set={this.props.update_data_set} /></td></tr>
				<tr>
					<td>
						<table><tbody>
							<tr>
								<td><InputType update_text_format={this.props.update_text_format} /></td>
								<td><RenderMode update_mode={this.props.update_mode} /></td>
								<td><TryItButton trigger_render={this.props.trigger_render} /></td>
							</tr>
						</tbody></table>
					</td>
				</tr>
				<tr><td><InputText update_text={this.props.update_text} initial_value={"{}"} /></td></tr>
			</tbody></table>
		);
	}
}

class DataSetSelection extends React.Component {
	render() {
		return (
			<select onChange={this.props.update_data_set} >
				<option value="dsp" >DSP</option>
				<option value="vt" >VT</option>
			</select>
		);
	}
}

class InputType extends React.Component {
	render() {
		return (
			<select onChange={this.props.update_text_format}>
				<option value="json" >JSON</option>
				<option disabled={true} value="toml" >TOML</option>
			</select>
		);
	}
}

class RenderMode extends React.Component {
	render() {
		return (
			<select onChange={this.props.update_mode}>
				<option value="factory-rate" >Factory Rate</option>
				<option value="manual-rate" >Manual Rate</option>
			</select>
		);
	}
}

class TryItButton extends React.Component {
	render() {
		return (
			<input type="button" value="try-it" onClick={this.props.trigger_render} />
		);
	}
}

class InputText extends React.Component {
	render() {
		return (
			<textarea cols="40" onChange={this.props.update_text}>{this.props.initial_value}</textarea>
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
