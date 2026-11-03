import { ColorVariant } from '@/components/ui/types';

export type AlignType = 'left' | 'right' | 'center' | 'justify';

export type TruncateValue = 'end' | 'start';

export type DirValue = 'ltr' | 'rtl' | 'auto';

export type DecorationValue = 'underline' | 'lineThrough' | 'overline';

export type TransformValue = 'uppercase' | 'capitalize' | 'lowercase';

export type LineClampValue = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | undefined;

export type Tags =
  | 'p'
  | 'span'
  | 'div'
  | 'sub'
  | 'sup'
  | 'strong'
  | 'em'
  | 'mark'
  | 'small'
  | 'del'
  | 'ins'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'ul'
  | 'ol'
  | 'li';

type NonHeadingTags = Exclude<Tags, 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'>;

interface TypographyWithTextTags {
  as?: NonHeadingTags;
  truncate?: TruncateValue;
  inherit?: boolean;
}

interface TypographyWithHadingTags {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  truncate?: never;
  inherit?: never;
}

interface BaseTypographyProps {
  children?: ReactNode;
  className?: string;
  color?: ColorVariant;
  dir?: DirValue;
  align?: AlignType;
  transform?: TransformValue;
  decoration?: DecorationValue;
  lineClamp?: LineClampValue;
  asChild?: boolean;
}

export type TypographyProps = BaseTypographyProps &
  (TypographyWithTextTags | TypographyWithHadingTags);
