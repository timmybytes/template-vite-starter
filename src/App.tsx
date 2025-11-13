import { Layout } from '@/components/wrappers/Layout';
import { Hero } from './components/organisms/Hero';
import { MDXProvider } from '@mdx-js/react';
// @ts-ignore - no declaration file for .mdx imports; treat MDX as any
import Post from './post.mdx';
import tw from 'twin.macro';

/** @type {MDXComponents} */
const components = {
  em(properties: React.HTMLAttributes<HTMLElement>) {
    return <i {...properties} />;
  },
  blockquote(properties: React.HTMLAttributes<HTMLElement>) {
    return (
      <blockquote
        tw="pl-4 border-l-4 border-purple-400 italic"
        {...properties}
      />
    );
  },
  h1({
    children,
    className,
    ...props
  }: React.HTMLAttributes<HTMLHeadingElement>) {
    return (
      <h1 css={tw`text-4xl font-extrabold my-6`} {...props}>
        {children}
      </h1>
    );
  },
  h2({
    children,
    className,
    ...props
  }: React.HTMLAttributes<HTMLHeadingElement>) {
    return (
      <h2 css={tw`text-3xl font-bold my-5`} {...props}>
        {children}
      </h2>
    );
  },
  h3({
    children,
    className,
    ...props
  }: React.HTMLAttributes<HTMLHeadingElement>) {
    return (
      <h3 css={tw`text-2xl font-semibold my-4`} {...props}>
        {children}
      </h3>
    );
  },
  h4({
    children,
    className,
    ...props
  }: React.HTMLAttributes<HTMLHeadingElement>) {
    return (
      <h4 css={tw`text-xl font-semibold my-3`} {...props}>
        {children}
      </h4>
    );
  },
  p({
    children,
    className,
    ...props
  }: React.HTMLAttributes<HTMLParagraphElement>) {
    return (
      <p css={tw`my-4 leading-relaxed`} {...props}>
        {children}
      </p>
    );
  },
  a({
    href,
    children,
    className,
    ...props
  }: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
    const isExternal = typeof href === 'string' && /^https?:\/\//.test(href);
    return (
      <a
        href={href}
        css={tw`text-purple-600 hover:underline`}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        {...props}
      >
        {children}
      </a>
    );
  },
  code({ className, children, ...props }: any) {
    const lang =
      typeof className === 'string' ? className.replace('language-', '') : '';
    const isInline = !className;
    if (isInline) {
      return (
        <code css={tw`bg-gray-100 px-1 py-0.5 rounded text-sm`} {...props}>
          {children}
        </code>
      );
    }
    return (
      <pre css={tw`my-4 rounded overflow-auto`}>
        <code tw="" {...props}>
          {children}
        </code>
      </pre>
    );
  },
  pre(props: React.HTMLAttributes<HTMLPreElement>) {
    // Ensure pre blocks keep passed children (usually a <code> element)
    return <div tw="my-4">{props.children}</div>;
  },
  ul({
    children,
    className,
    ...props
  }: React.HTMLAttributes<HTMLUListElement>) {
    return (
      <ul css={tw`list-disc pl-6 my-4`} {...props}>
        {children}
      </ul>
    );
  },
  ol({
    children,
    className,
    ...props
  }: React.HTMLAttributes<HTMLOListElement>) {
    return (
      <ol css={tw`list-decimal pl-6 my-4`} {...props}>
        {children}
      </ol>
    );
  },
  li({ children, className, ...props }: React.LiHTMLAttributes<HTMLLIElement>) {
    return (
      <li css={tw`my-1`} {...props}>
        {children}
      </li>
    );
  },
  img({
    alt,
    src,
    className,
    ...props
  }: React.ImgHTMLAttributes<HTMLImageElement>) {
    return (
      // responsive, rounded image with alt preserved
      <img src={src} alt={alt} css={tw`max-w-full rounded`} {...props} />
    );
  },
  hr() {
    return <hr tw="my-8 border-t-2 border-gray-200" />;
  },
  table({
    children,
    className,
    ...props
  }: React.HTMLAttributes<HTMLTableElement>) {
    return (
      <table css={tw`w-full table-auto my-6`} {...props}>
        {children}
      </table>
    );
  },
  thead({
    children,
    className,
    ...props
  }: React.HTMLAttributes<HTMLTableSectionElement>) {
    return (
      <thead css={tw`bg-gray-100`} {...props}>
        {children}
      </thead>
    );
  },
  tbody({
    children,
    className,
    ...props
  }: React.HTMLAttributes<HTMLTableSectionElement>) {
    return (
      <tbody css={tw``} {...props}>
        {children}
      </tbody>
    );
  },
  tr({
    children,
    className,
    ...props
  }: React.HTMLAttributes<HTMLTableRowElement>) {
    return (
      <tr css={tw``} {...props}>
        {children}
      </tr>
    );
  },
  th({
    children,
    className,
    ...props
  }: React.ThHTMLAttributes<HTMLTableHeaderCellElement>) {
    return (
      <th css={tw`text-left px-3 py-2`} {...props}>
        {children}
      </th>
    );
  },
  td({
    children,
    className,
    ...props
  }: React.TdHTMLAttributes<HTMLTableDataCellElement>) {
    return (
      <td css={tw`px-3 py-2`} {...props}>
        {children}
      </td>
    );
  },
};
const App = () => (
  <MDXProvider components={components}>
    <Layout>
      <Hero />
      <Post />
    </Layout>
  </MDXProvider>
);

export default App;
