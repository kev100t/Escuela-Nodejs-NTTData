import { Injectable } from "@nestjs/common";
import { readFileSync } from "fs";
import { launch } from "puppeteer"; //TODO esto funciona es en local
import { join } from "path";

@Injectable()
export class NotLambdaService {
	private async getPdfFromPuppeter(request): Promise<Buffer> {
		const browser = await launch({
			headless: true,
			userDataDir: "/dev/null",
		});

		const dirTemplate = join(
			`${__dirname}`,
			"..",
			"template",
			"proposal-business.html"
		);
		const html = readFileSync(dirTemplate, "utf-8");

		let parseTemplate = html.replace(
			"{{senderCompany}}",
			request.senderCompany
		);
		parseTemplate = parseTemplate.replace(
			"{{senderSlogan}}",
			request.senderSlogan
		);
		parseTemplate = parseTemplate.replace(
			"{{clientCompany}}",
			request.clientCompany
		);
		parseTemplate = parseTemplate.replace("{{clientName}}", request.clientName);
		parseTemplate = parseTemplate.replace(
			"{{proposalShortDescription}}",
			request.proposalShortDescription
		);
		parseTemplate = parseTemplate.replace(
			"{{proposalNumber}}",
			request.proposalNumber
		);
		parseTemplate = parseTemplate.replace(
			"{{proposalDate}}",
			request.proposalDate
		);
		parseTemplate = parseTemplate.replace(
			"{{senderLocation}}",
			request.senderLocation
		);
		parseTemplate = parseTemplate.replace(
			"{{proposalNumber}}",
			request.proposalNumber
		);
		parseTemplate = parseTemplate.replace(
			"{{proposalDate}}",
			request.proposalDate
		);
		parseTemplate = parseTemplate.replace(
			"{{senderLocation}}",
			request.senderLocation
		);
		parseTemplate = parseTemplate.replace(
			"{{proposalIntroduction}}",
			request.proposalIntroduction
		);
		parseTemplate = parseTemplate.replace(
			"{{projectScope}}",
			request.projectScope
		);

		const [serviceType, services] = request.servicesList;

		let tableHeader = "";

		if (serviceType.type === "quantity") {
			tableHeader = "<th>Quantity</th><th>Unit Price</th>";
		} else {
			tableHeader = "<th>Hours</th><th>Cost per Hour</th>";
		}

		let tableData = "";

		for (const service of services.data) {
			tableData =
				tableData +
				"<tr><td>{{service}}</td><td>{{hours}}</td><td>{{price}}</td><td>{{total}}</td></tr>";
			tableData = tableData.replace("{{service}}", service.service);
			tableData = tableData.replace("{{hours}}", service.hours);
			tableData = tableData.replace("{{price}}", service.price);
			tableData = tableData.replace("{{total}}", service.total);
		}

		parseTemplate = parseTemplate.replace("{{tableHeader}}", tableHeader);
		parseTemplate = parseTemplate.replace("{{tableData}}", tableData);
		parseTemplate = parseTemplate.replace(
			"{{aditionalInformation}}",
			request.aditionalInformation
		);
		parseTemplate = parseTemplate.replace("{{senderName}}", request.senderName);
		parseTemplate = parseTemplate.replace("{{senderSite}}", request.senderSite);
		parseTemplate = parseTemplate.replace(
			"{{senderEmail}}",
			request.senderEmail
		);
		parseTemplate = parseTemplate.replace("{{senderTel}}", request.senderTel);

		const page = await browser.newPage();
		await page.setContent(parseTemplate, {
			waitUntil: "networkidle2",
		});
		const buffer = await page.pdf({
			format: "A4",
			landscape: false,
		});
		return buffer;
	}

	/**
	 * Funcion crear PDF sin lambda
	 * @param user
	 */
	public async buildPdf(reques): Promise<string> {
		const buffer = await this.getPdfFromPuppeter(reques);

		return buffer.toString("base64");
	}
}
