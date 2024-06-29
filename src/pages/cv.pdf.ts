import { readFileSync } from 'node:fs';

import handlebars from 'handlebars';
import puppeteer from 'puppeteer';
import { DateTime } from 'luxon';

import type { APIRoute } from 'astro';

import { personalData } from '../data/personal';

export const GET: APIRoute = async () => {
    const templateHtml = readFileSync('src/hbs/cv-template.hbs', 'utf8');

    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    handlebars.registerHelper('formatDate', function (dateStr) {
        return DateTime.fromISO(dateStr).toFormat('MMM yyyy');
    });

    const template = handlebars.compile(templateHtml);
    const html = template(personalData);

    await page.setContent(html);
    const pdf = await page.pdf({ format: 'A4' });
    await browser.close();

    return new Response(pdf, { headers: { 'Content-Type': 'application/pdf' } });
};
