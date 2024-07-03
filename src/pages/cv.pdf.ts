import { readFileSync } from 'node:fs';

import handlebars from 'handlebars';
import { DateTime } from 'luxon';

import { personalData } from '../data/personal';

import type { APIRoute } from 'astro';

type PDFResponse = {
    pdf: string;
};

async function fetchPdf(html: string): Promise<Buffer> {
    const response = await fetch(import.meta.env.PDF_ENDPOINT, {
        headers: { 'Content-Type': 'application/json', authorization: import.meta.env.PDF_GEN_API_KEY },
        method: 'POST',
        body: JSON.stringify({ html })
    });

    if (!response.ok) {
        throw new Error(`PDF Api not working: ${(await response.json()).error}`);
    }
    const data: PDFResponse = await response.json();

    return Buffer.from(data.pdf, 'utf-8');
}

export const GET: APIRoute = async () => {
    const templateHtml = readFileSync('src/hbs/cv-template.hbs', 'utf8');

    handlebars.registerHelper('formatDate', function (dateStr) {
        return DateTime.fromISO(dateStr).toFormat('MMM yyyy');
    });

    const template = handlebars.compile(templateHtml);
    const html = template(personalData);

    const pdf = await fetchPdf(html);

    return new Response(pdf, { headers: { 'Content-Type': 'application/pdf' } });
};
