import { CustomCssProps } from '@/types/types';
import { FC, ReactNode } from 'react';
import tw, { css, styled } from 'twin.macro';

export type LayoutProps = CustomCssProps & {
  children?: ReactNode;
};

/** -----------------------------------------------------------------
 * Layout - Main layout grid for the application
 *
 *  --------------------------------------------------------------- */
export const Layout: FC<LayoutProps> = ({ children, customCss }) => {
  return (
    <MainGrid>
      <InnerContent>{children}</InnerContent>
    </MainGrid>
  );
};

const MainGrid = styled.div(() => [
  tw`grid h-full w-full min-h-screen justify-center p-8 bg-zinc-800 text-neutral-100`,
]);

const InnerContent = styled.div(() => [tw`w-full max-w-5xl h-full`]);
