"use strict";

const exec = require("child_process").execSync;

module.exports = function(values) {
	return {
		questions: [
			{
				type: "input",
				name: "username",
				message: "GitHub User or Org:",
				default() {
					return exec("git config --get user.username").toString().trim();
				}
			},		
			{
				type: "input",
				name: "fullName",
				message: "Your Name:",
				default() {
					return exec("get config --get user.name").toString().trim();
				}
			},		
			{
				type: "input",
				name: "projectDescription",
				message: "Service Description:"
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
