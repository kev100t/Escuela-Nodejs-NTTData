import chromium from "chrome-aws-lambda";
import { Injectable } from "@nestjs/common";
import { join } from "path";
import { readFileSync } from "fs";

/**
 * Esto es el servicio para produccion
 */
@Injectable()
export class LambdaService {
	private async getPdfFromPuppeter(request): Promise<Buffer> {
		const puppeteer = chromium.puppeteer;

		const browser = await puppeteer.launch({
			headless: true,
			args: chromium.args,
			defaultViewport: chromium.defaultViewport,
			executablePath: await chromium.executablePath,
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
			waitUntil: "load",
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
	public async buildPdf(request): Promise<string> {
		const buffer = await this.getPdfFromPuppeter(request);
		return buffer.toString("base64");
	}
}
