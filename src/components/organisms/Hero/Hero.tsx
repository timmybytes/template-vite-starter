import { FC } from 'react';
import tw from 'twin.macro';
import { CustomCssProps } from '@/types';
import { H1 } from '@/components/atoms/typography';

export type HeroProps = CustomCssProps & {
  //
};

/**
 * Hero
 */
export const Hero: FC<HeroProps> = ({ customCss }) => {
  return (
    <Container css={customCss}>
      <H1>Heading</H1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
        perspiciatis eligendi, quas illo doloremque quidem quod a omnis minus
        esse consequuntur cumque obcaecati, beatae excepturi debitis porro sed!
        Laborum, pariatur.
      </p>
    </Container>
  );
};

const Container = tw.div``;
