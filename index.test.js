const index = require("./index")

test("Simple test", () =>
	{

		expect(true);
		app.close();
	});

test("Bad test", () =>
	{

		expect(false);
		app.close();
	});
