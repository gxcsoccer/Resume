var fs = require("fs"),
	mustache = require("mustache"),
	markdown = require("markdown").markdown,
	template = fs.readFileSync("./index.mustache", {
		encoding: "utf-8"
	}),
	body = fs.readFileSync("./resume.md", {
		encoding: "utf-8"
	});

var output = mustache.render(template, {
	body: markdown.toHTML(body)
});

fs.writeFileSync("./index.html", output);