"use strict";

const exec = require("child_process").execSync;

module.exports = function(values) {
	return {
		questions: [
			{
				type: "input",
				name: "username",
				message: "Github username:",
				default() {
					return exec('git config --get user.name').toString().trim();
				}
			},		
			{
				type: "input",
				name: "fullName",
				message: "Your name:",
				default: "Ice Services"
			},		
			{
				type: "input",
				name: "projectDescription",
				message: "Project description:"
			},
			{
				type: "input",
				name: "serviceName",
				message: "Service name:",
				default() {
					return values.projectName.replace("moleculer-", "");
				}
			}
		],

		completeMessage: `
To get started:

	cd {{projectName}}
	npm run dev

		`
	};
};
