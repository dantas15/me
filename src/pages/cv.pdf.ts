import { readFileSync } from 'node:fs';

import handlebars from 'handlebars';
import chromium from '@sparticuz/chromium';
import { DateTime } from 'luxon';

import type { APIRoute } from 'astro';
import type { Browser } from 'puppeteer';
import type { Browser as CoreBrowser } from 'puppeteer-core';

import { personalData } from '../data/personal';

export const GET: APIRoute = async () => {
    const templateHtml = readFileSync('src/hbs/cv-template.hbs', 'utf8');

    let browser: Browser | CoreBrowser;
    if (process.env.NODE_ENV === 'production') {
        const puppeteer = await import('puppeteer-core');
        browser = await puppeteer.launch({
            args: chromium.args,
            defaultViewport: chromium.defaultViewport,
            executablePath: await chromium.executablePath(),
            headless: chromium.headless
        });
    } else {
        const puppeteer = await import('puppeteer');
        browser = await puppeteer.launch({
            args: ['--no-sandbox', '--disable-setuid-sandbox']
        });
    }

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
