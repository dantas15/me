import { renderToBuffer } from '@react-pdf/renderer';

import { personalData } from '../data/personal';
import { getBuffer } from '@/components/CV';

export const GET: APIRoute = async () => {
    return new Response(await getBuffer(personalData), { headers: { 'Content-Type': 'application/pdf' } });
};
