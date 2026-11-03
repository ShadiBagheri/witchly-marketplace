import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Typography } from './typography';
import { TypographyProps } from './types';

const meta = {
  title: 'UI/Typography',
  component: Typography,
  parameters: {
    docs: {
      description: {
        component:
          'A comprehensive Typography component for displaying text in various types and styles',
      },
    },
  },
} satisfies Meta<typeof Typography>;

export const Basic: Story = {
  args: {
    children: 'This is a Typography Component',
    as: 'p',
  },
  render: (args: TypographyProps) => <Typography {...args}>{args.children}</Typography>,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const AlignmentsVariants: Story = {
  render: () => (
    <div className="flex w-full flex-col items-center justify-center gap-5">
      <Typography className="body-1 text-neutral-0 rounded-md bg-pink-300 px-3 py-2">
        Align Variants
      </Typography>
      <div className="flex flex-col gap-5 rounded-md p-3 shadow-sm">
        <Typography align="left" className="body-3">
          This is Left
        </Typography>
        <Typography align="right" className="body-3">
          This is Right
        </Typography>
        <Typography align="center" className="body-3">
          This is Center
        </Typography>
        <Typography align="justify" className="body-3">
          This is Justify
        </Typography>
      </div>
    </div>
  ),
};

export const DecorationVariants: Story = {
  render: () => (
    <div className="flex w-full flex-col items-center justify-center gap-5">
      <Typography className="body-1 text-neutral-0 rounded-md bg-pink-300 px-3 py-2">
        Decoration Variants
      </Typography>
      <div className="flex flex-col gap-5 rounded-md p-3 shadow-sm">
        <Typography className="body-3" decoration="underline">
          This is Underline
        </Typography>
        <Typography className="body-3" decoration="lineThrough">
          This is LineThrough
        </Typography>
        <Typography className="body-3" decoration="overline">
          This is Overline
        </Typography>
      </div>
    </div>
  ),
};

export const TransformVariants: Story = {
  render: () => (
    <div className="flex w-full flex-col items-center justify-center gap-5">
      <Typography className="body-1 text-neutral-0 rounded-md bg-pink-300 px-3 py-2">
        Transform Variants
      </Typography>
      <div className="flex flex-col gap-5 rounded-md p-3 shadow-sm">
        <Typography transform="uppercase" className="body-3">
          This is Uppercase
        </Typography>
        <Typography transform="capitalize" className="body-3">
          This is Capitalize
        </Typography>
        <Typography transform="lowercase" className="body-3">
          This is Lowercase
        </Typography>
      </div>
    </div>
  ),
};

export const DirectionControl: Story = {
  render: () => (
    <div className="flex w-full flex-col items-center justify-center gap-5">
      <Typography className="body-1 text-neutral-0 rounded-md bg-pink-300 px-3 py-2">
        Direction Control
      </Typography>
      <div className="grid grid-cols-2 items-center justify-between gap-20">
        {/* RTL */}
        <div className="mt-10 flex flex-col gap-5 rounded-md p-3 shadow-sm">
          <Typography className="body-1 text-pink-300" align="center">
            RTL Direction
          </Typography>
          <Typography dir="rtl" className="body-4">
            This is English Text with RTL direction
          </Typography>
          <Typography dir="rtl" className="body-4">
            این متن فارسی با (RTL Direction) است.
          </Typography>
        </div>
        {/* LTR */}
        <div className="mt-10 flex flex-col gap-5 rounded-md p-3 shadow-sm">
          <Typography className="body-1 text-pink-300" align="center">
            LTR Direction
          </Typography>
          <Typography dir="ltr" className="body-4">
            This is English Text with LTR direction
          </Typography>
          <Typography dir="ltr" className="body-4">
            این متن فارسی با (LTR Direction) است.
          </Typography>
        </div>
        {/* AUTO */}
        <div className="mt-10 flex flex-col gap-5 border-x-2 px-3">
          <Typography className="body-1 text-pink-300" align="center">
            Auto direction
          </Typography>
          <Typography dir="auto" className="body-4">
            This is English Text with Auto direction
          </Typography>
          <Typography dir="auto" className="body-4">
            این متن فارسی با (Auto direction ) است.
          </Typography>
        </div>

        {/* Comparison */}
        <div className="mt-10 flex flex-col gap-5 rounded-md p-3 shadow-sm">
          <Typography className="body-1 text-pink-300" align="center">
            Comparison: Same Text, Different Directions
          </Typography>
          <div className="space-y-3">
            <div className="border-primary-50 border-l-4 pl-4">
              <Typography className="body-4" dir="ltr">
                Hello سلام World دنیا
              </Typography>
              <Typography className="body-22 text-neutral-80">dir=ltr</Typography>
            </div>
            <div className="border-secondary-50 border-l-4 pl-4">
              <Typography className="body-4" dir="rtl">
                Hello سلام World دنیا
              </Typography>
              <Typography className="body-22 text-neutral-80">dir=rtl</Typography>
            </div>
            <div className="border-success-50 border-l-4 pl-4">
              <Typography className="body-4" dir="auto">
                Hello سلام World دنیا
              </Typography>
              <Typography className="body-22 text-neutral-80">dir=auto (auto-detected)</Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const LineClamping: Story = {
  render: () => {
    const clamp = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] as const;

    return (
      <div className="flex w-full flex-col items-center justify-center gap-5">
        <Typography className="body-1 text-neutral-0 rounded-md bg-pink-300 px-3 py-2">
          Line Clamp
        </Typography>
        {clamp.map((lines) => (
          <div
            key={lines}
            className="bg-neutral-10 grid grid-cols-1 gap-4 rounded-lg p-4 shadow-sm"
          >
            <Typography as="h3" className="heading-3 mb-2">
              Line Clamp {lines}
            </Typography>
            <Typography lineClamp={lines} className="body-18">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, modi alias? Dolorem
              libero accusamus amet, consectetur ratione culpa quidem exercitationem saepe excepturi
              praesentium, unde, odit numquam quia ipsum. Quia, iure? Temporibus natus tenetur
              dignissimos suscipit, veritatis repellat harum! Fugiat porro ullam consectetur
              repellendus perferendis, hic nam consequatur nesciunt? Animi magnam beatae, asperiores
              laborum, nemo nobis expedita sequi labore saepe sed facere! Sint porro vitae numquam
              necessitatibus dolorem provident ipsa asperiores, odio suscipit deserunt aliquam culpa
              eveniet libero repellendus, nihil autem id quasi laudantium earum, doloribus ipsam
              modi incidunt? Nulla eaque odio facilis suscipit! Earum, molestiae, necessitatibus,
              sequi eveniet repellat nostrum aliquam illum iure dolor fugit quae asperiores
              laudantium. Consequuntur, nam. Natus tenetur libero neque recusandae sed quaerat totam
              repellendus voluptatibus, possimus nisi omnis iste ex accusamus quidem dolor
              perspiciatis earum et nobis nesciunt quo ipsa ipsam quisquam adipisci amet. Tenetur,
              laudantium vero? Adipisci in nisi exercitationem sed sit, non commodi, voluptates
              necessitatibus fugit vero ut esse facilis. Iusto accusantium repudiandae molestias
              alias, earum ratione, mollitia corrupti est tenetur porro odit pariatur maxime dolores
              doloremque consectetur delectus culpa ipsam ipsum! Doloribus itaque alias asperiores
              maxime, nobis eligendi incidunt, ad nihil laudantium, consectetur voluptatum soluta.
              Ducimus voluptatibus at dolores asperiores mollitia. Sit distinctio numquam eaque
              nobis ea ullam quo blanditiis!
            </Typography>
          </div>
        ))}
      </div>
    );
  },
};

export const TruncateExample: Story = {
  render: () => (
    <div className="w-2/3">
      <Typography
        align="center"
        className="body-1 text-neutral-0 mb-5 rounded-md bg-pink-300 px-3 py-2"
      >
        Truncate
      </Typography>
      <div className="flex flex-col gap-5 rounded-md p-3 shadow-sm">
        <Typography className="body-3" truncate="start">
          Start: This is a very long text that will be truncated with ellipsis when it exceeds the
          container width.
        </Typography>
        <Typography className="body-3" truncate="end">
          End: This is a very long text that will be truncated with ellipsis when it exceeds the
          container width.
        </Typography>
      </div>
    </div>
  ),
};

export const HTMLTags: Story = {
  render: () => (
    <div className="flex w-full flex-col items-center justify-center gap-5">
      <Typography className="body-1 text-neutral-0 rounded-md bg-pink-300 px-3 py-2">
        HTML Tags
      </Typography>
      <div className="flex flex-col gap-5 rounded-md p-3 shadow-sm">
        <Typography as="h1" className="heading-1">
          This is a H1 Tag
        </Typography>
        <Typography as="h2" className="heading-2">
          This is a H2 Tag
        </Typography>
        <Typography as="h3" className="heading-3">
          This is a H3 Tag
        </Typography>
        <Typography as="p" className="body-3">
          This is a P Tag
        </Typography>
        <Typography as="div" className="body-5">
          This is a div Tag
        </Typography>
        <Typography as="span" className="body-10">
          This is a span Tag
        </Typography>
      </div>
    </div>
  ),
};

export const TextColor: Story = {
  render: () => (
    <div className="flex w-full flex-col items-center justify-center gap-5">
      <Typography className="body-1 text-neutral-0 rounded-md bg-pink-300 px-3 py-2">
        Text Color
      </Typography>
      <div className="flex flex-col gap-5 rounded-md p-3 shadow-sm">
        <Typography className="body-3" color="primary">
          Primary
        </Typography>
        <Typography className="body-3" color="secondary">
          Secondary
        </Typography>
        <Typography className="body-3" color="info">
          Info
        </Typography>
        <Typography className="body-3" color="success">
          Success
        </Typography>
        <Typography className="body-3" color="warning">
          Warning
        </Typography>
        <Typography className="body-3" color="neutral">
          Neutral
        </Typography>
      </div>
    </div>
  ),
};

export const ResponsiveTypography: Story = {
  render: () => (
    <div className="flex w-full flex-col items-center justify-center gap-5">
      <Typography className="body-1 text-neutral-0 rounded-md bg-pink-300 px-3 py-2">
        Responsive Typography
      </Typography>
      <div className="flex flex-col gap-5 rounded-md p-3 shadow-sm">
        <Typography className="body-15 sm:body-10 md:body-5 lg:body-2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore beatae dignissimos, qui,
          accusamus eaque excepturi atque voluptatem rem ducimus, exercitationem voluptas? Quod
          cupiditate sapiente cum soluta velit impedit numquam rerum?
        </Typography>
      </div>
    </div>
  ),
};

export const UtilityClasses: Story = {
  render: () => (
    <div className="flex w-full flex-col items-center justify-center gap-5">
      <Typography className="body-1 text-neutral-0 rounded-md bg-pink-300 px-3 py-2">
        Utility Classes
      </Typography>
      {/* Display */}
      <div className="rounded-md p-3 shadow-sm">
        <Typography className="heading-2">Display Classes - Line Height: 100%</Typography>
        <div className="mt-5 gap-2">
          <Typography className="display-1 text-neutral-500">
            display-1 - Bold-48px - Line Height: Auto
          </Typography>
          <Typography className="display-2 text-neutral-500">
            display-2 - Bold-40px - Line Height: Auto
          </Typography>
          <Typography className="display-3 text-neutral-500">
            display-3 - Bold-32px - Line Height: Auto
          </Typography>
        </div>
      </div>
      {/* Heading */}
      <div className="rounded-md p-3 shadow-sm">
        <Typography className="heading-2">Heading Classes - Line Height: 100%</Typography>
        <div className="mt-5 gap-2">
          <Typography className="heading-1 text-neutral-500">
            heading-1 - Bold-28px - Line Height: Auto
          </Typography>
          <Typography className="heading-2 text-neutral-500">
            heading-2 - Bold-24px - Line Height: Auto
          </Typography>
          <Typography className="heading-3 text-neutral-500">
            heading-3 - Bold-20px - Line Height: Auto
          </Typography>
          <Typography className="heading-4 text-neutral-500">
            heading-4 - Bold-18px - Line Height: Auto
          </Typography>
          <Typography className="heading-5 text-neutral-500">
            heading-5 - Bold-16px - Line Height: Auto
          </Typography>
        </div>
      </div>
      {/* Body */}
      <div className="rounded-md p-3 shadow-sm">
        <Typography className="heading-2">Body Classes (Sample)</Typography>
        <div className="mt-5 gap-2">
          <Typography className="body-1 text-neutral-500">
            body-1 - semiBold-24px - Line Height: 160%
          </Typography>
          <Typography className="body-3 text-neutral-500">
            body-3 - Normal-24px - Line Height: 160%
          </Typography>
          <Typography className="body-5 text-neutral-500">
            body-5 - Medium-20px - Line Height: Auto
          </Typography>
          <Typography className="body-9 text-neutral-500">
            body-9 - Normal-18px - Line Height: Auto
          </Typography>
          <Typography className="body-13 text-neutral-500">
            body-13 - semiBold-14px - Line Height: Auto
          </Typography>
          <Typography className="body-18 text-neutral-500">
            body-18 - Normal-12px - Line Height: 140%
          </Typography>
        </div>
      </div>
      {/* Line Height Examples */}
      <div className="rounded-md p-3 shadow-sm">
        <Typography className="heading-2">Line Height Examples</Typography>
        <div className="mt-5 gap-2">
          <Typography className="body-1 mb-3 text-neutral-500" lineClamp={1}>
            body-1 with Line Height: 160% - Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Natus commodi mollitia veniam, optio nisi aliquam beatae tenetur quaerat at placeat!
            Dolores, dignissimos? Ipsum non dolorum nemo. Porro officiis accusantium saepe.
          </Typography>
          <Typography className="body-5 mb-3 text-neutral-500" lineClamp={1}>
            body-5 with Line Height: Auto - Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Natus commodi mollitia veniam, optio nisi aliquam beatae tenetur quaerat at placeat!
            Dolores, dignissimos? Ipsum non dolorum nemo. Porro officiis accusantium saepe.
          </Typography>
          <Typography className="body-14 mb-3 text-neutral-500" lineClamp={1}>
            body-14 with Line Height: 130% - Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Natus commodi mollitia veniam, optio nisi aliquam beatae tenetur quaerat at
            placeat! Dolores, dignissimos? Ipsum non dolorum nemo. Porro officiis accusantium saepe.
          </Typography>
          <Typography className="body-15 mb-3 text-neutral-500" lineClamp={1}>
            body-15 with Line Height: 140% - Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Natus commodi mollitia veniam, optio nisi aliquam beatae tenetur quaerat at
            placeat! Dolores, dignissimos? Ipsum non dolorum nemo. Porro officiis accusantium saepe.
          </Typography>
        </div>
      </div>
      {/* Line Height Comparison */}
      <div className="rounded-md p-3 shadow-sm">
        <Typography className="heading-2">Line Height Comparison</Typography>
        <div className="flex gap-5">
          <Typography className="body-12 text-neutral-500" lineClamp={3}>
            This is a sample text with body-12 class and line-height: 160%. This creates comfortable
            spacing between lines, making it easier to read longer paragraphs. The increased line
            height helps with readability and reduces eye strain
          </Typography>
          <Typography className="body-14 text-neutral-500" lineClamp={3}>
            This is a sample text with body-14 class and line-height: 130%. Small text benefits from
            appropriate line height to maintain readability. Even with smaller font size, proper
            line spacing is crucial for user experience.
          </Typography>
          <Typography className="body-15 text-neutral-500" lineClamp={3}>
            This is a sample text with body-15 class and line-height: 140%. This creates tighter
            spacing between lines, which is good for compact layouts. It saves vertical space while
            still maintaining reasonable readability.
          </Typography>
        </div>
      </div>
    </div>
  ),
};

export const InheritExample: Story = {
  render: () => (
    <div className="flex w-full flex-col items-center justify-center gap-5">
      <Typography className="body-1 text-neutral-0 rounded-md bg-pink-300 px-3 py-2">
        Inherit Example
      </Typography>
      {/* Without Inherit (default) */}
      <div className="rounded-md p-3 shadow-sm">
        <Typography className="heading-4">Without Inherit (default)</Typography>
        <div className="flex flex-col gap-3 text-lg text-neutral-500">
          Parent container with custom styles
          <Typography className="body-6">
            This text uses its own typography styles (does not inherit from parent)
          </Typography>
        </div>
      </div>
      {/* Inherit = true */}
      <div className="rounded-md p-3 shadow-sm">
        <Typography className="heading-4">Inherit = true</Typography>
        <div className="flex flex-col gap-3 text-lg font-bold text-neutral-500">
          Parent container with custom styles
          <Typography className="body-6" inherit={true}>
            This text inherits font size, weight, and color from parent
          </Typography>
        </div>
      </div>

      {/*    Comparison Side by Side */}
      <div className="rounded-md p-3 shadow-sm">
        <Typography className="heading-4"> Comparison Side by Side</Typography>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            Regular text (inherits)
            <Typography className="body-2" inherit={true}>
              Child with inherit=true
            </Typography>
          </div>
          <div>
            Regular text (doesn&apos;t inherit)
            <Typography className="body-2" inherit={false}>
              Child with inherit=false
            </Typography>
          </div>
        </div>
      </div>
    </div>
  ),
};
