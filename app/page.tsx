import Link from 'next/link';
import { ArrowIcon } from './components/ArrowIcon';

export default function Page() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">
        hi, I'm gustavo dantas 👋
      </h1>
      <p className="prose prose-neutral dark:prose-invert">
        I'm a future software engineer based in Brazil.
      </p>
      <br />
      <p className="prose prose-neutral dark:prose-invert">
        <Link href="https://ufla.br/" target="_blank">
          UFLA
        </Link>{' '}
        B.Sc. Computer Science. currently <Link href="/work">working</Link> as a
        Project Director at{' '}
        <Link href="https://www.linkedin.com/company/compjunior/">
          Comp Júnior
        </Link>
        .
      </p>
      <ul className="flex flex-col md:flex-row mt-8 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-600 dark:text-neutral-300">
        <li>
          <a
            className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="https://bento.me/dantas"
          >
            <ArrowIcon />
            <p className="h-7 ml-2">all my links</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/dantas15/me"
          >
            <ArrowIcon />
            <p className="h-7 ml-2">⭐ this project on github!</p>
          </a>
        </li>
      </ul>
    </section>
  );
}
